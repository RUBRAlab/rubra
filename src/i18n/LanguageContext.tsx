import React, { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isSpanishOnly, languageFromPath, localizePath, spanishPath, type Language } from './paths';

export type { Language };

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  /** Ruta en español → ruta en el idioma actual ('/casos' → '/en/cases'). */
  lp: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'rubra-lang';
// La fija el middleware (middleware.ts) según el país de la IP del visitante.
// Es solo un default: si el usuario ya eligió idioma, STORAGE_KEY manda siempre.
const GEO_COOKIE_NAME = 'rubra-lang-geo';

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

// Sin fallback a navigator.language: el renderer de Googlebot reporta en-US y
// terminaría redirigido a /en sin ver nunca la versión en español.
function getPreferredLanguage(): Language | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // localStorage bloqueado: seguimos con la cookie de geo.
  }
  const geo = getCookie(GEO_COOKIE_NAME);
  return geo === 'es' || geo === 'en' ? geo : null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const language = languageFromPath(location.pathname);

  const switchTo = (target: Language, replace = false) => {
    const path = localizePath(spanishPath(location.pathname), target);
    navigate(path + location.search + location.hash, { replace });
  };

  // Solo al entrar: un visitante de afuera que llega a una URL en español va a la
  // versión en inglés. Nunca al revés: un link a /en compartido se respeta.
  useEffect(() => {
    if (language === 'es' && !isSpanishOnly(location.pathname) && getPreferredLanguage() === 'en') switchTo('en', true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const target = language === 'es' ? 'en' : 'es';
    try {
      window.localStorage.setItem(STORAGE_KEY, target);
    } catch {
      // Sin storage el cambio igual funciona, solo no se recuerda.
    }
    switchTo(target);
  };

  const lp = (path: string) => localizePath(path, language);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, lp }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
