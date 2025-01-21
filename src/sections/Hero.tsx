import HeroForm from '../components/HeroForm';
import Badge from '../components/Badge';

function Hero() {
  const features = [
    'Группы по 15 человек',
    'Только польза без воды',
  ];

  const features2 = [
    'От сбора требований до брокеров сообщений',
    'Работа в back-end реального проекта',
    'Еженедельная real-time практика'
  ]

  const companies = ['Теле2', 'Альфа банк', 'Сбербанк', 'Uzum'];

  return (
    <section className="pt-4 bg-[var(--bg-primary)] overflow-hidden rounded-b-3xl">
      <div className="md:container">
        {/* Mobile Hero */}
        <div className="md:hidden relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[#E0E9F4] -z-10" />
          <div className="absolute w-[211px] h-[422px] right-0 top-[410px] bg-[#00B7FF] opacity-20 blur-[61.45px] -z-10" />
          <div className="absolute w-[231px] h-[231px] -left-[192px] top-[443px] bg-[#0073FF] opacity-40 blur-[61.45px] -z-10" />
          <div className="absolute w-[640px] h-[389px] -left-[289px] top-[698px] bg-[#0073FF] opacity-22 blur-[61.45px] -z-10" />

          {/* Content */}
          <div className="px-4">
            <h1 className="text-[30px] leading-[129%]  tracking-[-0.01em] text-[#010024] mb-6">
              Получи практические знания SA и увеличь свой доход!
            </h1>

            <div className="flex flex-wrap gap-2 mb-2">
              {features.map((feature) => (
                <Badge key={feature} className='bg-[#E9F0F7] text-xs'>{feature}</Badge>
              ))}
            </div>
            <div className='flex flex-wrap gap-2'>
              {features2.map((feature) => (
                <Badge key={feature} className='bg-[#E9F0F7] text-xs'>{feature}</Badge>
              ))}
            </div>
          </div>

          {/* Person Image with Card */}
          <div className="relative mt-8 mb-[-100px]">
            <img 
              src="/assets/hero-person.png" 
              alt="hero" 
              className="w-full max-w-[334px] mx-auto"
            />
            
            <div className="hidden sm:block absolute top-4 right-4 bg-white rounded-[21px] p-4 shadow-lg w-[165px]">
              <p className="text-xs  mb-1.5">
                Старший и ведущий SA:
              </p>
                {companies.map((company) => (
                  <li 
                    key={company}
                    className="text-[#2F87FB] text-base ml-6"
                  >
                    {company}
                  </li>
                ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative z-10">
            <div className="bg-[rgba(12,54,127,0.5)] backdrop-blur-[25px] rounded-[25px]">
              <div className="px-6 py-8">
                <h3 className="text-[25px] leading-[129%] font-semibold text-white mb-8">
                  Запишись на бесплатный вебинар!
                </h3>
                <HeroForm className="" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="h-full hidden md:block">
          <img src="/assets/center-ellipse.png" alt="" className='absolute top-0 left-[60%] -translate-x-1/2 z-0' />
          <img src="/assets/right-bottom-ellipse.png" alt="" className='absolute bottom-[-70px] right-0 z-0' />
          <img src="/assets/left-bottom-ellipse.png" alt="" className='absolute bottom-[-70px] left-0 z-0' />
          <div className="grid md:grid-cols-2 gap-12 items-center pb-0">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold mb-8">
                Получи практические знания <br />
                SA и увеличь свой доход!
              </h1>
              <div className='mb-48 space-y-1'>
                <div className="flex gap-2 mb-2">
                  {features.map((feature) => (
                    <Badge key={feature} className="bg-[#E9F0F7] text-sm lg:text-base">{feature}</Badge>
                  ))}
                </div>
                <div className="grid gap-4">
                  {features2.map((feature) => (
                    <Badge key={feature} className="bg-[#E9F0F7] text-sm lg:text-base">{feature}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/assets/hero-person.png" 
                alt="hero" 
                className="w-full h-full"
              />
              <div 
                className={`absolute bg-white shadow-lg
                  md:top-[5%] md:right-[-10px] 
                  lg:top-10 lg:right-[-20px] 
                  xl:top-12 xl:right-[-50px]
                  rounded-3xl p-4 lg:p-6
                  w-[200px] lg:w-auto
                  transform transition-all duration-300
                `}
              >
                <p className="text-base lg:text-lg mb-2">Старший и ведущий SA:</p>
                {companies.map((company) => (
                  <li 
                    className='ml-6 text-[var(--button-primary)] text-lg lg:text-xl' 
                    key={company}
                  >
                    {company}
                  </li>
                ))}
              </div>
            </div>

            {/* Hero Form */}
            <div 
              className={`absolute z-20 mb-20 bg-[rgba(12,54,127,0.5)] backdrop-blur-[25px] rounded-[25px]
                md:left-1/2 md:-translate-x-1/2 md:bottom-[4rem] md:w-[90%] md:p-6
                lg:left-[50%] lg:bottom-[-2rem] lg:max-w-5xl lg:p-10
                xl:left-[42%] xl:bottom-[-6rem]
                transform transition-all duration-300
              `}
            >
              <p className='text-start text-white text-xl lg:text-2xl font-semibold mb-6 lg:mb-8'>
                Запишись на тестовое собеседование!
              </p>
              <HeroForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
