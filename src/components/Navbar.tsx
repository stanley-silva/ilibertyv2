import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CtaButton from './CtaButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Fecha a gaveta mobile ao alterar a rota
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cooperativas & Hospitais', path: '/cooperativas' },
    { name: 'Laboratórios', path: '/laboratorios' },
    { name: 'Como trabalhamos', path: '/como-trabalhamos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <nav id="global-navbar" className="fixed top-0 left-0 right-0 h-20 liquid-glass-strong border-b border-border-subtle/50 z-50 flex items-center justify-between px-6 lg:px-12">
        {/* LOGOTIPO */}
        <div className="flex items-center">
          <Link id="nav-logo-link" to="/" className="flex items-center">
            <img
              id="iliberty-nav-logo"
              src="/logo-iliberty-tecnologia.png"
              alt="Logo iLiberty Tecnologia da Informação"
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        {/* LINKS DE NAVEGAÇÃO (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-8 font-sans">
          {navLinks.map((link) => (
            <NavLink
              id={`nav-link-${link.path.replace('/', '') || 'home'}`}
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-brand-cyan border-b-2 border-brand-cyan pb-1' : 'text-brand-dark hover:text-brand-cyan'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* AÇÃO E DESTAQUES (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-6">
          <CtaButton
            id="nav-cta-falar-especialista"
            text="Falar com Especialista"
            to="/contato"
            variant="primary"
            className="text-[12px] pl-4 py-1.5"
          />
        </div>

        {/* ACIONADOR DE MENU (MOBILE) */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-[5px] bg-brand-dark text-white flex items-center justify-center transition-transform active:scale-95 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu-portal"
        className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Fundo escurecido e desfocado */}
        <div
          id="mobile-menu-backdrop"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gaveta de navegação inferior branca */}
        <div
          id="mobile-bottom-sheet"
          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl border-t border-[#DBDBDB] px-6 pt-10 pb-12 transition-transform duration-500 shadow-2xl origin-bottom"
          style={{
            transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
            transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
          }}
        >
          {/* Alça estética superior */}
          <div className="w-12 h-1.5 bg-[#DBDBDB] rounded-full mx-auto mb-8" />

          {/* Botão flutuante de fechar */}
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-[#F2F4F8] text-[#333333] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-6 font-sans">
            {/* Hiperlinks mobile */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-2xl font-bold font-sans tracking-tight transition-colors ${
                      isActive ? 'text-[#00AECC]' : 'text-[#333333] hover:text-[#00AECC]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Botão de ação mobile */}
            <div className="mt-6 border-t border-[#DBDBDB] pt-6">
              <CtaButton
                text="Falar com Especialista"
                to="/contato"
                className="w-full justify-center py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
