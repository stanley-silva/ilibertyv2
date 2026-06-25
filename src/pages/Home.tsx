import React, { useState, useEffect } from 'react';
import { Building2, FlaskConical, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedShader from '../components/AnimatedShader';
import CtaButton from '../components/CtaButton';
import Badge from '../components/Badge';
import FadeIn from '../components/FadeIn';
import useSeo from '../hooks/useSeo';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const partnerLogos = [
    { src: '/assets/logos/logo_parceiros_1.webp', alt: 'Logo Unimed' },
    { src: '/assets/logos/logo_parceiros_2.webp', alt: 'Logo São Francisco' },
    { src: '/assets/logos/logo_parceiros_3.webp', alt: 'Logo Clinicas' },
    { src: '/assets/logos/logo_parceiros_4.webp', alt: 'Logo Unimed Lins' },
    { src: '/assets/logos/logo_parceiros_5.webp', alt: 'Logo Santa Casa' }
  ];

  const extendedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  const [currentIndex, setCurrentIndex] = useState(5);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const activeDot = ((currentIndex - 5) % 5 + 5) % 5;

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
    if (currentIndex >= 10) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - 5);
    } else if (currentIndex < 5) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + 5);
    }
  };

  const handleDotClick = (index: number) => {
    setTransitionEnabled(true);
    setCurrentIndex(5 + index);
    setAutoplayKey((prev) => prev + 1);
  };

  useSeo({
    title: 'Soluções Corporativas em TI para Saúde',
    description: 'Simplificamos processos operacionais, integramos jornadas de atendimento e automatizamos exames para cooperativas de saúde e laboratórios com foco em ROI real.'
  });

  return (
    <div id="home-page" className="w-full pt-20 bg-white">

      {/* SEÇÃO 1: APRESENTAÇÃO (HERO) */}
      <section id="home-hero" className="relative bg-brand-bg flex items-center justify-center px-6 lg:px-12 py-10 lg:py-14 border-b border-border-subtle z-30">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00AECC06_1px,transparent_1px),linear-gradient(to_bottom,#00AECC06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-15 opacity-80" />

        <div className="absolute inset-0 z-15 opacity-40 pointer-events-none select-none">
          <svg className="w-full h-full text-brand-cyan/25" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 150C250 -50 550 250 850 150C1150 50 1350 350 1600 200" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" />
            <path d="M-50 220C300 20 600 320 900 220C1200 120 1400 420 1650 270" stroke="currentColor" strokeWidth="0.6" />

            {/* Nós e conexões pulsantes */}
            <circle cx="250" cy="80" r="3.5" className="fill-brand-cyan animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="250" cy="80" r="2.5" className="fill-brand-cyan" />

            <circle cx="850" cy="150" r="4.5" className="fill-brand-blue animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="850" cy="150" r="3" className="fill-brand-blue" />

            <circle cx="1150" cy="85" r="3.5" className="fill-brand-cyan animate-ping" style={{ animationDuration: '2.5s' }} />
            <circle cx="1150" cy="85" r="2.5" className="fill-brand-cyan" />
          </svg>
        </div>

        {/* Partículas flutuantes ambientais */}
        <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-brand-cyan/40 rounded-full animate-pulse" />
          <div className="absolute bottom-[25%] left-[45%] w-2 h-2 bg-brand-blue/30 rounded-full animate-pulse" />
          <div className="absolute top-[40%] right-[35%] w-1 h-1 bg-brand-cyan/50 rounded-full animate-pulse" />
        </div>

        {/* Content grid */}
        <div className="relative z-20 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn delay={150}>
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-brand-dark mb-5 border-l-2 border-brand-cyan pl-3">
                iLiberty Tecnologia
              </span>
            </FadeIn>

            <FadeIn delay={300}>
              <h1 className="font-sans font-bold text-brand-dark leading-tight sm:leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.3rem, 6vw, 64px)' }}>
                Simplificamos o que trava.<br className="hidden sm:inline" />
                <span className="text-brand-cyan"> Aceleramos o que importa.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={450}>
              <p className="text-text-secondary text-base sm:text-[17.6px] leading-[1.65] mt-6 max-w-2xl font-sans font-medium">
                Destravamos a operação de quem move o setor de saúde: menos gargalos, retrabalho manual e desperdício financeiro; mais dados conectados, agilidade e ROI mensurável.
              </p>
            </FadeIn>

            <FadeIn delay={600} className="w-full">
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <CtaButton
                  text="Falar com um Especialista"
                  to="/contato"
                  variant="primary"
                />
                <CtaButton
                  text="Como trabalhamos"
                  to="/discovery"
                  variant="secondary"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Composition with Glows, Gradients & Depth */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative">
            <div className="w-full max-w-[460px] lg:max-w-none relative translate-y-14 lg:translate-y-20 xl:translate-y-24">
              {/* Ilustração principal da seção */}
              <img
                src="/assets/imagem_secao_01.webp"
                alt="iLiberty Plataforma Hospitalar e Laboratorial Inteligente"
                className="w-full h-auto object-contain scale-105 lg:scale-112 origin-bottom"
              />

              {/* Emblema flutuante de autoridade */}
              <div className="absolute top-[55%] lg:top-[28%] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-left-12 bg-white/95 backdrop-blur-md border border-white/80 p-4 rounded-[12px] shadow-xl flex items-center gap-4 max-w-[220px] z-20 animate-float-slow">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/15 flex items-center justify-center text-brand-cyan font-bold text-lg">
                  ✓
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-text-secondary">Especialistas</p>
                  <p className="text-sm font-bold text-brand-dark font-sans">100% Foco em Saúde</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: O DIAGNÓSTICO DO MERCADO (DORES E GARGALOS) */}
      <section id="home-diagnostic" className="py-20 lg:py-28 bg-white px-6 lg:px-12 border-b border-border-subtle/50 relative z-40">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="1" text="O Problema" />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-8">

            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 rounded-[24px] blur-3xl opacity-80 -z-10 animate-pulse" />

              {/* Grade estética de pontos */}
              <div className="absolute -top-6 -left-6 w-32 h-32 text-brand-cyan/20 -z-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="sec2-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#sec2-dots)" />
                </svg>
              </div>

              <FadeIn delay={400}>
                <div className="relative group overflow-hidden">
                  <img
                    id="diagnostic-showcase-img"
                    src="/assets/imagem_secao_02_v2.webp"
                    alt="Transformação digital e conectividade em saúde"
                    className="w-full h-auto object-contain rounded-[8px] transition-transform duration-750 group-hover:scale-102"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Bloco de conteúdo escrito */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.02em] mb-4"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', color: '#001E38' }}>
                  Por que a maioria dos projetos de tecnologia falha na saúde?
                </h2>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-[17.6px] leading-[1.8] text-text-secondary font-normal font-sans">
                  Porque o mercado tenta encaixar a sua operação em softwares engessados, em vez de moldar a tecnologia ao seu processo. O resultado? Sistemas que não se conversam, dados descentralizados, glosas médicas crescentes e equipes sobrecarregadas com retrabalho manual.
                </p>
                <p className="text-[17.6px] leading-[1.8] text-text-secondary font-medium mt-6 border-l-4 border-brand-cyan pl-5 bg-brand-bg/30 py-3 pr-4 rounded-r-[4px]">
                  Na iLiberty, fazemos o oposto: primeiro mapeamos onde a sua operação perde dinheiro e tempo, com um diagnóstico preciso. Só então conectamos as soluções certas, integradas num único ecossistema, ao seu processo. A tecnologia se adapta a você, e não o contrário.
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PARCEIROS E SEGMENTOS ATENDIDOS */}
      <section id="home-segmentation" className="py-20 lg:py-28 bg-[#F2F4F8] px-6 lg:px-12 border-b border-border-subtle/50">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="2" text="Para quem atendemos" />
          </FadeIn>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn delay={200}>
              <h2 className="font-sans font-bold text-brand-dark tracking-[-0.02em] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', color: '#001E38' }}>
                Escolha o seu contexto
              </h2>
            </FadeIn>
            <FadeIn delay={250}>
              <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-brand-cyan">
                Soluções Estruturadas B2B
              </span>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            <FadeIn delay={300} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full group">
                <div className="flex flex-col">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img
                      src="/assets/cooperativas_de_saude_e_hospitais.webp"
                      alt="Cooperativas de Saúde & Hospitais"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-[#00995D] px-6 py-4 flex items-center justify-between">
                    <h3 className="text-base sm:text-md font-bold text-white font-sans text-left uppercase tracking-wider">
                      Cooperativas de Saúde & Hospitais
                    </h3>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-5 text-left">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#00995D] mb-1.5 font-sans">Gargalo</p>
                      <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">Sistemas que não se conversam, lentidão na auditoria de contas e custo assistencial sem previsibilidade. О dinheiro vaza nos procedimentos de alto custo e a sinistralidade sobe antes de o gestor enxergar.</p>
                    </div>
                    <div className="border-b border-border-subtle/50" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-brand-dark mb-1.5 font-sans">Solução iLiberty</p>
                      <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">Integração dos dados em tempo real,auditoria inteligente de 100% das contas e automação das jornadas de alto custo. Você enxerga a sinistralidade na hora e estanca o vazamento antes que ele vire prejuizo.</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-8 flex text-left">
                  <Link
                    to="/cooperativas"
                    className="inline-flex items-center justify-center border border-[#00995D] text-[#00995D] px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#00995D] hover:text-white transition-all duration-300 self-start"
                  >
                    <span>Otimizar minha Operação</span>
                    <span className="ml-2 font-black">➔</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Bloco 2 — Laboratórios */}
            <FadeIn delay={400} className="flex">
              <div className="bg-white border border-border-subtle rounded-[6px] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full group">
                <div className="flex flex-col">
                  <div className="overflow-hidden aspect-[16/10]">
                    <img
                      src="/assets/laborat_rios_de_apoio_diagn_stico.webp"
                      alt="Laboratórios de Apoio & Diagnóstico"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-brand-cyan px-6 py-4 flex items-center justify-between">
                    <h3 className="text-base sm:text-md font-bold text-white font-sans text-left uppercase tracking-wider">
                      Laboratórios de Apoio & Diagnóstico
                    </h3>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-5 text-left">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan mb-1.5 font-sans">Gargalo</p>
                      <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">Controles em paralelo, dados presos em planilhas e sem visão consolidada da operação, você decide no escuro e não enxerga onde está perdendo margem.</p>
                    </div>
                    <div className="border-b border-border-subtle/50" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-brand-dark mb-1.5 font-sans">Solução iLiberty</p>
                      <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">iLab (LIMS) como fonte única de verdade: acaba com os controles paralelos, consolida toda a operação da venda ao laudo e transforma o dia a dia em indicadores de gestão, produção, TAT, custo e margem por exame, para você decidir com dado, e escalar com previsibilidade.</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-8 flex text-left">
                  <Link
                    to="/laboratorios"
                    className="inline-flex items-center justify-center border border-brand-cyan text-brand-cyan px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-brand-cyan hover:text-white transition-all duration-300 self-start"
                  >
                    <span>Escalar meu laboratório</span>
                    <span className="ml-2 font-black">➔</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SEÇÃO 3.5: NOSSOS CLIENTES E PARCEIROS */}
      <section id="home-partners" className="py-20 bg-brand-bg px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">

          <div className="flex flex-col items-start text-left mb-12">
            <FadeIn delay={100}>
              <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-cyan mb-5">
                <span>[ Nossos Clientes ]</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="font-sans font-bold text-brand-dark leading-[1.12] tracking-[-0.02em] border-l-4 border-brand-cyan pl-5"
                style={{ fontSize: 'clamp(1.75rem, 4.2vw, 2.8rem)' }}>
                Quem Impactamos
              </h2>
            </FadeIn>
          </div>

          {/* Carrossel de logotipos deslizantes */}
          <div
            className="overflow-hidden w-full mt-8 py-4 -my-4 relative select-none touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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

          {/* Indicadores de paginação */}
          <div className="flex items-center justify-start gap-2 mt-10 pl-1">
            {[0, 1, 2, 3, 4].map((idx) => {
              const isActive = activeDot === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${isActive ? 'w-8 bg-brand-cyan' : 'w-2 bg-[#606266]/20 hover:bg-[#606266]/40'
                    }`}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              );
            })}
          </div>

        </div>
      </section>

      {/* SEÇÃO 4: NÚMEROS E AUTORIDADE */}
      <section id="home-authority" className="py-20 bg-white px-6 lg:px-12 border-b border-border-subtle/50">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="3" text="Resultados" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-8 border-t border-b border-border-subtle/70 py-16">

            {/* Metric 1 */}
            <div className="px-2 md:px-8 border-r-0 md:border-r border-border-subtle/70 last:border-r-0 text-left">
              <FadeIn delay={200}>
                <div className="text-brand-cyan font-bold font-sans tracking-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}>
                  +7
                </div>
                <h4 className="text-md font-bold text-brand-dark mb-2 uppercase tracking-wider">Países</h4>
                <p className="text-sm text-[#606266] leading-relaxed font-sans font-normal">
                  Onde a iLiberty já entrega tecnologia e eficiência.
                </p>
              </FadeIn>
            </div>

            {/* Metric 2 */}
            <div className="px-2 md:px-8 border-r-0 md:border-r border-border-subtle/70 last:border-r-0 text-left">
              <FadeIn delay={300}>
                <div className="text-brand-cyan font-bold font-sans tracking-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}>
                  +1000
                </div>
                <h4 className="text-md font-bold text-brand-dark mb-2 uppercase tracking-wider">Melhorias Implementadas</h4>
                <p className="text-sm text-[#606266] leading-relaxed font-sans font-normal">
                  Otimizações já em produção nos processos e sistemas dos nossos clientes, não no papel.
                </p>
              </FadeIn>
            </div>

            {/* Metric 3 */}
            <div className="px-2 md:px-8 last:border-r-0 text-left">
              <FadeIn delay={400}>
                <div className="text-brand-cyan font-bold font-sans tracking-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}>
                  R$ 1.3m+
                </div>
                <h4 className="text-md font-bold text-brand-dark mb-2 uppercase tracking-wider">Economia Gerada</h4>
                <p className="text-sm text-[#606266] leading-relaxed font-sans font-normal">
                  Resultado financeiro real entregue com automação e processos mais enxutos
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 5: ESTUDO DE CASO (UNIMED DRACENA) */}
      <section id="home-case-dracena" className="py-20 lg:py-28 bg-white px-6 lg:px-12 border-b border-border-subtle relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <FadeIn delay={100}>
                <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-cyan mb-5">
                  <span>[ Case em Destaque ]</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.01em] border-l-4 border-brand-cyan pl-5 mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 4.2vw, 2.6rem)', color: '#001E38' }}>
                  De uma operação fragmentada a uma jornada digital, integrada e rastreável.
                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-[17.6px] leading-[1.8] text-[#606266] font-normal mb-8 font-sans">
                  A <strong className="text-brand-dark font-semibold">Salutem</strong>, estrutura de participações da Unimed Bauru, reúne hospital, farmácia, locação de equipamentos e centro de diagnóstico, cada operação com seus próprios sistemas, controles e fluxos de trabalho. Com o apoio da iLiberty na estruturação do CSC, processos antes manuais, descentralizados e pouco rastreáveis foram redesenhados e digitalizados. A jornada evoluiu da admissão sem papel ao canal único de atendimento, com integrações entre sistemas, padronização dos fluxos e indicadores em tempo real para apoiar a gestão.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <CtaButton
                  text="Ler o Case Completo"
                  to="/contato"
                  variant="primary"
                />
              </FadeIn>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[460px] lg:max-w-none relative aspect-[4/3] flex items-center justify-center">

                <div className="relative z-10 w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none overflow-hidden border border-border-subtle/30 shadow-xl">
                  <img
                    id="case-dracena-showcase-img"
                    src="/assets/foto_case_secao_06_v2.webp"
                    alt="Prédio da Unimed Bauru - Visto de fora"
                    className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none transition-transform duration-750 hover:scale-103"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 6: NOSSO DIFERENCIAL (PERSUASÃO) */}
      <section id="home-diferencial" className="py-20 lg:py-32 bg-brand-bg px-6 lg:px-12 border-b border-border-subtle relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <FadeIn delay={100}>
                <span className="text-brand-cyan uppercase tracking-widest font-bold text-xs mb-4 block" id="difference-badge">
                  [ O Que Nos Diferencia ]
                </span>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.12] tracking-[-0.02em] mb-6 border-l-4 border-brand-cyan pl-5"
                  style={{ fontSize: 'clamp(1.75rem, 4.2vw, 2.8rem)' }} id="difference-title">
                  Tecnologia que não devolve dinheiro ao caixa não serve.
                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-[17.6px] leading-[1.8] text-text-secondary font-normal mb-8 font-sans" id="difference-desc">
                  O mercado está cheio de sistemas que trocam a tela e mantêm o processo ineficiente por baixo. Na iLiberty, o jogo é outro: nenhum projeto começa pela ferramenta. Começa por um diagnóstico que mostra, em números, onde a sua operação perde dinheiro, e toda implantação nasce com metas de eficiência, custo e retorno definidas em contrato. Se não dá pra medir o resultado, a gente não propõe a solução.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <CtaButton
                  id="btn-difference-cta"
                  text="Agendar uma conversa"
                  to="/contato"
                  variant="primary"
                />
              </FadeIn>
            </div>

            <div className="lg:col-span-6 flex justify-center items-end self-end h-full relative">
              <FadeIn delay={300} className="w-full flex justify-center items-end">
                <div className="relative select-none max-w-md w-full flex justify-center items-end self-end -mt-36 lg:-mt-72 xl:-mt-80 translate-y-[82px] lg:translate-y-[130px]">
                  <img
                    id="difference-showcase-img"
                    src="/assets/tecnologia-secao-03.webp"
                    alt="Futuristic technology interaction robot hand"
                    className="w-full h-auto object-contain max-h-[450px] lg:max-h-[550px]"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CONVERSÃO FINAL (CTA) */}
      <section id="home-cta-final" className="py-24 bg-white px-6 lg:px-12 relative z-40 border-t border-border-subtle/35">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-5 flex flex-col items-start text-left gap-5">
              <FadeIn delay={100}>
                <span className="text-[#00AECC] uppercase text-xs tracking-[0.2em] font-bold block">
                  [ PRONTO PARA AVANÇAR? ]
                </span>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.01em] border-l-4 border-[#00AECC] pl-5"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#001E38' }}>
                  Descubra exatamente onde a sua operação perde dinheiro.
                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-[#606266] text-base leading-[1.7] max-w-xl font-sans font-normal">
                  Em uma conversa de 30 minutos, mapeamos com você os gargalos que travam o seu caixa e o seu crescimento, e por onde começar a destravar.

                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <FadeIn delay={400} className="w-full max-w-[620px]">
                <div className="bg-[#F2F4F8]/80 border border-border-subtle/50 p-6 sm:p-10 rounded-[16px] w-full shadow-xs">
                  {submitted ? (
                    <div className="text-center py-10 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-3xl font-bold animate-[bounce_1s_infinite]">
                        ✓
                      </div>
                      <h3 className="font-sans font-bold text-[#001E38] text-xl">Diagnóstico Solicitado!</h3>
                      <p className="text-sm text-text-secondary max-w-sm">
                        Obrigado pelo seu contato. Nossa equipe de especialistas em saúde analisará os dados e retornará em breve.
                      </p>
                    </div>
                  ) : (
                    <ContactForm
                      buttonText="Quero falar com um especialista"
                      onSubmitSuccess={() => setSubmitted(true)}
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
