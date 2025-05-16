
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gr' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 border-gray-300 bg-white/80 hover:bg-gray-100 text-gray-700 hover:text-brand-primary"
      aria-label={language === 'en' ? 'Switch to Greek' : 'Switch to English'}
    >
      <Globe size={18} />
      <span className="font-medium">
        {language === 'en' ? 'English' : 'Ελληνικά'}
      </span>
    </Button>
  );
}
