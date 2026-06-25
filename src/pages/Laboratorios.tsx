import React, { useState } from 'react';
import { Blocks, Hourglass, History, Workflow, Sliders, Network, Milestone, Handshake, Database } from 'lucide-react';
import AnimatedShader from '../components/AnimatedShader';
import CtaButton from '../components/CtaButton';
import Badge from '../components/Badge';
import FadeIn from '../components/FadeIn';
import useSeo from '../hooks/useSeo';
import ContactForm from '../components/ContactForm';

export default function Laboratorios() {
  const [submitted, setSubmitted] = useState(false);

  useSeo({
    title: 'iLab LIMS - Software para Laboratórios',
    description: 'iLab LIMS oferece rastreabilidade total de exames, automação de equipamentos, controle inteligente de estoque e blindagem contra glosas faturamento.'
  });

  return (
    <div id="laboratorios-page" className="w-full pt-20">

      {/* SEÇÃO 1: APRESENTAÇÃO (HERO) */}
      <section id="lab-hero" className="relative min-h-[75vh] lg:min-h-[82vh] bg-brand-bg flex items-center justify-center overflow-hidden px-6 lg:px-12 py-20 lg:py-32 border-b border-border-subtle z-30">

        {/* Shader animado de fundo com tom azul específico para laboratórios */}
        <AnimatedShader accentColor="#2575FC" />

        {/* Grid técnico sutil em CSS */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2575FC08_1px,transparent_1px),linear-gradient(to_bottom,#2575FC08_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-15 opacity-80" />

        {/* Grafismos de conexões em curva */}
        <div className="absolute inset-0 z-15 opacity-40 pointer-events-none select-none">
          <svg className="w-full h-full text-brand-blue/20" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 300C300 150 500 450 900 300C1200 180 1350 480 1600 350" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 4" />
            <path d="M-50 380C350 200 650 530 950 380C1250 250 1400 550 1650 420" stroke="currentColor" strokeWidth="0.6" />

            {/* Nós pulsantes de conexão */}
            <circle cx="350" cy="220" r="4" className="fill-brand-blue animate-ping" style={{ animationDuration: '3.5s' }} />
            <circle cx="350" cy="220" r="2.5" className="fill-brand-blue" />

            <circle cx="950" cy="380" r="4.5" className="fill-brand-cyan animate-ping" style={{ animationDuration: '4.5s' }} />
            <circle cx="950" cy="380" r="3" className="fill-brand-cyan" />

            <circle cx="1250" cy="280" r="3.5" className="fill-brand-blue animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="1250" cy="280" r="2.5" className="fill-brand-blue" />
          </svg>
        </div>

        {/* Partículas flutuantes ambientais */}
        <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-[25%] left-[20%] w-2 h-2 bg-brand-blue/40 rounded-full animate-pulse" />
          <div className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 bg-brand-cyan/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[35%] right-[25%] w-2.5 h-2.5 bg-brand-blue/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 bg-brand-cyan/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Efeito de brilho desfocado no centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-r from-brand-blue/15 to-brand-cyan/15 rounded-full blur-3xl opacity-80 -z-10 animate-pulse" />

        {/* Bloco de conteúdo central */}
        <div className="relative z-20 max-w-[1440px] mx-auto w-full flex flex-col items-center justify-center text-center">
          <FadeIn delay={150}>
            <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-blue mb-6">
              <span>[ iLab LIMS ]</span>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="font-sans font-bold text-brand-dark leading-[1.12] tracking-[-0.03em] max-w-4xl text-center mx-auto"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 56px)' }}>
              Da venda online à entrega do Laudo<br />
              <span className="text-brand-blue">Um único sistema para toda sua rede</span>
            </h1>
          </FadeIn>

          <FadeIn delay={450}>
            <p className="text-text-secondary text-base sm:text-[18px] leading-[1.7] mt-6 max-w-2xl mx-auto font-sans font-medium">
              iLab, O LIMS desenhado para laboratórios com operação multi-canal e rede de pontos de coleta - conectando venda, logistica,  agendamento, coleta, produção e laudo num único fluxo, com a rastreabilidade que a fiscalização exige.

            </p>
          </FadeIn>

          <FadeIn delay={600} className="w-full flex justify-center">
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <CtaButton
                text="Solicitar Demonstração do iLab"
                to="/contato"
                variant="blue"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO NOVA: O DIAGNÓSTICO */}
      <section id="lab-diagnostico" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-[#DBDBDB]">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-blue mb-6">
              <span>[O DIAGNÓSTICO]</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-bold text-[#333333] tracking-[-0.02em] leading-tight mb-16 max-w-5xl"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.2rem)' }}>
              O que você não vê está custando ao seu laboratório
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={300}>
              <div className="bg-[#F2F4F8] border border-[#DBDBDB] rounded-[8px] p-8 lg:p-10 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-[#2575FC]/10 text-[#2575FC] flex items-center justify-center mb-6">
                    <Blocks className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4 font-sans">
                    Sistema Engessado
                  </h3>
                  <p className="text-[15px] text-[#606266] leading-relaxed">
                    O sistema obriga o laboratório a se encaixar nele. A maioria dos LIMS foi desenhada para um laboratório padrão que não existe. Quando o seu processo é diferente — e sempre é —, o sistema vira camisa de força. Você adapta a operação à ferramenta, não o contrário. E o que o sistema não faz acaba virando uma planilha de Excel a mais.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-[#F2F4F8] border border-[#DBDBDB] rounded-[8px] p-8 lg:p-10 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-[#2575FC]/10 text-[#2575FC] flex items-center justify-center mb-6">
                    <Hourglass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4 font-sans">
                    Integração custosa e demorada
                  </h3>
                  <p className="text-[15px] text-[#606266] leading-relaxed">
                    Cada integração vira um novo projeto. Equipamento novo, ERP novo, parceiro novo, canal de venda novo. Cada conexão pede orçamento, prazo e fila. O laboratório cresce no ritmo do mercado; a tecnologia anda no ritmo da TI. E o fechamento financeiro paga a conta — porque consolidar dado de cinco fontes vira maratona mensal.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: BENEFÍCIOS DO ILAB */}
      <section id="lab-beneficios" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-[#DBDBDB]">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-blue mb-6">
              <span>[ Funcionalidades ]</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-medium text-[#333333] tracking-[-0.02em] leading-tight mb-16"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.2rem)' }}>
              Tecnologia que se adapta ao laboratório, não o contrário.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            <FadeIn delay={300}>
              <div className="bg-[#F2F4F8] border border-[#DBDBDB] rounded-[5px] p-8 lg:p-10 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[5px] bg-[#2575FC]/10 text-[#2575FC] flex items-center justify-center mb-6">
                    <History className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3 font-sans">
                    Rastreabilidade de Ponta a Ponta
                  </h3>
                  <p className="text-[15px] text-[#606266] leading-relaxed">
                    Cada amostra tem histórico completo: quem coletou, quando, em qual ponto, em qual equipamento foi analisada, quem liberou o  laudo. Auditoria DENATRAN, MTE, ISO ou CAP deixа de ser projeto: é evidência pronta, a qualquer momento.

                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-[#F2F4F8] border border-[#DBDBDB] rounded-[5px] p-8 lg:p-10 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[5px] bg-[#2575FC]/10 text-[#2575FC] flex items-center justify-center mb-6">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3 font-sans">
                    Fim do Retrabalho Manual
                  </h3>
                  <p className="text-[15px] text-[#606266] leading-relaxed">
                    Da entrada do pedido à liberação do laudo, os dados andam sozinhos. Sem redigitação, sem cruzar planilha com sistema, sem retomar conferência no fim do mês. A equipe deixa de operar o sistema e volta a operar o laboratório.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="bg-[#F2F4F8] border border-[#DBDBDB] rounded-[5px] p-8 lg:p-10 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[5px] bg-[#2575FC]/10 text-[#2575FC] flex items-center justify-center mb-6">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3 font-sans">
                    Plataforma que se adapta, não engessa
                  </h3>
                  <p className="text-[15px] text-[#606266] leading-relaxed">
                    Em vez de obrigar o seu laboratório a se encaixar num modelo, o iLab se molda ao seu processo. Regras, fluxos, tipos de exame e canais são configurados - não programados. Mudança que antes virava projeto agora vira ajuste.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="bg-[#F2F4F8] border border-[#DBDBDB] rounded-[5px] p-8 lg:p-10 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[5px] bg-[#2575FC]/10 text-[#2575FC] flex items-center justify-center mb-6">
                    <Network className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3 font-sans">
                    Conectado por padrão, não por projeto
                  </h3>
                  <p className="text-[15px] text-[#606266] leading-relaxed">
                    Integrações com ERP, equipamentos analíticos, gateways de pagamento, e-commerce e parceiros já fazem parte do iLab - não são feitas sob demanda a cada cliente. O laboratório cresce sem esperar pela fila de TI.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PROVA DE CONCEITO */}
      <section id="lab-prova-conceito" className="py-20 lg:py-32 bg-brand-bg px-6 lg:px-12 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <FadeIn delay={100}>
                <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-blue mb-5">
                  <span>[ PROVA DE CONCEITO ]</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark tracking-[-0.02em] leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3.8vw, 3rem)' }}>
                  +30 mil exames por mês, uma plataforma só.
                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-[#606266] text-[15px] leading-relaxed mb-6 font-sans">
                  A <strong>Gralab</strong> é um laboratório de apoio em toxicologia, em São Paulo, que processa mais de 30 mil exames toxicológicos por mês. Uma operação dessa escala não pode rodar em pedaços: venda, postos credenciados, logística de kits, produção e financeiro precisam falar a mesma língua, o tempo todo.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="border-l-4 border-[#2575FC] bg-[#F2F4F8]/50 p-5 rounded-r-[5px] mb-8">
                  <p className="text-[15px] text-[#606266] leading-relaxed font-sans">
                    Com a iLiberty, a Gralab opera de ponta a ponta numa plataforma única: portal de venda dos exames, cadastro e gestão financeira dos postos de coleta, controle da rede credenciada, envio e recebimento de kits, rastreabilidade da amostra na produção, faturamento e integrações com ERP. Sistemas que normalmente vivem separados — funcionando como um só.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={500} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {/* Card 1 */}
                  <div className="bg-white border border-[#DBDBDB] rounded-[6px] p-5 flex flex-col justify-between shadow-xs">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-[28px] font-bold text-[#2575FC] font-sans leading-none">+500</span>
                      <span className="px-2.5 py-1 text-[9px] font-bold text-[#2575FC] bg-[#2575FC]/10 rounded uppercase tracking-wider shrink-0">
                        Rede Credenciada
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#606266] uppercase tracking-wider">
                      Postos de coleta
                    </span>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-[#DBDBDB] rounded-[6px] p-5 flex flex-col justify-between shadow-xs">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-[28px] font-bold text-[#2575FC] font-sans leading-none">100%</span>
                      <span className="px-2.5 py-1 text-[9px] font-bold text-[#2575FC] bg-[#2575FC]/10 rounded uppercase tracking-wider shrink-0">
                        Conformidade
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#606266] uppercase tracking-wider">
                      Amostras rastreadas
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[540px] lg:max-w-none relative aspect-[4/3] rounded-[24px] overflow-hidden border border-[#DBDBDB]/45 shadow-lg">
                <img
                  id="lab-model-showcase-img"
                  src="/assets/laboratorio_secao_04.webp"
                  alt="Prova de Conceito Gralab"
                  className="w-full h-full object-cover transition-transform duration-750 hover:scale-102"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 3B: DIFERENCIAL COMERCIAL (MODELO DE NEGÓCIO) */}
      <section id="lab-diferenciais" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <FadeIn delay={100}>
                <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-blue mb-5">
                  <span>[ Modelo de Negócio ]</span>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark tracking-[-0.02em] leading-tight mb-4"
                  style={{ fontSize: 'clamp(1.75rem, 3.8vw, 3rem)' }}>
                  Parcerias reais, não contratos leoninos.
                </h2>
              </FadeIn>

              <div className="flex flex-col gap-8 w-full mt-6">

                <FadeIn delay={300}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-[8px] shrink-0 transition-colors duration-300 group-hover:bg-[#2575FC] group-hover:text-white">
                      <Milestone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-2 font-sans transition-colors duration-300 group-hover:text-brand-blue">
                        Implantação faseada, valor antes do fim
                      </h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed font-sans">
                        A maioria dos projetos de software se compromete a entregar tudo no fim. O nosso compromisso é entregar valor a cada etapa. Implantação por fases, com entregas curtas e mensuráveis — você sente o retorno antes de chegar ao último marco do cronograma.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={400}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-[8px] shrink-0 transition-colors duration-300 group-hover:bg-[#2575FC] group-hover:text-white">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-2 font-sans transition-colors duration-300 group-hover:text-brand-blue">
                        Comercial que respeita o seu momento
                      </h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed font-sans">
                        Não existe um modelo único. Para laboratórios consolidados que buscam previsibilidade, oferecemos licenciamento estruturado. Para operações em expansão que precisam crescer antes de pagar caro, oferecemos parceria comercial com investimento inicial reduzido. Em comum: nenhum dos dois tem letras miúdas.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={500}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-[8px] shrink-0 transition-colors duration-300 group-hover:bg-[#2575FC] group-hover:text-white">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-2 font-sans transition-colors duration-300 group-hover:text-brand-blue">
                        Seus dados, sua autonomia
                      </h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed font-sans">
                        A operação é sua, os dados são seus, a decisão de seguir é sua a cada renovação. Nada de modelos que dificultam a saída ou prendem o seu time à nossa equipe. Se a parceria fizer sentido, fica naturalmente. Se não fizer, nós ajudamos a desconectar.
                      </p>
                    </div>
                  </div>
                </FadeIn>

              </div>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[440px] lg:max-w-none relative aspect-[4/3] flex items-center justify-center">

                <div className="absolute -top-6 -right-6 lg:-top-12 lg:-right-12 w-36 h-36 lg:w-44 lg:h-44 text-brand-blue/20 z-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="diagonal-stripes-lab-2" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="2.5" />
                      </pattern>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#diagonal-stripes-lab-2)" />
                  </svg>
                </div>

                <div className="absolute -top-12 -right-12 lg:-top-20 lg:-right-20 w-64 h-64 lg:w-80 lg:h-80 text-brand-cyan/20 z-0 animate-[spin_100s_linear_infinite]">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                  </svg>
                </div>

                <div className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 w-40 h-40 lg:w-48 lg:h-48 text-brand-cyan/30 z-0">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dots-lab-2" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                        <circle cx="3" cy="3" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots-lab-2)" />
                  </svg>
                </div>

                <div className="absolute inset-4 bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 rounded-full blur-3xl opacity-80 -z-10 animate-pulse" />

                <div className="relative z-10 w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none overflow-hidden border border-border-subtle/30 shadow-xl">
                  <img
                    id="lab-model-showcase-img-2"
                    src="/assets/laboratorio_secao_04.webp"
                    alt="Modelo de Negócio e Gestão de Laboratório"
                    className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none transition-transform duration-750 hover:scale-103"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4: FORMULÁRIO DE CONVERSÃO (CTA FINAL) */}
      <section id="lab-cta" className="py-24 bg-white px-6 lg:px-12 relative z-40 border-t border-border-subtle/35">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-5 flex flex-col items-start text-left gap-5">
              <FadeIn delay={100}>
                <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-blue mb-2">
                  <span>[ Próximo passo ]</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h2 className="font-sans font-bold text-brand-dark leading-[1.15] tracking-[-0.01em] border-l-4 border-brand-blue pl-5"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#001E38' }}>
                  Vamos mapear, juntos, onde sua operação está vazando eficiência.

                </h2>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-text-secondary text-base leading-[1.7] max-w-xl font-sans font-normal">
                  Em uma conversa de 30 minutos, mapeamos onde sua operação está engessada pelo sistema, onde a integração está saindo cara e onde o tempo da equipe está sendo consumido pelo retrabalho - e mostramos por onde começar a destravar.

                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <FadeIn delay={400} className="w-full max-w-[620px]">
                <div className="bg-[#F2F4F8]/80 border border-border-subtle/50 p-6 sm:p-10 rounded-[16px] w-full shadow-xs">
                  {submitted ? (
                    <div className="text-center py-10 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-3xl font-bold animate-[bounce_1s_infinite]">
                        ✓
                      </div>
                      <h3 className="font-sans font-bold text-[#001E38] text-xl">Demonstração Solicitada!</h3>
                      <p className="text-sm text-text-secondary max-w-sm">
                        Obrigado pelo seu interesse no iLab LIMS. Nossos consultores entrarão em contato em breve para apresentar a plataforma.
                      </p>
                    </div>
                  ) : (
                    <ContactForm
                      buttonText="Transformar a Operação do meu Laboratório"
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
