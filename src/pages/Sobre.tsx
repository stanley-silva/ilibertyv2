import React from 'react';
import { Award, Target, Stethoscope } from 'lucide-react';
import AnimatedShader from '../components/AnimatedShader';
import CtaButton from '../components/CtaButton';
import Badge from '../components/Badge';
import FadeIn from '../components/FadeIn';
import useSeo from '../hooks/useSeo';

export default function Sobre() {
  useSeo({
    title: 'Nossa Origem e Gestão da Saúde',
    description: 'Nascemos da insatisfação com sistemas de TI engessados. Conheça nossa equipe, liderada por Rafael Borges em Indaiatuba - SP, e nossos valores de pragmatismo e maturidade.'
  });

  return (
    <div id="sobre-page" className="w-full pt-20">
      
      {/* SEÇÃO 1: APRESENTAÇÃO (HERO) */}
      <section id="sobre-hero" className="relative min-h-[calc(100vh-80px)] xl:min-h-[85vh] bg-[#F2F4F8] flex items-end justify-start overflow-hidden px-6 lg:px-12 py-16 lg:py-24 border-b border-[#DBDBDB]">
        {/* Shader animado de fundo com tom azul ciano */}
        <AnimatedShader accentColor="#00AECC" />

        <div className="relative z-20 max-w-[1440px] mx-auto w-full flex flex-col items-start text-left">
          <FadeIn delay={150}>
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#333333] mb-5 border-l-2 border-[#00AECC] pl-3">
              Sobre a iLiberty
            </span>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="font-sans font-semibold text-[#333333] leading-[1.08] tracking-[-0.03em] max-w-4xl"
              style={{ fontSize: 'clamp(2.1rem, 6.2vw, 4.2rem)' }}>
              Tecnologia construída por quem<br />
              <span className="text-[#00AECC]">conhece o chão da operação de saúde.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={450}>
            <p className="text-[#606266] text-base sm:text-[18px] leading-[1.65] mt-6 max-w-2xl font-sans font-medium">
              Não somos teóricos distantes de TI. Nossos fundadores e especialistas associados trazem a bagagem tangível de gestão de laboratórios, hospitais de alta complexidade e grandes corporações médicas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 2: NOSSA HISTÓRIA E ORIGEM */}
      <section id="sobre-historia" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-[#DBDBDB]">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="1" text="Nossa Origem" />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-8">
            
            <div className="lg:col-span-7 flex flex-col gap-6 text-[16.5px] text-[#606266] leading-[1.8] text-left">
              <FadeIn delay={200}>
                <h2 className="font-sans font-medium text-[#333333] tracking-[-0.02em] leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
                  Nascemos da insatisfação com o status quo operacional
                </h2>
                
                <div className="space-y-4">
                  <p>
                    A <strong className="text-[#333333]">iLiberty Tecnologia</strong> nasceu da insatisfação real com o modelo tradicional de consultorias e empresas de software que vendem licenças excessivamente caras, engessadas e frequentemente deslocadas do cenário operacional de cooperativas, laboratórios e hospitais.
                  </p>
                  <p>
                    Liderada na área comercial por <strong className="text-[#333333]">Rafael Borges</strong>, a companhia consolidou suas bases em <strong className="text-[#333333]">Indaiatuba, interior de São Paulo</strong>, atendendo a uma demanda constante por integração qualificada, governança austera de processos e absoluto rigor de entrega em projetos de tecnologia corporativa.
                  </p>
                  <p>
                    Nossa missão principal é conectar processos que travam as operações e extrair de forma transparente as métricas financeiras cruciais que aumentam a eficiência técnica e o faturamento livre de nossos parceiros de saúde.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center">
              <FadeIn delay={300} className="w-full">
                <div className="overflow-hidden rounded-[5px] border border-[#DBDBDB]">
                  <img
                    id="sobre-bi-woman-tablet-img"
                    src="https://iliberty.com.br/wp-content/uploads/2024/07/internet-networking-and-digital-transformation-with-woman-and-tablet-for-global-communication-web.jpg"
                    alt="Digital connection and transformation with hospital operations"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover aspect-[4/3] rounded-[5px] hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 3: NOSSOS PILARES E VALORES ESTRUTURAIS */}
      <section id="sobre-pilares" className="py-20 lg:py-32 bg-[#F2F4F8] px-6 lg:px-12 border-b border-[#DBDBDB]">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn delay={100}>
            <Badge number="2" text="Nossos Valores" />
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-medium text-[#333333] tracking-[-0.02em] leading-tight mb-16"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.2rem)' }}>
              O que nos sustenta e orienta no B2B
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <FadeIn delay={300} className="flex">
              <div className="bg-white border border-[#DBDBDB] rounded-[5px] p-8 lg:p-10 flex flex-col justify-between w-full h-full">
                <div>
                  <div className="w-12 h-12 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-[5px] mb-6 shadow-xs">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4 font-sans uppercase tracking-wider text-left">
                    Maturidade Institucional
                  </h3>
                  <p className="text-sm text-[#606266] leading-relaxed text-left">
                    Projetos profundamente documentados, com governança administrativa e técnica clara e completa rastreabilidade de código, garantindo segurança a longo prazo para a infraestrutura de TI do seu negócio.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400} className="flex">
              <div className="bg-white border border-[#DBDBDB] rounded-[5px] p-8 lg:p-10 flex flex-col justify-between w-full h-full">
                <div>
                  <div className="w-12 h-12 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-[5px] mb-6 shadow-xs">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4 font-sans uppercase tracking-wider text-left">
                    Pragmatismo
                  </h3>
                  <p className="text-sm text-[#606266] leading-relaxed text-left">
                    Foco focado e absoluto na eficiência operacional das áreas. Se uma determinada automação sistêmica não gera retorno financeiro tangível auditar, ela simplesmente não deve ser arquitetada ou executada.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500} className="flex">
              <div className="bg-white border border-[#DBDBDB] rounded-[5px] p-8 lg:p-10 flex flex-col justify-between w-full h-full">
                <div>
                  <div className="w-12 h-12 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-[5px] mb-6 shadow-xs">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-4 font-sans uppercase tracking-wider text-left">
                    Profundidade Setorial
                  </h3>
                  <p className="text-sm text-[#606266] leading-relaxed text-left">
                    Nossa equipe entende e fala fluentemente o vocabulário real de médicos, administradores hospitalares seniores, auditores de contas médicas e diretores biomédicos de faturamento.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4: CONVERSÃO E CONTATO ESTRATÉGICO (CTA) */}
      <section id="sobre-cta" className="py-24 bg-[#001E38] text-white px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
          <FadeIn delay={100}>
            <span className="text-[#00AECC] uppercase text-xs tracking-widest font-bold mb-4 block">
              Contato Estratégico
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-medium mb-6 text-[#FFFFFF] leading-tight tracking-[-0.01em] max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.8rem)' }}>
              Escreva-se com uma empresa que compreende verdadeiramente o seu setor.
            </h2>
          </FadeIn>

          <FadeIn delay={350}>
            <CtaButton
              text="Falar com a nossa Diretoria Executiva"
              to="/contato"
              variant="primary"
            />
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
