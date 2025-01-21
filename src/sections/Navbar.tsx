import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      id: 'about',
      name: 'О нас'
    },
    {
      id: 'advantages',
      name: 'Преимущества'
    },
    {
      id: 'reviews',
      name: 'Отзывы'
    },
    {
      id: 'contacts',
      name: 'Контакты'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleNavClick = (linkId: string) => {
    const element = document.getElementById(linkId);
    if (element) {
      // Prevent default to handle scroll manually
      event?.preventDefault();
      
      // Calculate header height (adjust value based on your header height)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="bg-[var(--bg-primary)]">
      <div className="container py-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div>
            <img src="/assets/header-logo.png" alt="header-logo" width={226} height={56} />
            <div className="text-xl text-[var(--text-secondary)] font-bold">Полный курс SA</div>
          </div>

          <ul className="flex space-x-6 z-50">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className="text-[#07346F] hover:text-[var(--button-primary)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-start justify-between relative">
          <div className="space-y-4">
            <img src="/assets/header-logo.png" alt="header-logo" className="h-8" />
            <div className="text-lg text-[var(--text-secondary)] font-bold">Полный курс SA</div>
          </div>
          
          <button 
            onClick={toggleMenu}
            className="text-[var(--text-primary)] z-50"
          >
            {isMenuOpen ? (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#18529D" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 bg-white transition-transform duration-300 z-40
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="container pt-32">
              <ul className="space-y-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.id);
                      }}
                      className="text-2xl text-[#07346F] hover:text-[var(--button-primary)] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
