import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Database,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  FileText,
  User,
  Mail,
  Phone,
  Building2,
  Send,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
  HelpCircle,
  ArrowRight,
  TrendingDown,
  Clock,
  Layers,
  Coins
} from 'lucide-react';
import AnimatedShader from '../components/AnimatedShader';
import CtaButton from '../components/CtaButton';
import Badge from '../components/Badge';
import FadeIn from '../components/FadeIn';
import useSeo from '../hooks/useSeo';
import ContactForm from '../components/ContactForm';

export default function Discovery() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const [faqExpanded, setFaqExpanded] = useState<number | null>(null);

  useSeo({
    title: 'Discovery iLiberty - Diagnóstico Operacional e ROI para Saúde',
    description: 'Diagnóstico estruturado de 4 semanas que mapeia gargalos operacionais e financeiros em cooperativas, hospitais e laboratórios com foco em ROI real.'
  });

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

  const toggleFaq = (index: number) => {
    setFaqExpanded((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      q: 'Preciso trocar meus sistemas atuais ?',
      a: 'Não. O Discovery analisa seus sistemas vigentes (como Korus, TOTVS, Smart, AUTSC, etc.). O objetivo é integrar e otimizar o que você já possui através de barramentos de APIs ou automações robóticas (RPA), e não gerar custos de substituição desnecessários.'
    },
    {
      q: 'Por que diagnóstico antes da tecnologia?',
      a: 'Nossa premissa central é que nenhum projeto de sucesso começa pela tecnologia. O diagnóstico mapeia a real raiz dos seus problemas, evitando que você invista tempo e dinheiro em soluções de software que não atacam os gargalos reais da sua operação.'
    },
    {
      q: 'Por onde começar com a iLiberty?',
      a: 'Recomendamos começar pelo Discovery: o nosso diagnóstico estruturado de 4 semanas. É o formato de menor risco para a sua instituição obter clareza operacional completa, inventário detalhado de gargalos e estimativa realista de ROI.'
    },
    {
      q: 'O que acontece depois que vocês entregam o diagnóstico?',
      a: 'Sua diretoria recebe o Relatório META com o backlog priorizado de melhorias. Junto, a iLiberty já entrega uma proposta comercial transparente para as fases subsequentes (Ação + Resultado + Transformação), com base em pacotes de horas mensais previsíveis de acordo com a sua necessidade.'
    }
  ];

  const smartSteps = [
    {
      letter: 'S',
      title: 'Onde você está hoje',
      badge: 'Situação - Entregue no Discovery',
      description: 'Mapeamos como as suas áreas operam hoje (processos, interfaces e sistemas) e escancaramos os gargalos operacionais e desperdícios de custo, prazo e qualidade.'
    },
    {
      letter: 'M',
      title: 'Onde você precisa chegar',
      badge: 'Meta - Entregue no Discovery',
      description: 'Consolidamos e priorizamos as oportunidades de melhoria com estimativas reais de impacto financeiro e o ROI esperado para o seu negócio.'
    },
    {
      letter: 'A',
      title: 'Como chegamos lá',
      badge: 'Ação - Etapa Posterior',
      description: 'Implementação prática das melhorias priorizadas através de automações RPA sob medida, integrações de APIs e revisão de processos.'
    },
    {
      letter: 'R',
      title: 'Como medimos no caminho',
      badge: 'Resultado - Etapa Posterior',
      description: 'Monitoramento contínuo através de dashboards para garantir que a eficiência prometida chegue ao caixa.'
    },
    {
      letter: 'T',
      title: 'O que permanece depois',
      badge: 'Transformação - Etapa Posterior',
      description: 'Consolidação de uma cultura de governança e inovação contínua, reduzindo a dependência operacional de pessoas específicas.'
    }
  ];

  const deliverables = [
    {
      badge: 'CCE',
      title: 'Planejamento e estratégia',
      desc: 'O cérebro do método. Estratégia, indicadores, processos e plano de ação rodando no mesmo fluxo, todo dia.'
    },
    {
      badge: 'COCKPIT',
      title: 'Indicadores, BI e Decisão',
      desc: 'O painel que a diretoria consulta. Decisão em tempo real, com drill-down do C-level até a linha de frente.'
    },
    {
      badge: 'CUSTOS & ORÇAMENTO',
      title: 'Custos e orçamento base-zero',
      desc: 'Custos por atividade e orçamento base-zero num único sistema. A controladoria decide em tempo real, não no fechamento.'
    },
    {
      badge: 'INTEGRADOR',
      title: 'Integração & interoperabilidade',
      desc: 'Conecta os sistemas que sua operação já usa, sem trocar tudo. Integração vira rotina, não projeto.'
    },
    {
      badge: 'ORQUESTRADOR',
      title: 'Automação, ROI e operação',
      desc: 'Tarefas repetitivas saem da mão da equipe. Você acompanha o ROI de cada automação em tempo real.'
    },
    {
      badge: 'LUMI.AI',
      title: 'Estratégia, processos e governança',
      desc: 'IA onde mais dói no caixa da operadora. Devolve tempo à equipe e recupera receita continuamente.'
    },
    {
      badge: 'ILAB',
      title: 'LIMS PARA LABORATÓRIO DE APOIO',
      desc: 'Da venda online à entrega do laudo, num único fluxo. O módulo vertical da plataforma, com case publicado em escala nacional.'
    }
  ];

  return (
    <div id="discovery-page" className="w-full pt-20 bg-white">

      {/* SEÇÃO 1: APRESENTAÇÃO (HERO) */}
      <section id="discovery-hero" className="relative min-h-[80vh] bg-brand-bg flex items-center justify-center overflow-hidden px-6 lg:px-12 py-20 lg:py-28 border-b border-border-subtle z-30">

        {/* Shader animado de fundo com tom azul ciano */}
        <AnimatedShader accentColor="#00AECC" />

        {/* Imagem de background premium para a seção hero */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none z-10 opacity-[0.99] mix-blend-overlay"
          style={{ backgroundImage: `url('/assets/background_secao_01_discovery.webp')` }}
        />

        {/* Grid técnico sutil em CSS */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00AECC06_1px,transparent_1px),linear-gradient(to_bottom,#00AECC06_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-15 opacity-80" />

        {/* Grafismos de conexões em curva */}
        <div className="absolute inset-0 z-15 opacity-30 pointer-events-none select-none">
          <svg className="w-full h-full text-brand-cyan/20" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 250C300 100 500 400 900 250C1200 130 1350 430 1600 300" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 4" />
            <path d="M-50 330C350 150 650 480 950 330C1250 200 1400 500 1650 370" stroke="currentColor" strokeWidth="0.6" />

            <circle cx="350" cy="180" r="4.5" className="fill-brand-cyan animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="350" cy="180" r="3" className="fill-brand-cyan" />
            <circle cx="950" cy="330" r="5" className="fill-brand-blue animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="950" cy="330" r="3.5" className="fill-brand-blue" />
          </svg>
        </div>

        {/* Efeito de brilho desfocado no fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 rounded-full blur-3xl opacity-80 -z-10 animate-pulse" />

        {/* Bloco de conteúdo central */}
        <div className="relative z-20 max-w-[1440px] mx-auto w-full flex flex-col items-center justify-center text-center">
          <FadeIn delay={150}>
            <span className="inline-block text-[11px] font-sans font-bold text-brand-dark uppercase tracking-[0.2em] mb-6 border-l-3 border-brand-cyan pl-3 text-left max-w-2xl">
              Como trabalhamos
            </span>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="font-sans font-bold text-brand-dark leading-[1.08] tracking-[-0.03em] max-w-5xl text-center mx-auto"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 60px)' }}>
              <span className="text-brand-cyan">Pare de investir</span> antes de entender onde sua operação está <span className="text-brand-cyan">vazando dinheiro.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={450}>
            <p className="text-text-secondary text-base sm:text-[18px] leading-[1.7] mt-6 max-w-3xl mx-auto font-sans font-medium">
              Antes de qualquer projeto, aplicamos um método estruturado em 5 etapas, nossa metodologia <strong>SMART</strong>, para entender exatamente onde está o problema. A tecnologia entra depois, sustentada pelo o UniConecta, a plataforma que conecta diagnóstico, decisão e operação.
            </p>
          </FadeIn>

          <FadeIn delay={600} className="w-full flex justify-center">
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <CtaButton
                text="Falar com um Especialista"
                onClick={() => {
                  const el = document.getElementById('discovery-form-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    document.getElementById('nome')?.focus();
                  }, 800);
                }}
                variant="primary"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 1.5: PARCEIROS E CLIENTES ATENDIDOS */}
      <section id="framework-partners" className="py-20 bg-brand-bg px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
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

      {/* SEÇÃO 2: O PROBLEMA E O DIAGNÓSTICO */}
      <section id="discovery-problems" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 text-left">
              <FadeIn delay={100}>
                <Badge number="1" text="O Diagnóstico de Mercado" />
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.02em] mb-6 animate-fade-in"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', color: '#001E38' }}>
                  O crescimento do seu negócio de saúde está sendo sufocado pela ineficiência invisível?
                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-[17.6px] leading-[1.75] text-text-secondary font-sans font-medium">
                  No ecossistema de saúde, seja em uma cooperativa médica ou em um laboratório de apoio, quanto mais a operação cresce, mais complexa e travada ela se torna. O mercado tenta empurrar softwares genéricos e engessados que prometem resolver tudo, mas a realidade do seu dia a dia continua a mesma:
                </p>
              </FadeIn>

              <FadeIn delay={400} className="mt-8">
                <div className="border-l-4 border-brand-cyan pl-5 bg-brand-bg/50 p-5 rounded-r-[12px] text-left">
                  <p className="text-sm sm:text-base leading-[1.65] font-semibold text-brand-dark font-sans">
                    "Nossa premissa central é inegociável: Nenhum projeto de sucesso começa pela tecnologia. O diagnóstico precisa vir antes de qualquer proposta de solução."
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[460px] relative aspect-[4/3] flex items-center justify-center">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/25 to-brand-blue/25 rounded-[30px] blur-3xl opacity-80 -z-10 animate-pulse" />

                <div className="absolute -top-6 -right-6 w-32 h-32 text-brand-cyan/20 -z-10">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="sec2-image-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#sec2-image-dots)" />
                  </svg>
                </div>

                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border-subtle/50 shadow-xl bg-white">
                  <img
                    src="/assets/discovery_clinical_dashboard.png"
                    alt="Profissional utilizando tablet com dashboard clínico de saúde"
                    className="w-full h-full object-cover transition-transform duration-750 hover:scale-103"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 w-full">

            <FadeIn delay={200} className="flex">
              <div className="bg-[#F2F4F8]/50 border border-border-subtle/50 rounded-2xl p-6 sm:p-8 flex gap-5 text-left hover:bg-white hover:border-brand-cyan/20 hover:shadow-md transition-all duration-300 group w-full">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex-shrink-0 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-md font-bold text-brand-dark font-sans uppercase tracking-wider">Sistemas que não se conversam</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-2 font-normal font-sans">
                    Dados fragmentados e isolados (entre AUTSC, Smart, SGU, TOTVS ou Korus) que geram reentrada manual de dados, duplicação de esforços e inconsistências severas.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300} className="flex">
              <div className="bg-[#F2F4F8]/50 border border-border-subtle/50 rounded-2xl p-6 sm:p-8 flex gap-5 text-left hover:bg-white hover:border-brand-cyan/20 hover:shadow-md transition-all duration-300 group w-full">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex-shrink-0 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-md font-bold text-brand-dark font-sans uppercase tracking-wider">Processos manuais e retrabalho</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-2 font-normal font-sans">
                    Uma operação crítica totalmente dependente de papéis, e-mails e planilhas paralelas, altamente sujeita a falhas humanas.

                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400} className="flex">
              <div className="bg-[#F2F4F8]/50 border border-border-subtle/50 rounded-2xl p-6 sm:p-8 flex gap-5 text-left hover:bg-white hover:border-brand-cyan/20 hover:shadow-md transition-all duration-300 group w-full">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex-shrink-0 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-md font-bold text-brand-dark font-sans uppercase tracking-wider">Tomada de decisão no escuro</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-2 font-normal font-sans">
                    Sem indicadores centralizados e visibilidade em tempo real, sua diretoria toma decisões estratégicas baseadas em "achismo" ou emoção.

                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500} className="flex">
              <div className="bg-[#F2F4F8]/50 border border-border-subtle/50 rounded-2xl p-6 sm:p-8 flex gap-5 text-left hover:bg-white hover:border-brand-cyan/20 hover:shadow-md transition-all duration-300 group w-full">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex-shrink-0 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-md font-bold text-brand-dark font-sans uppercase tracking-wider">Risco de glosa e custo crescente</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-2 font-normal font-sans">
                    Falta de rastreabilidade e falhas de auditoria geram vazamentos de receita e aumentam o custo operacional sem entregar resultado proporcional.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4: METODOLOGIA SMART E ETAPAS DE TRANSFORMAÇÃO */}
      <section id="jornada-smart" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5 text-left flex flex-col items-start h-full">
              <FadeIn delay={100}>
                <Badge number="2" text="Nossa Metodologia" />
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark tracking-[-0.02em] leading-tight mt-5 mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)' }}>
                  Metodologia SMART: O Caminho da Transformação
                </h2>
                <p className="text-[17.6px] leading-[1.7] text-text-secondary font-sans font-normal mb-8">
                  Nossa metodologia exclusiva de 5 etapas garante um mapeamento preciso e sem atrito, dividindo o processo de forma clara entre o diagnóstico imediato e as etapas de implementação futura.
                </p>
              </FadeIn>

              <FadeIn delay={300} className="w-full mt-auto relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/15 to-brand-blue/15 rounded-[24px] blur-2xl opacity-60 -z-10 animate-pulse" />
                <div className="relative z-10 w-full aspect-[16/10] rounded-tr-[50px] rounded-bl-[50px] rounded-tl-none rounded-br-none overflow-hidden border border-border-subtle/30 shadow-md bg-white">
                  <img
                    src="/assets/discovery_smart_team.png"
                    alt="Equipe clínica de especialistas iLiberty operando sistemas"
                    className="w-full h-full object-cover rounded-tr-[50px] rounded-bl-[50px] rounded-tl-none rounded-br-none transition-transform duration-750 hover:scale-103"
                  />
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 w-full text-left relative pl-0 lg:pl-8">
              <div className="absolute left-[30px] lg:left-[38px] top-6 bottom-6 w-[2px] bg-brand-cyan/25 z-0" />

              <div className="flex flex-col gap-8 relative z-10">
                {smartSteps.map((step, index) => (
                  <FadeIn key={index} delay={150 * (index + 1)} className="flex items-start relative group">
                    <div className="w-[60px] h-[60px] rounded-full bg-white text-brand-cyan font-sans font-bold flex items-center justify-center text-2xl shrink-0 shadow-sm border-2 border-brand-cyan/35 group-hover:border-brand-cyan group-hover:scale-105 transition-all duration-300 z-10">
                      {step.letter}
                    </div>

                    <div className="ml-6 flex flex-col items-start">
                      <span className="text-[9px] text-brand-cyan font-bold tracking-widest uppercase mb-1 border border-brand-cyan/35 px-2 py-0.5 rounded-full bg-brand-cyan/5">
                        {step.badge}
                      </span>
                      <h3 className="text-[18px] font-bold text-brand-dark mb-2 font-sans mt-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-xl font-sans font-normal">
                        {step.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 5: ENTREGÁVEIS E RESULTADOS DO DISCOVERY */}
      <section id="discovery-deliverables" className="py-20 lg:py-32 bg-brand-bg px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-cyan mb-5">
              <span>[ UNICONECTA ]</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-bold text-brand-dark tracking-[-0.02em] leading-tight mb-12 text-left"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)' }}>
              A plataforma que sustenta o método em produção
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {deliverables.slice(0, 6).map((item, index) => (
              <FadeIn key={index} delay={100 * (index + 1)} className="flex">
                <div className="bg-white border border-border-subtle/60 rounded-2xl p-6 sm:p-8 flex gap-5 text-left hover:shadow-md hover:scale-[1.02] hover:border-brand-cyan/20 transition-all duration-300 w-full group">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/15 flex items-center justify-center text-brand-cyan flex-shrink-0 font-bold font-sans">
                    0{index + 1}
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-cyan font-bold tracking-widest uppercase block mb-1 font-sans">
                      [{item.badge}]
                    </span>
                    <h3 className="text-base font-bold text-brand-dark font-sans uppercase tracking-wider mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={400} className="col-span-1 md:col-span-2 lg:col-span-3 flex">
              <div className="bg-[#001E38] text-white border border-brand-cyan/35 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center text-left hover:shadow-lg hover:border-brand-cyan transition-all duration-300 w-full group relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

                <div className="w-12 h-12 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center shrink-0 font-bold font-sans text-lg">
                  07
                </div>

                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                  <div className="max-w-3xl">
                    <span className="text-[10px] text-brand-cyan font-bold tracking-widest uppercase mb-1.5 block font-sans">
                      [{deliverables[6].badge}]
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-sans uppercase tracking-wider mb-2">
                      {deliverables[6].title}
                    </h3>
                    <p className="text-sm text-[#DBDBDB] leading-relaxed font-sans font-normal">
                      {deliverables[6].desc}
                    </p>
                  </div>

                  <Link to="/laboratorios" className="shrink-0 flex items-center gap-1.5 text-[10px] font-bold text-brand-cyan hover:text-white uppercase tracking-widest bg-brand-cyan/15 hover:bg-brand-cyan px-4 py-2.5 rounded-full border border-brand-cyan/30 transition-all duration-300">
                    <span>CONHECER O ILAB</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: MÉTRICAS E RESULTADOS DE TRANSFORMAÇÃO */}
      <section id="discovery-metrics" className="py-20 bg-white px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="3" text="Métricas de Transformação" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 mt-12 border-t border-b border-border-subtle/70 py-16">

            <div className="px-2 md:px-8 border-r-0 md:border-r border-border-subtle/70 last:border-r-0 text-left">
              <FadeIn delay={200}>
                <div className="text-brand-cyan font-bold font-sans tracking-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                  -90%
                </div>
                <h4 className="text-md font-bold text-brand-dark mb-2 uppercase tracking-wider">Falhas & Retrabalhos</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                  Redução drástica em erros operacionais e retrabalho manual das equipes mapeadas.
                </p>
              </FadeIn>
            </div>

            <div className="px-2 md:px-8 border-r-0 md:border-r border-border-subtle/70 last:border-r-0 text-left">
              <FadeIn delay={300}>
                <div className="text-brand-cyan font-bold font-sans tracking-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                  +40%
                </div>
                <h4 className="text-md font-bold text-brand-dark mb-2 uppercase tracking-wider">Produtividade</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                  Ganho substancial na produtividade geral das áreas operacionais integradas.
                </p>
              </FadeIn>
            </div>

            <div className="px-2 md:px-8 border-r-0 md:border-r border-border-subtle/70 last:border-r-0 text-left">
              <FadeIn delay={400}>
                <div className="text-brand-cyan font-bold font-sans tracking-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                  -25%
                </div>
                <h4 className="text-md font-bold text-brand-dark mb-2 uppercase tracking-wider">Custo Direto</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                  Economia nos custos operacionais diretos dos fluxos mapeados e reestruturados.
                </p>
              </FadeIn>
            </div>

            <div className="px-2 md:px-8 last:border-r-0 text-left">
              <FadeIn delay={500}>
                <div className="text-brand-cyan font-bold font-sans tracking-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                  100%
                </div>
                <h4 className="text-md font-bold text-brand-dark mb-2 uppercase tracking-wider">Visibilidade</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                  Controle absoluto e governança profunda para a tomada de decisão da alta diretoria.
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 5B: EXPLICAÇÃO E CONCEITO DO DISCOVERY */}
      <section id="discovery-concept" className="py-20 lg:py-32 bg-[#F2F4F8] px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 text-left">
              <FadeIn delay={100}>
                <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-cyan mb-5">
                  <span>[ DISCOVERY ]</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.02em] mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', color: '#001E38' }}>
                  Onde começar com a gente
                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-[17.6px] leading-[1.75] text-text-secondary font-sans font-normal mb-6">
                  O Discovery é o nosso produto de entrada de escopo fechado. Uma consultoria operacional acelerada conduzida por especialistas certificados em gestão de processos e saúde.
                </p>
                <p className="text-[17.6px] leading-[1.75] text-text-secondary font-sans font-semibold">
                  Para grandes transformações, recomendamos começar pelo Discovery: um diagnóstico estruturado de 4 semanas que entrega a você e à sua diretoria a clareza completa sobre onde estão os gargalos, quanto custam e qual o ROI esperado de cada intervenção. É a porta de entrada de menor risco para começar uma jornada de transformação com a iLiberty.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <FadeIn delay={400} className="w-full max-w-[500px]">
                <div className="bg-[#001E38] text-white border border-brand-cyan/30 rounded-[24px] p-8 shadow-2xl flex flex-col gap-6 relative overflow-hidden text-left group hover:border-brand-cyan transition-all duration-300">
                  <div className="absolute -top-16 -right-16 w-44 h-44 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between border-b border-white/10 pb-5 z-10">
                    <div>
                      <span className="text-[9px] text-brand-cyan font-bold tracking-[0.2em] uppercase block mb-1">
                        [ Fluxo de Execução ]
                      </span>
                      <h3 className="font-sans font-bold text-base text-white uppercase tracking-wider">
                        Ciclo de Entrega
                      </h3>
                    </div>
                    <span className="text-[10px] text-brand-cyan font-bold border border-brand-cyan/30 px-3 py-1 bg-brand-cyan/10 rounded-full uppercase tracking-wider">
                      4 Semanas
                    </span>
                  </div>

                  <div className="relative flex flex-col gap-6 pl-4 z-10">
                    <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-cyan/50 to-brand-blue/20" />

                    <div className="flex gap-4 relative group/step">
                      <div className="w-8 h-8 rounded-full bg-[#001E38] border-2 border-brand-cyan text-brand-cyan text-xs font-bold flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(0,174,204,0.3)] group-hover/step:bg-brand-cyan group-hover/step:text-white transition-all duration-300 z-10">
                        W1
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-sans uppercase tracking-wide">Imersão & Mapeamento</h4>
                        <p className="text-[11px] text-[#DBDBDB] leading-relaxed mt-0.5">Entrevistas seniores e levantamento cirúrgico de fluxos e sistemas.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 relative group/step">
                      <div className="w-8 h-8 rounded-full bg-[#001E38] border-2 border-brand-cyan/60 text-brand-cyan/90 text-xs font-bold flex items-center justify-center shrink-0 group-hover/step:border-brand-cyan group-hover/step:bg-brand-cyan group-hover/step:text-white transition-all duration-300 z-10">
                        W2
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white/90 font-sans uppercase tracking-wide">Diagnóstico Operacional</h4>
                        <p className="text-[11px] text-[#DBDBDB]/90 leading-relaxed mt-0.5">Auditoria profunda de faturamentos, custos e histórico de glosas.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 relative group/step">
                      <div className="w-8 h-8 rounded-full bg-[#001E38] border-2 border-brand-cyan/40 text-brand-cyan/80 text-xs font-bold flex items-center justify-center shrink-0 group-hover/step:border-brand-cyan group-hover/step:bg-brand-cyan group-hover/step:text-white transition-all duration-300 z-10">
                        W3
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white/80 font-sans uppercase tracking-wide">Desenho de Processos</h4>
                        <p className="text-[11px] text-[#DBDBDB]/80 leading-relaxed mt-0.5">Modelagem anatômica dos gargalos e conexões de ponta a ponta.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 relative group/step">
                      <div className="w-8 h-8 rounded-full bg-[#001E38] border-2 border-brand-cyan/30 text-brand-cyan/70 text-xs font-bold flex items-center justify-center shrink-0 group-hover/step:border-brand-cyan group-hover/step:bg-brand-cyan group-hover/step:text-white transition-all duration-300 z-10">
                        W4
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white/70 font-sans uppercase tracking-wide">Plano de Ação & ROI</h4>
                        <p className="text-[11px] text-[#DBDBDB]/70 leading-relaxed mt-0.5">Entrega do Relatório META priorizado por retorno financeiro.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-5 mt-2 flex justify-between items-center text-xs font-bold z-10">
                    <span className="text-[#DBDBDB]/80">Investimento de Entrada</span>
                    <span className="text-brand-cyan text-sm shadow-sm bg-brand-cyan/10 px-3 py-1.5 rounded-md border border-brand-cyan/20">
                      Preço sob Consulta
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: PROVAS E RESULTADOS (CASE UNIMED AVARÉ) - COMENTADO TEMPORARIAMENTE
      <section id="discovery-case" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-border-subtle relative z-30">
        <div className="max-w-[1440px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 text-left">
              <FadeIn delay={100}>
                <Badge number="4" text="Provas e Resultados" />
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.01em] border-l-4 border-brand-cyan pl-5"
                  style={{ fontSize: 'clamp(1.8rem, 4.2vw, 2.6rem)', color: '#001E38' }}>
                  Estudo de Caso Real: Unimed Avaré
                </h2>
              </FadeIn>

              <FadeIn delay={300} className="mt-4">
                <p className="text-[17.6px] leading-[1.8] text-text-secondary font-normal font-sans">
                  Não trabalhamos com promessas intangíveis. No projeto desenvolvido para a <strong>Unimed Avaré</strong>, o Discovery analisou <strong>20 áreas operacionais</strong>, mapeou <strong>57 processos críticos</strong> e identificou <strong>167 melhorias prioritárias</strong>, gerando eficiência imediata.
                </p>
              </FadeIn>

              <FadeIn delay={400} className="mt-6">
                <div className="border-l-4 border-brand-cyan pl-5 bg-brand-bg/50 p-4 rounded-r-[8px] text-left">
                  <p className="text-xs sm:text-sm font-semibold text-brand-dark font-sans leading-relaxed">
                    <strong>Nota de ROI:</strong> Para a Unimed Avaré, o potencial financeiro identificado gerou um <strong>ROI superior a 16x</strong> sobre o valor investido na contratação do Discovery.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[460px] relative aspect-[4/3] flex items-center justify-center">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 rounded-[30px] blur-3xl opacity-70 -z-10 animate-pulse" />

                <div className="relative z-10 w-full h-full rounded-tl-[60px] rounded-br-[60px] rounded-tr-none rounded-bl-none overflow-hidden border border-border-subtle/30 shadow-xl bg-white">
                  <img
                    src="/assets/unimed_avare.webp"
                    alt="Case de sucesso do Mapeamento Operacional na Unimed Avaré"
                    className="w-full h-full object-cover rounded-tl-[60px] rounded-br-[60px] rounded-tr-none rounded-bl-none transition-transform duration-750 hover:scale-103 pointer-events-none"
                  />
                </div>

                <div className="absolute -bottom-4 -left-4 lg:-left-8 z-20">
                  <div className="bg-white/90 backdrop-blur-md border border-brand-cyan/20 p-4 rounded-[12px] shadow-xl flex items-center gap-4 max-w-[245px] animate-float-slow transition-all hover:scale-105 duration-300">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan/15 flex items-center justify-center text-brand-cyan font-bold text-lg shadow-sm">
                      ✓
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#00AECC]">[ Homologado ]</p>
                      <p className="text-xs font-bold text-[#001E38] font-sans">ROI 16x Confirmado pelo Case</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FadeIn delay={400} className="w-full mt-8 overflow-x-auto border border-border-subtle/80 rounded-2xl shadow-sm bg-brand-bg/25">
            <table className="min-w-full divide-y divide-border-subtle/70 text-left font-sans">
              <thead className="bg-[#001E38] text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Área / Iniciativa Estratégica</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Potencial de Economia Anual</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Horas Recuperáveis / Ano</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border-subtle/40 text-sm text-text-secondary font-medium">
                <tr className="hover:bg-brand-cyan/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Oncologia & Medicina Preventiva</td>
                  <td className="px-6 py-4 text-brand-cyan font-bold">R$ 78.567 / ano</td>
                  <td className="px-6 py-4">4.874 h / ano</td>
                </tr>
                <tr className="hover:bg-brand-cyan/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Financeiro & Contas a Pagar</td>
                  <td className="px-6 py-4 text-brand-cyan font-bold">R$ 45.944 / ano</td>
                  <td className="px-6 py-4">2.850 h / ano</td>
                </tr>
                <tr className="hover:bg-brand-cyan/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Centro Cirúrgico & CME</td>
                  <td className="px-6 py-4 text-brand-cyan font-bold">R$ 18.708 / ano</td>
                  <td className="px-6 py-4">1.161 h / ano</td>
                </tr>
                <tr className="hover:bg-brand-cyan/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Ouvidoria & Tratamento de Demandas</td>
                  <td className="px-6 py-4 text-brand-cyan font-bold">R$ 18.053 / ano</td>
                  <td className="px-6 py-4">1.120 h / ano</td>
                </tr>
                <tr className="hover:bg-brand-cyan/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Comercial (PJ/PF e Contratos)</td>
                  <td className="px-6 py-4 text-brand-cyan font-bold">R$ 13.597 / ano</td>
                  <td className="px-6 py-4">844 h / ano</td>
                </tr>
                <tr className="hover:bg-brand-cyan/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Áreas de Apoio (9 setores integrados)</td>
                  <td className="px-6 py-4 text-brand-cyan font-bold">R$ 19.399 / ano</td>
                  <td className="px-6 py-4">1.202 h / ano</td>
                </tr>
                <tr className="bg-brand-cyan/10 font-bold text-brand-dark">
                  <td className="px-6 py-4 uppercase">TOTAL IDENTIFICADO NO PROJETO</td>
                  <td className="px-6 py-4 text-brand-cyan">R$ 251.873 / ano</td>
                  <td className="px-6 py-4">15.625 h / ano</td>
                </tr>
              </tbody>
            </table>
          </FadeIn>

        </div>
      </section>
      */ }

      {/* SEÇÃO: PERGUNTAS FREQUENTES (FAQ) */}
      <section id="discovery-faq" className="py-20 lg:py-32 bg-[#F2F4F8] px-6 lg:px-12 border-b border-border-subtle/50 relative z-30">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <FadeIn delay={100}>
              <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-cyan mb-5">
                <span>[ PERGUNTAS FREQUENTES ]</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="font-sans font-bold text-brand-dark leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', color: '#001E38' }}>
                FAQ
              </h2>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isExpanded = faqExpanded === index;
              return (
                <FadeIn key={index} delay={150 * (index + 1)} className="w-full">
                  <div className="bg-white border border-border-subtle/60 rounded-xl overflow-hidden shadow-xs hover:border-brand-cyan/20 transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-bold text-brand-dark text-sm sm:text-base cursor-pointer hover:bg-brand-cyan/5 transition-colors focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-brand-cyan shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-secondary/70 shrink-0 ml-4" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-border-subtle/30 text-left">
                        <p className="text-sm text-text-secondary leading-relaxed font-sans font-normal">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      {/* SEÇÃO: AVALIAÇÃO DE ELEGIBILIDADE E CONVERSÃO (CTA) */}
      <section id="discovery-form-section" className="py-24 bg-white px-6 lg:px-12 relative z-40">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <FadeIn delay={100}>
                <span className="text-brand-cyan uppercase text-xs tracking-[0.2em] font-bold block mb-5">
                  [ Próximo Passo ]
                </span>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.01em] border-l-4 border-brand-cyan pl-5"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#001E38' }}>
                  Vamos descobrir, juntos, por onde começar

                </h2>
              </FadeIn>

              <div className="mt-5">
                <FadeIn delay={300}>
                  <p className="text-text-secondary text-base leading-[1.7] max-w-xl font-sans font-normal">
                    Em uma conversa de 30 minutos, entendemos o seu contexto e indicamos o ponto de entrada mais adequado - Discovery, engajamento direto ou outro caminho. Sem proposta pronta, sem produto empurrado.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <FadeIn delay={400} className="w-full max-w-[660px]">
                <div className="bg-[#F2F4F8]/80 border border-border-subtle/50 p-6 sm:p-10 rounded-[16px] w-full shadow-xs">
                  {submitted ? (
                    <div className="text-center py-10 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-3xl font-bold animate-[bounce_1s_infinite]">
                        ✓
                      </div>
                      <h3 className="font-sans font-bold text-[#001E38] text-xl">Inscrição Enviada!</h3>
                      <p className="text-sm text-text-secondary max-w-sm">
                        Obrigado, <strong>{submittedName}</strong>. Seus dados operacionais foram recebidos. Nossa equipe técnica de engenharia de processos entrará em contato em breve para apresentar a análise de elegibilidade.
                      </p>
                    </div>
                  ) : (
                    <ContactForm
                      buttonText="ENVIAR DADOS OPERACIONAIS E AGENDAR REUNIÃO"
                      onSubmitSuccess={(values) => {
                        setSubmittedName(values.nome);
                        setSubmitted(true);
                      }}
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
