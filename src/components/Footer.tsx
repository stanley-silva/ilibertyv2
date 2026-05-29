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
              src="https://iliberty.com.br/wp-content/uploads/2024/07/logo-iliberty-tecnologia.png"
              alt="Logo iLiberty Tecnologia da Informação"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-[#DBDBDB] text-[15px] leading-relaxed max-w-sm">
            Simplificamos o complexo. Eliminamos reentradas, reduzimos glosas e impulsionamos a governança operacional com tecnologia sob medida B2B para o setor de saúde.
          </p>
          <div className="text-xs text-white/40 mt-2">
            iLiberty Tecnologia da Informação LTDA
          </div>
        </div>

        {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#00AECC] font-bold text-sm uppercase tracking-wider">Links Rápidos</h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'Cooperativas & Hospitais', path: '/cooperativas' },
              { name: 'Laboratórios de Apoio', path: '/laboratorios' },
              { name: 'Discovery', path: '/discovery' },
              { name: 'Sobre Nós', path: '/sobre' },
              { name: 'Fale Conosco', path: '/contato' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-1.5 text-[#DBDBDB] hover:text-[#00AECC] transition-colors text-[15px]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#00AECC] transform transition-transform group-hover:translate-x-1" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA 3: ESCRITÓRIO E CONTATOS CHAVE */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[#00AECC] font-bold text-sm uppercase tracking-wider">Diretoria & Escritório</h4>
          <div className="flex flex-col gap-4 text-[#DBDBDB] text-[15px]">
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
                <p className="text-white font-medium">Diretoria Comercial</p>
                <p className="text-sm text-white/70">Rafael Borges</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 pt-4 mt-2">
              <div className="text-xs text-white/50">
                <p>Segmentação Avançada de Saúde & Integrações de LIMS/ERP</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ASSINATURA E DIREITOS AUTORAIS */}
      <div className="border-t border-white/10 pt-8 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DBDBDB]/60">
        <p>© {currentYear} iLiberty Tecnologia. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <span>Soluções Inteligentes</span>
          <span className="w-1 h-1 bg-[#00AECC] rounded-full" />
          <span>Implantações Ágeis</span>
        </div>
      </div>
    </footer>
  );
}
