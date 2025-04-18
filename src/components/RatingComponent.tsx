
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const RatingComponent = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const { toast } = useToast();
  
  const handleRatingSubmit = () => {
    if (rating) {
      toast({
        title: "Thank you for your rating!",
        description: `You rated us ${rating} out of 5 stars.`,
      });
    } else {
      toast({
        title: "Please select a rating",
        description: "Click on a star to rate your experience.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rate Your <span className="text-teal-600">Experience</span>
          </h2>
          <p className="text-gray-600 mb-8">
            We value your feedback! Let us know how we did by rating your stay at Seaside Home.
          </p>
          
          <div className="flex justify-center space-x-3 mb-6">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;
              
              return (
                <button
                  key={i}
                  type="button"
                  className="focus:outline-none transition duration-150"
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                >
                  <Star size={36} 
                    className={cn(
                      "transition-all duration-150", 
                      (hover !== null ? hover >= ratingValue : rating !== null && rating >= ratingValue) 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-300"
                    )}
                  />
                </button>
              );
            })}
          </div>
          
          <button
            onClick={handleRatingSubmit}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Submit Your Rating
          </button>
        </div>
      </div>
    </section>
  );
};

export default RatingComponent;
