import { useState } from 'react';

interface Outcome {
  icon: string;
  title: string;
}

function LearnOutcomes() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const cardsPerPage = 3;

  const outcomes: Outcome[] = [
    {
      icon: '/assets/tick.svg',
      title: 'Проектировать архитектуру систем с использованием современных подходов'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Работать с базами данных и оптимизировать их производительность'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Создавать качественную документацию и UML диаграммы'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Эффективно собирать и анализировать требования'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Проектировать и тестировать API'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Работать с message brokers и кэшированием'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Работать с SQL внутри реального проекта'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Успешно проходить собеседования'
    },
    {
      icon: '/assets/tick.svg',
      title: 'Пользоваться Git и понимать принципы работы с репозиториями'
    }
  ];

  const totalPages = Math.ceil(outcomes.length / cardsPerPage);

  const handleSlide = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection(direction === 'prev' ? 'right' : 'left');

    setTimeout(() => {
      if (direction === 'prev') {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
      } else {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
      }
    }, 300);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const getCurrentCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return outcomes.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <section id="advantages" className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-16">
          Чему вы научитесь
        </h2>

        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className={`flex flex-col gap-4 min-h-[360px] transition-transform duration-300 ease-in-out
                ${isAnimating ? (slideDirection === 'left' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'}`}
            >
              {getCurrentCards().map((outcome, index) => (
                <div 
                  key={currentPage * cardsPerPage + index}
                  className="flex items-start gap-4 bg-white shadow-sm rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-white rounded-full p-2 flex items-center justify-center flex-shrink-0">
                    <img src={outcome.icon} alt="" />
                  </div>
                  <p className="text-sm leading-tight text-[var(--text-primary)]">
                    {outcome.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => handleSlide('prev')}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => handleSlide('next')}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full border-2 border-[#18529D] flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 group shadow-sm rounded-xl p-4"
            >
              <div className="w-12 h-12 bg-white rounded-full p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <img src={outcome.icon} alt="" />
              </div>
              <p className="text-lg leading-tight text-[var(--text-primary)]">
                {outcome.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearnOutcomes; 