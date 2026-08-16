import { useLanguage } from './LanguageContext';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
      className={`w-9 h-9 rounded-full border text-xs font-semibold flex items-center justify-center transition-colors ${className}`}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
