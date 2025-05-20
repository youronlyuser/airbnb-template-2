
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'en' ? (
            <>Frequently Asked <span className="text-theme-primary">Questions</span></>
          ) : (
            <><span className="text-theme-primary">{t.faq.title}</span></>
          )}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-theme-text">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-theme-text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
