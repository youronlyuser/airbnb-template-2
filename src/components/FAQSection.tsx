
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
  
  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in is from 3:00 PM to 8:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
    },
    {
      question: "Is the property pet-friendly?",
      answer: "Yes, we welcome well-behaved pets! There is a $50 pet fee per stay. Please let us know in advance if you'll be bringing a pet, and note that pets must not be left unattended in the property."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, there is free parking for up to two vehicles in the driveway. Additional street parking is also available nearby."
    },
    {
      question: "How do I access the Wi-Fi?",
      answer: "Wi-Fi details are provided in the welcome booklet upon arrival. Our high-speed fiber connection ensures you stay connected throughout your stay."
    },
    {
      question: "What amenities are included?",
      answer: "The property includes a fully equipped kitchen, air conditioning, heating, washer/dryer, linens, towels, beach towels, beach chairs, toiletries, hairdryer, iron, and board games."
    },
    {
      question: "How do I collect the keys?",
      answer: "We use a secure digital lock system. You'll receive a unique access code 24 hours before check-in via email and text message. No physical key exchange is required."
    },
    {
      question: "Are there any good restaurants nearby?",
      answer: "Yes! There are several excellent restaurants within walking distance. Our favorites include The Coastal Kitchen (seafood), Harbor Cafe (breakfast), and Sunset Grill (amazing views). A detailed restaurant guide is included in your welcome package."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'en' ? (
            <>Frequently Asked <span className="text-teal-600">Questions</span></>
          ) : (
            <><span className="text-teal-600">{t.faq.title}</span></>
          )}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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
