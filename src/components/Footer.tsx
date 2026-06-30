import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, User, ChevronRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="global-footer" className="bg-[#001E38] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* COLUNA 1: IDENTIDADE E APRESENTAÇÃO */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <img
              id="footer-logo-img"
              src="/logo-iliberty-tecnologia.png"
              alt="Logo iLiberty Tecnologia da Informação"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-[#DBDBDB] text-[15px] leading-relaxed max-w-sm font-sans">
            Simplificamos o que trava. Aceleramos o que importa.<br />
            Tecnologia consultiva para destravar a operação no setor de saúde.
          </p>
          <div className="text-xs text-white/40 mt-2 font-sans">
            iLiberty Tecnologia da Informação LTDA
          </div>
        </div>

        {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#00AECC] font-bold text-sm uppercase tracking-wider font-sans">LINKS RÁPIDOS</h4>
          <ul className="flex flex-col gap-3 font-sans">
            {[
              { name: 'Home', path: '/' },
              { name: 'Operadoras & Cooperativas de Saúde', path: '/cooperativas' },
              { name: 'Laboratórios de Apoio', path: '/laboratorios' },
              { name: 'Como trabalhamos', path: '/como-trabalhamos' },
              { name: 'Sobre Nós', path: '/sobre' },
              { name: 'Fale Conosco', path: '/contato' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-1.5 text-[#DBDBDB] hover:text-[#00AECC] transition-colors text-[15px]"
                >
                  <span className="text-[#00AECC] transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA 3: ESCRITÓRIO E CONTATO */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#00AECC] font-bold text-sm uppercase tracking-wider font-sans">ESCRITÓRIO & CONTATO</h4>
          <div className="flex flex-col gap-6 text-[#DBDBDB] text-[15px] font-sans">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00AECC] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Escritório Central</p>
                <p className="text-sm text-white/70">Rua 13 de maio, 642</p>
                <p className="text-sm text-white/70">Indaiatuba, São Paulo — SP</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#00AECC] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Vendas</p>
                <p className="text-sm text-white/70">comercial@iliberty.com.br</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ASSINATURA E DIREITOS AUTORAIS */}
      <div className="border-t border-white/10 pt-8 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DBDBDB]/60 font-sans">
        <p>© {currentYear} iLiberty Tecnologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
