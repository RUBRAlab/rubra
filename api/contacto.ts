// Endpoint del formulario público de contacto de rubra.ar.
// Antes el submit armaba un mailto: — no generaba lead, no funcionaba en
// celulares sin cliente de mail configurado, y no había forma de saber si
// alguien lo había intentado. Este endpoint manda el mail real por Resend
// y confirma recepción al visitante, mismo patrón que api/notificar.ts.

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

type Payload = {
  name?: string
  email?: string
  phone?: string
  company?: string
  process?: string
  lang?: 'es' | 'en'
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function renderNotificacion({ name, email, phone, company, process }: { name: string; email: string; phone: string; company: string; process: string }) {
  const whatsappLink = phone
    ? `<p style="margin:0 0 8px"><strong>WhatsApp / Teléfono:</strong> <a href="https://wa.me/${phone.replace(/\D/g, '')}">${escapeHtml(phone)}</a></p>`
    : ''
  return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:640px;margin:0 auto;padding:24px">
  <h1 style="font-size:18px;margin:0 0 20px;font-weight:600">Nueva consulta desde rubra.ar</h1>
  <p style="margin:0 0 8px"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
  <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
  ${whatsappLink}
  <p style="margin:0 0 16px"><strong>Empresa:</strong> ${escapeHtml(company || '—')}</p>
  <p style="margin:0 0 16px;white-space:pre-wrap">${escapeHtml(process)}</p>
  <p style="margin:32px 0 0;padding-top:16px;border-top:1px solid #e5e5e5;font-size:12px;color:#888">
    Formulario de contacto de rubra.ar
  </p>
</div>`
}

function renderAutorespuesta(name: string, lang: 'es' | 'en') {
  if (lang === 'en') {
    return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:640px;margin:0 auto;padding:24px">
  <p style="margin:0 0 16px">Hi ${escapeHtml(name)},</p>
  <p style="margin:0 0 16px">Thanks for reaching out to RUBRA lab. We got your message and will get back to you shortly.</p>
  <p style="margin:0 0 16px">If it's urgent, you can also reach us on WhatsApp from the site.</p>
  <p style="margin:32px 0 0;font-size:13px;color:#666">RUBRA lab · www.rubra.ar</p>
</div>`
  }
  return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:640px;margin:0 auto;padding:24px">
  <p style="margin:0 0 16px">Hola ${escapeHtml(name)},</p>
  <p style="margin:0 0 16px">Gracias por escribirnos a RUBRA lab. Recibimos tu consulta y te vamos a responder a la brevedad.</p>
  <p style="margin:0 0 16px">Si es urgente, también podés escribirnos por WhatsApp desde el sitio.</p>
  <p style="margin:32px 0 0;font-size:13px;color:#666">RUBRA lab · www.rubra.ar</p>
</div>`
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json(
      { error: 'Endpoint sin configurar', faltan: ['RESEND_API_KEY'] },
      { status: 500 }
    )
  }

  let payload: Payload
  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const name = payload.name?.trim()
  const email = payload.email?.trim()
  // Teléfono y empresa son opcionales: pedirlos obligatorios sumaba fricción
  // sin agregar información que no se pueda preguntar después.
  const phone = payload.phone?.trim() ?? ''
  const company = payload.company?.trim() ?? ''
  const process_ = payload.process?.trim()
  const lang = payload.lang === 'en' ? 'en' : 'es'

  if (!name || !email || !process_) {
    return Response.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: 'Email inválido' }, { status: 400 })
  }

  const from = process.env.NOTIFY_FROM ?? 'RUBRA lab <avisos@rubra.ar>'
  const to = process.env.NOTIFY_TO ?? 'hola@rubra.ar'

  // Dos envíos independientes: si la autorespuesta falla, la notificación a
  // Ruperto no se pierde (y viceversa). No usar Promise.all para no perder
  // el lead si Resend devuelve 429 en el segundo request.
  const notifRes = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: company ? `Nueva consulta de ${name} (${company})` : `Nueva consulta de ${name}`,
      html: renderNotificacion({ name, email, phone, company, process: process_ }),
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || '—'}\nEmpresa: ${company || '—'}\n\n${process_}`,
    }),
  })

  if (!notifRes.ok) {
    const detalle = await notifRes.text()
    console.error('Resend falló (notificación):', notifRes.status, detalle)
    return Response.json({ error: 'No se pudo enviar' }, { status: 502 })
  }

  try {
    await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [email],
        subject: lang === 'en' ? 'We got your message' : 'Recibimos tu consulta',
        html: renderAutorespuesta(name, lang),
      }),
    })
  } catch (error) {
    // La autorespuesta es cortesía, no bloquea el lead si falla.
    console.error('Resend falló (autorespuesta):', error)
  }

  return Response.json({ ok: true })
}
