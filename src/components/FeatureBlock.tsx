
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureBlockProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const FeatureBlock = ({ title, description, image, reverse = false }: FeatureBlockProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8",
      reverse && "md:flex-row-reverse"
    )}>
      <div className="w-full md:w-1/2">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeatureBlocks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Enjoy Your <span className="text-teal-600">Stay</span>
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-16">
          <FeatureBlock 
            title="Relax on Your Private Deck" 
            description="Start your morning with coffee on the spacious deck overlooking the ocean. The comfortable lounge chairs are perfect for soaking up the sun or enjoying a good book. As evening approaches, it's the ideal spot to witness spectacular sunsets while sipping your favorite beverage."
            image="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          
          <FeatureBlock 
            title="Unwind in Luxurious Living Spaces" 
            description="Our open-concept living area features floor-to-ceiling windows that flood the space with natural light while providing panoramic ocean views. The plush seating, designer furnishings, and high-end entertainment system create the perfect atmosphere for relaxation after a day of adventure."
            image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
