
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HostCard from '@/components/HostCard';
import StayDetails from '@/components/StayDetails';
import Amenities from '@/components/Amenities';
import ReviewCard from '@/components/ReviewCard';
import FeatureBlocks from '@/components/FeatureBlock';
import LocalGuide from '@/components/LocalGuide';
import FAQSection from '@/components/FAQSection';
import RatingComponent from '@/components/RatingComponent';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  // Animation on scroll functionality
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  // Update document title
  useEffect(() => {
    document.title = "Seaside Home | Luxury Vacation Rental";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <div className="animate-on-scroll">
        <HostCard />
      </div>
      
      <div className="animate-on-scroll">
        <StayDetails />
      </div>
      
      <div className="animate-on-scroll">
        <Amenities />
      </div>
      
      <div className="animate-on-scroll">
        <ReviewCard />
      </div>
      
      <div className="animate-on-scroll">
        <FeatureBlocks />
      </div>
      
      <div className="animate-on-scroll">
        <LocalGuide />
      </div>
      
      <div className="animate-on-scroll">
        <FAQSection />
      </div>
      
      <div className="animate-on-scroll">
        <RatingComponent />
      </div>
      
      <div className="animate-on-scroll">
        <CTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
