
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
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-700 hover:text-brand-primary"
      aria-label={language === 'en' ? 'Switch to Greek' : 'Switch to English'}
    >
      <Globe size={20} />
      <span className="font-medium">{language === 'en' ? 'EN' : 'GR'}</span>
    </Button>
  );
}
