import React, { useState, useEffect } from 'react';
import { Unlink, EyeOff, ShieldAlert, ClipboardCheck, FileSearch, TrendingUp } from 'lucide-react';
import CtaButton from '../components/CtaButton';
import Badge from '../components/Badge';
import FadeIn from '../components/FadeIn';
import useSeo from '../hooks/useSeo';
import ContactForm from '../components/ContactForm';

export default function Cooperativas() {
  const [submitted, setSubmitted] = useState(false);

  useSeo({
    title: 'TI para Cooperativas de Saúde e Hospitais',
    description: 'Integração de sistemas legados, governança de dados assistenciais, conciliação e redução de glosas para Unimeds e grandes hospitais. Veja nosso caso de sucesso.'
  });

  const partnerLogos = [
    { src: '/assets/logos/logo_parceiros_1.webp', alt: 'Logo Unimed' },
    { src: '/assets/logos/logo_parceiros_2.webp', alt: 'Logo São Francisco' },
    { src: '/assets/logos/logo_parceiros_3.webp', alt: 'Logo Clinicas' },
    { src: '/assets/logos/logo_parceiros_4.webp', alt: 'Logo Unimed Lins' },
    { src: '/assets/logos/logo_parceiros_5.webp', alt: 'Logo Santa Casa' }
  ];

  const logoCount = partnerLogos.length;
  const extendedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  const [currentIndex, setCurrentIndex] = useState(logoCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const activeDot = ((currentIndex - logoCount) % logoCount + logoCount) % logoCount;

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
      setAutoplayKey((prev) => prev + 1);
    } else if (isRightSwipe) {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => prev - 1);
      setAutoplayKey((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(5);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(1);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoplayKey]);

  useEffect(() => {
    if (!transitionEnabled) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentIndex >= logoCount * 2) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - logoCount);
    } else if (currentIndex < logoCount) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + logoCount);
    }
  };

  const handleDotClick = (index: number) => {
    setTransitionEnabled(true);
    setCurrentIndex(logoCount + index);
    setAutoplayKey((prev) => prev + 1);
  };

  return (
    <div id="cooperativas-page" className="w-full pt-20 bg-white">

      {/* SEÇÃO 1: APRESENTAÇÃO (HERO) */}
      <section id="coop-hero" className="relative bg-brand-bg flex items-center justify-center px-6 lg:px-12 py-16 lg:py-24 border-b border-border-subtle z-30 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00995D06_1px,transparent_1px),linear-gradient(to_bottom,#00995D06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-15 opacity-80" />

        <div className="absolute inset-0 z-15 opacity-40 pointer-events-none select-none">
          <svg className="w-full h-full text-[#00995D]/25" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 150C250 -50 550 250 850 150C1150 50 1350 350 1600 200" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" />
            <path d="M-50 220C300 20 600 320 900 220C1200 120 1400 420 1650 270" stroke="currentColor" strokeWidth="0.6" />

            {/* Nós e conexões pulsantes */}
            <circle cx="250" cy="80" r="3.5" className="fill-[#00995D] animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="250" cy="80" r="2.5" className="fill-[#00995D]" />

            <circle cx="850" cy="150" r="4.5" className="fill-brand-blue animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="850" cy="150" r="3" className="fill-brand-blue" />

            <circle cx="1150" cy="85" r="3.5" className="fill-[#00995D] animate-ping" style={{ animationDuration: '2.5s' }} />
            <circle cx="1150" cy="85" r="2.5" className="fill-[#00995D]" />
          </svg>
        </div>

        {/* Partículas flutuantes ambientais */}
        <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-[#00995D]/40 rounded-full animate-pulse" />
          <div className="absolute bottom-[25%] left-[45%] w-2 h-2 bg-brand-blue/30 rounded-full animate-pulse" />
          <div className="absolute top-[40%] right-[35%] w-1 h-1 bg-[#00995D]/50 rounded-full animate-pulse" />
        </div>

        {/* Content grid */}
        <div className="relative z-20 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn delay={150}>
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-brand-dark mb-5 border-l-2 border-[#00995D] pl-3">
                Cooperativas & Hospitais
              </span>
            </FadeIn>

            <FadeIn delay={300}>
              <h1 className="font-sans font-bold text-brand-dark leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.3rem, 5.5vw, 60px)', color: '#001E38' }}>
                Integração, Automação e<br />
                <span className="text-[#00995D]">Previsibilidade para a operação assistencial.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={450}>
              <p className="text-text-secondary text-base sm:text-[18px] leading-[1.7] mt-6 max-w-2xl font-sans font-medium">
                Conectamos sistemas isolados, automatizamos fluxos de alto custo e eliminamos o retrabalho que infla os custos assistenciais, para que cooperativas de saúde e hospitais decidam com dado, não com achismo.
              </p>
            </FadeIn>

            <FadeIn delay={600} className="w-full">
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <CtaButton
                  text="Fale com um Consultor Especialista"
                  to="/contato"
                  variant="green"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative">
            <div className="w-full max-w-[440px] lg:max-w-none relative aspect-[4/3] flex items-center justify-center">

              <div className="relative z-10 w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none overflow-hidden border border-border-subtle/30 shadow-lg">
                <img
                  src="/assets/cooperativas_e_hospitais_secao01.webp"
                  alt="Cooperativas de Saúde & Hospitais"
                  className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none transition-transform duration-750 hover:scale-103"
                />
              </div>

              {/* Emblema flutuante de conectividade */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-8 z-20">
                <div className="bg-white/90 backdrop-blur-md border border-[#00995D]/20 p-4 rounded-[12px] shadow-xl flex items-center gap-4 max-w-[220px] animate-float-slow transition-all hover:scale-105 duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#00995D]/15 flex items-center justify-center text-[#00995D] font-bold text-lg shadow-sm">
                    ✓
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#00995D]">Conectividade</p>
                    <p className="text-xs font-bold text-[#001E38] font-sans">100% Integrado</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: DORES OPERACIONAIS E GARGALOS */}
      <section id="coop-dores" className="py-20 lg:py-28 bg-white px-6 lg:px-12 border-b border-border-subtle/50">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="1" text="O Diagnóstico" themeColor="green" />
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-bold text-brand-dark tracking-[-0.02em] leading-tight mb-16 text-left"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', color: '#001E38' }}>
              Sabemos exatamente o que tira o sono da Diretoria Executiva
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <FadeIn delay={300} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] p-8 sm:p-10 flex flex-col justify-between w-full shadow-xs hover:shadow-md transition-all duration-300 group">
                <div className="text-left">
                  <div className="w-12 h-12 rounded-full bg-[#00995D]/10 text-[#00995D] flex items-center justify-center mb-6 shadow-xs transition-transform group-hover:scale-105 duration-300">
                    <Unlink className="w-5 h-5" />
                  </div>
                  <h3 className="text-md font-bold text-brand-dark mb-4 font-sans uppercase tracking-wider">
                    Sistemas Desconectados
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                    ERP, prontuário do paciente, faturamento e auditoria médica funcionam como ilhas: cada sistema fala uma língua, e a diretoria nunca vê a operação por inteiro.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] p-8 sm:p-10 flex flex-col justify-between w-full shadow-xs hover:shadow-md transition-all duration-300 group">
                <div className="text-left">
                  <div className="w-12 h-12 rounded-full bg-[#00995D]/10 text-[#00995D] flex items-center justify-center mb-6 shadow-xs transition-transform group-hover:scale-105 duration-300">
                    <EyeOff className="w-5 h-5" />
                  </div>
                  <h3 className="text-md font-bold text-brand-dark mb-4 font-sans uppercase tracking-wider">
                    Gargalos Invisíveis
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                    Processos críticos, gerenciais e assistenciais, rodam em checklists, planilhas e e-mails, sob equipes dispersas. O gargalo só aparece quando o estrago já foi feito.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] p-8 sm:p-10 flex flex-col justify-between w-full shadow-xs hover:shadow-md transition-all duration-300 group">
                <div className="text-left">
                  <div className="w-12 h-12 rounded-full bg-[#00995D]/10 text-[#00995D] flex items-center justify-center mb-6 shadow-xs transition-transform group-hover:scale-105 duration-300">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="text-md font-bold text-brand-dark mb-4 font-sans uppercase tracking-wider">
                    Risco de Glosa e Vazamento
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                    Sem rastreabilidade fim a fim e com o cruzamento de dados feito tarde demais, vazamentos financeiros viram rotina, e a glosa, inevitável.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SEÇÃO 3: ÁREAS DE SOLUÇÃO EM SAÚDE */}
      <section id="coop-solucoes" className="py-20 lg:py-28 bg-[#F2F4F8] px-6 lg:px-12 border-b border-border-subtle/50">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="2" text="Áreas de Atuação" themeColor="green" />
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-bold text-brand-dark tracking-[-0.02em] leading-tight mb-16 text-left"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', color: '#001E38' }}>
              Atuamos onde a margem é decidida.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <FadeIn delay={300} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] p-8 lg:p-10 flex flex-col justify-between w-full shadow-xs hover:shadow-md transition-all duration-300 group">
                <div className="text-left">
                  <div className="w-12 h-12 bg-[#00995D]/10 text-[#00995D] flex items-center justify-center rounded-[6px] mb-6 shadow-xs">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4 font-sans tracking-wide">
                    Autorização e Regulação Assistencial
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                    Estruturamos o fluxo de autorização e regulação para que cada liberação passe pelos critérios certos - clínicos, contratuais e econômicos - antes de virar conta. É onde a sinistralidade ainda pode ser contida.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] p-8 lg:p-10 flex flex-col justify-between w-full shadow-xs hover:shadow-md transition-all duration-300 group">
                <div className="text-left">
                  <div className="w-12 h-12 bg-[#00995D]/10 text-[#00995D] flex items-center justify-center rounded-[6px] mb-6 shadow-xs">
                    <FileSearch className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4 font-sans tracking-wide">
                    Auditoria de Contas Médicas
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                    Levamos a auditoria de contas da amostragem para a cobertura plena, com cruzamento inteligente de dados, identificação de inconsistências e priorização do que de fato impacta o caixa.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] p-8 lg:p-10 flex flex-col justify-between w-full shadow-xs hover:shadow-md transition-all duration-300 group">
                <div className="text-left">
                  <div className="w-12 h-12 bg-[#00995D]/10 text-[#00995D] flex items-center justify-center rounded-[6px] mb-6 shadow-xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4 font-sans tracking-wide">
                    Governança Financeira e Tomada de Decisão
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                    Conectamos faturamento, conciliação, custos assistenciais e indicadores em uma camada única de governança financeira, para que a diretoria decida com dado em tempo real, não com relatório do mês passado.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4: ESTUDO DE CASO DE SUCESSO (UNIMED AVARÉ) */}
      <section id="coop-caso" className="py-20 lg:py-28 bg-white px-6 lg:px-12 border-b border-border-subtle/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 flex flex-col gap-4 text-left">
              <FadeIn delay={100}>
                <Badge number="3" text="Prova de Conceito" themeColor="green" />
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="text-brand-dark font-sans font-bold leading-tight mb-2"
                  style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.8rem)', color: '#001E38' }}>
                  Como a Unimed Dracena devolveu 4500 horas por ano à equipe
                </h2>
                <div className="space-y-4 text-[17.6px] text-text-secondary leading-relaxed font-sans font-normal">
                  <p>
                    Antes, os processos financeiros, contábeis e de faturamento da <strong className="text-brand-dark font-semibold">Unimed Dracena</strong> eram inteiramente manuais - consumindo milhares de horas e gerando erros e retrabalho. A diretoria queria reduzir custo operacional, acelerar o fechamento contábil e liberar a equipe para análises estratégicas.
                  </p>
                  <p className="border-l-4 border-[#00995D] pl-5 bg-brand-bg/30 py-3 pr-4 rounded-r-[4px] font-medium">
                    A iLiberty revisou e redesenhou os processos críticos antes de qualquer linha de automação. Sobre essa base, implantamos um programa de RPA que eliminou tarefas repetitivas, manteve a conformidade fiscal e devolveu mais de 4.500 horas por ano à equipe.
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                <FadeIn delay={300}>
                  <div className="bg-white border border-border-subtle rounded-[6px] p-6 flex items-center justify-between shadow-xs hover:shadow-md transition-all duration-300">
                    <div>
                      <p className="text-[#00995D] text-4xl font-bold font-sans">+10</p>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-text-secondary mt-1">Processos automatizados</p>
                    </div>
                    <span className="text-[10px] text-[#00995D] font-bold border border-[#00995D]/20 px-2 py-0.5 bg-[#00995D]/5 rounded uppercase">Automação</span>
                  </div>
                </FadeIn>

                <FadeIn delay={400}>
                  <div className="bg-white border border-border-subtle rounded-[6px] p-6 flex items-center justify-between shadow-xs hover:shadow-md transition-all duration-300">
                    <div>
                      <p className="text-[#00995D] text-4xl font-bold font-sans">+4.500</p>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-text-secondary mt-1">Horas/Ano devolvidas</p>
                    </div>
                    <span className="text-[10px] text-[#00995D] font-bold border border-[#00995D]/20 px-2 py-0.5 bg-[#00995D]/5 rounded uppercase">Economia</span>
                  </div>
                </FadeIn>

              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#00995D]/20 to-brand-blue/20 rounded-[24px] blur-3xl opacity-80 -z-10 animate-pulse" />

              <div className="absolute -top-6 -left-6 w-32 h-32 text-[#00995D]/20 -z-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="case-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#case-dots)" />
                </svg>
              </div>

              <div className="flex flex-col gap-6">
                <FadeIn delay={300}>
                  <div className="relative group overflow-hidden rounded-[24px]">
                    <img
                      id="case-study-showcase-img"
                      src="/assets/foto_unimed_dracena.webp"
                      alt="Healthcare dynamic analytics and dashboard"
                      className="w-full h-auto object-contain rounded-[24px] transition-transform duration-750 group-hover:scale-102"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4.5: PARCEIROS E CLIENTES ATENDIDOS */}
      <section id="coop-partners" className="py-20 bg-brand-bg px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">

          <div className="flex flex-col items-start text-left mb-12">
            <FadeIn delay={100}>
              <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-[#00995D] mb-5">
                <span>[ Nossos Clientes ]</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="font-sans font-bold text-brand-dark leading-[1.12] tracking-[-0.02em] border-l-4 border-[#00995D] pl-5"
                style={{ fontSize: 'clamp(1.75rem, 4.2vw, 2.8rem)' }}>
                Quem Impactamos
              </h2>
            </FadeIn>
          </div>

          <div className="overflow-hidden w-full mt-8 py-4 -my-4 relative select-none">
            <div
              className={`flex w-full ${transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-3 w-full md:w-1/3 lg:w-1/5 flex justify-center"
                >
                  <div className="bg-white border border-border-subtle/50 rounded-[16px] p-5 flex items-center justify-center w-full aspect-[4/3] sm:aspect-[1.2] shadow-xs hover:shadow-md hover:scale-105 transition-all duration-300 group">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-[65px] max-w-[90%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 mt-10 pl-1">
            {Array.from({ length: logoCount }).map((_, idx) => {
              const isActive = activeDot === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${isActive ? 'w-8 bg-[#00995D]' : 'w-2 bg-[#606266]/20 hover:bg-[#606266]/40'
                    }`}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              );
            })}
          </div>

        </div>
      </section>

      {/* SEÇÃO 5: CONVERSÃO FINAL (CTA) */}
      <section id="coop-cta" className="py-24 bg-white px-6 lg:px-12 relative z-40 border-t border-border-subtle/35">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-5 flex flex-col items-start text-left gap-5">
              <FadeIn delay={100}>
                <span className="text-[#00995D] uppercase text-xs tracking-[0.2em] font-bold block">
                  [ Próximo Passo ]
                </span>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.01em] border-l-4 border-[#00995D] pl-5"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#001E38' }}>
                  Descubra, em números, onde a sua operação está perdendo margem.

                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-[#606266] text-base leading-[1.7] max-w-xl font-sans font-normal">
                  Em uma conversa de 30 minutos, mapeamos com você as três réguas onde a margem se decide - autorização, auditoria de contas e governança financeira - e mostramos por onde começar a destravar.

                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <FadeIn delay={400} className="w-full max-w-[620px]">
                <div className="bg-[#F2F4F8]/80 border border-border-subtle/50 p-6 sm:p-10 rounded-[16px] w-full shadow-xs">
                  {submitted ? (
                    <div className="text-center py-10 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#00995D]/10 text-[#00995D] flex items-center justify-center text-3xl font-bold animate-[bounce_1s_infinite]">
                        ✓
                      </div>
                      <h3 className="font-sans font-bold text-[#001E38] text-xl">Diagnóstico Solicitado!</h3>
                      <p className="text-sm text-text-secondary max-w-sm">
                        Obrigado pelo seu contato. Nossa equipe de especialistas em saúde analisará os dados e retornará em breve.
                      </p>
                    </div>
                  ) : (
                    <ContactForm
                      buttonText="Falar com um especialista"
                      onSubmitSuccess={() => setSubmitted(true)}
                      themeColor="green"
                      showPorte={false}
                    />
                  )}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
