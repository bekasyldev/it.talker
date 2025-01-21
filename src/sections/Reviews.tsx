import { useState } from 'react';

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviews = [
    {
      id: 1,
      image: '/assets/review_1.png',
    },
    {
      id: 2,
      image: '/assets/review_2.png',
    },
    {
      id: 3,
      image: '/assets/review_3.png',
    }
  ];

  const handleSlide = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return prev === reviews.length ? 1 : prev + 1;
      }
      return prev === 1 ? reviews.length : prev - 1;
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleSlides = () => {
    const result = [];
    const totalSlides = reviews.length;

    // Previous slide
    const prevIndex = currentSlide === 1 ? totalSlides - 1 : currentSlide - 2;
    result.push(reviews[prevIndex]);

    // Current slide
    result.push(reviews[currentSlide - 1]);

    // Next slide
    const nextIndex = currentSlide === totalSlides ? 0 : currentSlide;
    result.push(reviews[nextIndex]);

    return result;
  };

  return (
    <section id="reviews" className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-4xl md:font-semibold mb-8 md:mb-12">Отзывы</h2>

        <div className="relative">
          {/* Reviews Slider */}
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-[26px] md:gap-[26px] w-full max-w-[968px] mx-auto">
              {getVisibleSlides().map((review, index) => (
                <div 
                  key={review.id}
                  className={`transition-all duration-500 ease-in-out transform flex-none
                    ${index === 1 
                      ? 'w-[280px] md:w-[450px] aspect-[328/347] scale-100 opacity-100 z-20' 
                      : 'w-[240px] md:w-[293px] aspect-[293/314] scale-90 opacity-50 z-10'
                    }
                    ${isAnimating ? 'translate-x-0' : ''}
                  `}
                >
                  <img 
                    src={review.image} 
                    alt={`Review ${review.id}`} 
                    className={`w-full h-full object-cover ${
                      index === 1 ? 'rounded-[22px]' : 'rounded-[20px]'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleSlide('prev')}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center hover:bg-[#18529D] hover:text-white transition-colors disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleSlide('next')}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center hover:bg-[#18529D] hover:text-white transition-colors disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
