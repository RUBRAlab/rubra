// Endpoint de notificaciones para las rutinas automáticas de RUBRA lab.
// Las rutinas de nube no pueden enviar email (el conector de Gmail solo crea
// borradores), así que le pegan acá y el envío sale por Resend.

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

type Payload = {
  asunto?: string
  cuerpo?: string
  prioridad?: 'normal' | 'alta'
  origen?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderHtml({ asunto, cuerpo, origen }: Required<Pick<Payload, 'asunto' | 'cuerpo'>> & { origen?: string }) {
  const parrafos = escapeHtml(cuerpo)
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 16px;white-space:pre-wrap">${p.replace(/\n/g, '<br>')}</p>`)
    .join('')

  return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:640px;margin:0 auto;padding:24px">
  <h1 style="font-size:18px;margin:0 0 20px;font-weight:600">${escapeHtml(asunto)}</h1>
  ${parrafos}
  <p style="margin:32px 0 0;padding-top:16px;border-top:1px solid #e5e5e5;font-size:12px;color:#888">
    Notificación automática de RUBRA lab${origen ? ` · ${escapeHtml(origen)}` : ''}
  </p>
</div>`
}

export async function POST(request: Request) {
  const token = process.env.NOTIFY_TOKEN
  const apiKey = process.env.RESEND_API_KEY

  if (!token || !apiKey) {
    return Response.json({ error: 'Endpoint sin configurar' }, { status: 500 })
  }

  const auth = request.headers.get('authorization')
  if (auth !== `Bearer ${token}`) {
    return Response.json({ error: 'No autorizado' }, { status: 401 })
  }

  let payload: Payload
  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const asunto = payload.asunto?.trim()
  const cuerpo = payload.cuerpo?.trim()

  if (!asunto || !cuerpo) {
    return Response.json({ error: 'Faltan asunto o cuerpo' }, { status: 400 })
  }

  const prefijo = payload.prioridad === 'alta' ? '[!] ' : ''

  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.NOTIFY_FROM ?? 'RUBRA lab <avisos@rubra.ar>',
      to: [process.env.NOTIFY_TO ?? 'hola@rubra.ar'],
      subject: `${prefijo}${asunto}`,
      html: renderHtml({ asunto, cuerpo, origen: payload.origen }),
      text: cuerpo,
    }),
  })

  if (!res.ok) {
    const detalle = await res.text()
    console.error('Resend falló:', res.status, detalle)
    return Response.json({ error: 'No se pudo enviar', status: res.status }, { status: 502 })
  }

  const { id } = (await res.json()) as { id?: string }
  return Response.json({ ok: true, id })
}
