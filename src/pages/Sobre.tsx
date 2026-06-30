import React from 'react';
import { ClipboardCheck, Handshake, Sliders } from 'lucide-react';
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
              Consultoria e tecnologia para a saúde. <span className="text-[#00AECC]">Feitas por quem conhece a operação por dentro
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={450}>
            <p className="text-[#606266] text-base sm:text-[18px] leading-[1.65] mt-6 max-w-2xl font-sans font-medium">
              Nascemos com uma tese simples: a maioria dos projetos de tecnologia em saúde falha porque começa pela tecnologia, não pelo problema. Hoje, dedicamos a inverter essa lógica - método antes do produto, diagnóstico antes da implementação.
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
                <h2 className="font-sans font-semibold text-[#333333] tracking-[-0.02em] leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.8rem)' }}>
                  Unificar. Conectar. Transformar.
                </h2>

                <div className="space-y-6 text-[#606266]">
                  <p>
                    A <strong className="text-[#333333]">iLiberty Tecnologia</strong> começou em 2019 com uma proposta clara: ajudar empresas a mapear e melhorar seus processos.
                  </p>
                  <p>
                    Em 2023, a empresa ampliou a frente de tecnologia com a chegada de uma área dedicada a desenvolvimento Low-Code, o que destravou a criação do iLab, nosso LIMS para laboratórios de apoio. Em 2024, tomamos a decisão estratégica que define a iLiberty hoje: foco no setor de saúde — cooperativas, hospitais e laboratórios.
                  </p>
                  <p>
                    Hoje, em 2026, consolidamos nossa base em Indaiatuba, interior de São Paulo, atendendo cooperativas Unimed singulares na região, laboratórios de apoio em operação nacional, e projetos pontuais em outros setores. A trajetória é curta, mas tem peso — porque cada virada que escolhemos fazer foi para chegar onde estamos agora.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center">
              <FadeIn delay={300} className="w-full">
                <div className="overflow-hidden rounded-2xl border border-[#DBDBDB] shadow-md">
                  <img
                    id="sobre-origem-img"
                    src="/assets/foto_sobre_nos_secao_02.webp"
                    alt="Time e operação de saúde iLiberty"
                    className="w-full h-auto object-cover aspect-[4/3] rounded-2xl hover:scale-105 transition-transform duration-500"
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
            <Badge number="2" text="Como Pensamos" />
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-semibold text-[#333333] tracking-[-0.02em] leading-tight mb-16 text-left"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)' }}>
              Três princípios que sustentam tudo que entregamos.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <FadeIn delay={300} className="flex">
              <div className="bg-white border border-[#DBDBDB] rounded-2xl p-8 lg:p-10 flex flex-col justify-between w-full h-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-xl mb-6 shadow-xs">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-4 font-sans tracking-wide text-left">
                    Diagnóstico antes da ferramenta
                  </h3>
                  <p className="text-sm text-[#606266] leading-relaxed text-left font-normal font-sans">
                    A pior tecnologia é a que chega antes do diagnóstico — porque resolve o problema errado em escala. Em todo projeto, começamos entendendo onde está a dor real, antes de propor qualquer solução. Método primeiro, produto depois.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400} className="flex">
              <div className="bg-white border border-[#DBDBDB] rounded-2xl p-8 lg:p-10 flex flex-col justify-between w-full h-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-xl mb-6 shadow-xs">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-4 font-sans tracking-wide text-left">
                    Primeiro me relaciono, depois vendo
                  </h3>
                  <p className="text-sm text-[#606266] leading-relaxed text-left font-normal font-sans">
                    Nenhum projeto de transformação dá certo numa relação transacional. Conversamos antes de propor, propomos antes de vender, e respeitamos o tempo de cada cliente para tomar a decisão. Relacionamento é a métrica que mais vigiamos internamente.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500} className="flex">
              <div className="bg-white border border-[#DBDBDB] rounded-2xl p-8 lg:p-10 flex flex-col justify-between w-full h-full hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-xl mb-6 shadow-xs">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-4 font-sans tracking-wide text-left">
                    A tecnologia se adapta, não engessa
                  </h3>
                  <p className="text-sm text-[#606266] leading-relaxed text-left font-normal font-sans">
                    Construímos plataforma e processos para se moldarem à realidade de cada cliente — não o contrário. Quando o sistema obriga o cliente a se encaixar nele, alguma coisa importante já se perdeu. A flexibilidade é parte do que entregamos, não cortesia.
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
              Próximo Passo
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="font-sans font-medium mb-6 text-[#FFFFFF] leading-tight tracking-[-0.01em] max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.8rem)' }}>
              Vamos começar com uma conversa
            </h2>
          </FadeIn>

          <FadeIn delay={350}>
            <CtaButton
              text="Falar com um especialista"
              to="/contato"
              variant="primary"
            />
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
