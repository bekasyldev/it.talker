function Footer() {
  const menuLinks = [
    'Курсы',
    'О нас',
    'Преимущества',
    'Отзывы',
    'Контакты'
  ];

  return (
    <footer id="contacts" className="bg-[#0A1628] text-white py-8 md:py-12 lg:py-16">
      <div className="container">
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12">
          {/* Logo and Legal Links */}
          <div className="space-y-4 w-full lg:w-auto">
            <img 
              src="/assets/header-logo.png" 
              alt="it.talker" 
              className="h-8"
            />
            <div className="space-y-2">
              <a href="#" className="block text-base lg:text-lg opacity-80 hover:opacity-100">
                Политика конфиденциальности
              </a>
              <a href="#" className="block text-base lg:text-lg opacity-80 hover:opacity-100">
                Публичная оферта
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            <h3 className="font-semibold mb-4 text-xl">Меню</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-base lg:text-lg opacity-80 hover:opacity-100"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            <h3 className="font-semibold mb-4 text-xl">Контакты</h3>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/it.talker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img src="/assets/instagram.svg" alt="Instagram" className="w-6 lg:w-8 h-6 lg:h-8" />
                <span className="text-base lg:text-lg opacity-80 hover:opacity-100">
                  it.talker
                </span>
              </a>
              <a 
                href="https://wa.me/77777777777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                <span className="text-base lg:text-lg opacity-80 hover:opacity-100">
                  +7 777 777 7777
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <p className="text-sm opacity-60 text-center lg:text-left">
            2024 все права защищены
          </p>
          <div className="flex items-center  gap-10 lg:gap-8">
            <p className="text-sm lg:text-md opacity-80">
              Разработано<br />студией
            </p>
            <img 
              src="/assets/footer-icon.png" 
              alt="Dala Digital" 
              className="w-24 lg:w-28 h-12 lg:h-14" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 