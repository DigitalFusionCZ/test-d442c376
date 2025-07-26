'use client';

import { useState, useEffect } from 'react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "VseProStavby - Realizace staveb a rekonstrukcí";
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#2563eb" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
      (faviconLink as HTMLLinkElement).href = faviconUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-3xl font-bold tracking-tight text-white">
            VseProStavby
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#sluzby" className="hover:text-blue-200 transition-colors duration-300">Naše služby</a></li>
              <li><a href="#projekty" className="hover:text-blue-200 transition-colors duration-300">Naše projekty</a></li>
              <li><a href="#kontakt" className="hover:text-blue-200 transition-colors duration-300">Kontakt</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-700 mt-4`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#sluzby" onClick={closeMenu} className="block text-lg hover:text-blue-200 transition-colors duration-300">Naše služby</a></li>
            <li><a href="#projekty" onClick={closeMenu} className="block text-lg hover:text-blue-200 transition-colors duration-300">Naše projekty</a></li>
            <li><a href="#kontakt" onClick={closeMenu} className="block text-lg hover:text-blue-200 transition-colors duration-300">Kontakt</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-cover bg-center bg-gray-800 text-white py-24 md:py-32" style={{ backgroundImage: 'url("/images/hero-main-background.jpg")' }}>
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Vaše stavba, naše vášeň.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Kompletní stavební služby od A do Z po celé ČR.
          </p>
          <a href="#kontakt" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400">
            Získejte nezávaznou nabídku
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Naše stavební služby
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out group">
              <div className="text-blue-600 mb-6 text-5xl flex justify-center items-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2m-14 0a2 2 0 01-2-2v-2a2 2 0 012-2m7-4V3m-7 8V3m-14 8h19l-2 7H7l-2-7zm-4 0v-4a2 2 0 012-2h4a2 2 0 012 2v4m-8 0v4H3v-4zm0 8v4h4v-4zM6 18h12"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Novostavby</h3>
              <p className="text-gray-600 text-center">
                Realizujeme kompletní novostavby rodinných domů, bytových i komerčních objektů. Od základů po střechu s důrazem na kvalitu a detaily.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out group">
              <div className="text-blue-600 mb-6 text-5xl flex justify-center items-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.916 11H5.082c-.432 0-.756-.347-.756-.756v-2.088c0-.432.324-.756.756-.756L18.418 18.2V9.082m0-4.082H8V3.582a1.5 1.5 0 011.5-1.5H19.5A1.5 1.5 0 0121 3.582V14M9 9h6m-3 0v6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Rekonstrukce</h3>
              <p className="text-gray-600 text-center">
                Profesionální rekonstrukce bytových jader, domů, bytů i komerčních prostor. Oživíme Váš prostor s moderními standardy.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out group">
              <div className="text-blue-600 mb-6 text-5xl flex justify-center items-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M18 21V3a2 2 0 00-2-2H8a2 2 0 00-2 2v18l-4 2V5a2 2 0 012-2h12a2 2 0 012 2v16l-4-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Zateplování fasád</h3>
              <p className="text-gray-600 text-center">
                Zateplení fasád je klíčové pro energetickou účinnost. Nabízíme kompletní řešení pro rodinné i panelové domy.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out group">
              <div className="text-blue-600 mb-6 text-5xl flex justify-center items-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3m-7 8h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0015.586 6H10a2 2 0 00-2 2v1H6a2 2 0 00-2 2v10a2 2 0 002 2h2v-2zm0 0l-4 4m6-6h-6m8 0h6m-4 8v-8m-2-2L9 9m4 4h-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sádrokartonové a ostatní práce</h3>
              <p className="text-gray-600 text-center">
                Realizujeme sádrokartonové konstrukce, omítky, dlažby a další dokončovací stavební práce s precizností.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out group">
              <div className="text-blue-600 mb-6 text-5xl flex justify-center items-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5 5 0 0010.283 2.2V22h4v-2.012a5 5 0 0010.283-2.2L21 7l-3-1m0 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2m0 0V5a2 2 0 012-2h12a2 2 0 012 2v1m-10 4h.01M10 12h.01M10 16h.01M10 20h.01M14 10h.01M14 14h.01M14 18h.01M14 22h.01M18 12h.01M18 16h.01M18 20h.01"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Inženýrské sítě</h3>
              <p className="text-gray-600 text-center">
                Zajišťujeme kompletní realizaci inženýrských sítí - voda, kanalizace, elektřina, plyn. Experti na propojení.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out group">
              <div className="text-blue-600 mb-6 text-5xl flex justify-center items-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Projektová dokumentace</h3>
              <p className="text-gray-600 text-center">
                Pomáháme s přípravou projektové dokumentace pro stavební povolení a kompletní realizaci vašeho projektu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projekty" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Naše realizované projekty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src="/images/gallery-tanvald-building.jpg" alt="Dokončená budova v Tanvaldu" className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Projekt Tanvald</h3>
                <p className="text-gray-600">Kompletní rekonstrukce bytového domu v Tanvaldu, včetně zateplení fasády a modernizace interiérů.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src="/images/gallery-family-house-exterior.jpg" alt="Exteriér rodinného domu" className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Rodinný dům u Liberce</h3>
                <p className="text-gray-600">Realizace novostavby rodinného domu na klíč, včetně terénních úprav a inženýrských sítí.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Kontaktujte nás
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Máte dotaz nebo zájem o nezávaznou cenovou nabídku? Neváhejte nás kontaktovat.
            </p>
            <div className="space-y-6 text-center">
              <div className="flex flex-col items-center">
                <p className="text-blue-600 text-2xl mb-2">
                  <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-6 13h6a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2h4"></path>
                  </svg>
                  info@vseprostavby.cz
                </p>
                <a href="mailto:info@vseprostavby.cz" className="text-blue-500 hover:underline">Poslat email</a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-blue-600 text-2xl mb-2">
                  <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.134l-3.094 1.547a1 1 0 00-.5.502L7 21h10l4-15V4a2 2 0 00-2-2h-3.28a1 1 0 00-.948-.684l-1.498 4.493a1 1 0 01-.502 1.134l-3.094 1.547a1 1 0 00-.5.502L7 21h10l4-15"></path>
                  </svg>
                  +420 777 123 456
                </p>
                <a href="tel:+420777123456" className="text-blue-500 hover:underline">Zavolat</a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-blue-600 text-2xl mb-2">
                  <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Hlavní ulice 123, 110 00 Praha 1, Česká republika
                </p>
                <a href="https://maps.google.com/?q=Hlavní+ulice+123,+110+00+Praha+1,+Česká+republika" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Zobrazit na mapě</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} VseProStavby. Všechna práva vyhrazena.
          </p>
          <p className="text-sm mt-2">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
