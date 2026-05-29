import React, { useState } from 'react';
import { MapPin, User, CheckCircle2 } from 'lucide-react';
import AnimatedShader from '../components/AnimatedShader';
import CtaButton from '../components/CtaButton';
import FadeIn from '../components/FadeIn';
import useSeo from '../hooks/useSeo';
import ContactForm, { ContactFormValues } from '../components/ContactForm';

export default function Contato() {
  useSeo({
    title: 'Contato & Diagnóstico Operacional',
    description: 'Solicite uma reunião de diagnóstico operacional e agende um alinhamento estratégico de ROI para sua empresa de saúde.'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);

  const handleSubmit = (values: ContactFormValues) => {
    setSubmittedData(values);
    setFormSubmitted(true);
  };

  return (
    <div id="contato-page" className="w-full pt-20">
      
      {/* SEÇÃO 1: APRESENTAÇÃO (HERO) */}
      <section id="contato-hero" className="relative min-h-[calc(100vh-80px)] xl:min-h-[80vh] bg-[#F2F4F8] flex items-end justify-start overflow-hidden px-6 lg:px-12 py-16 lg:py-24 border-b border-[#DBDBDB]">
        {/* Shader animado de fundo com tom azul ciano */}
        <AnimatedShader accentColor="#00AECC" />

        <div className="relative z-20 max-w-[1440px] mx-auto w-full flex flex-col items-start text-left">
          <FadeIn delay={150}>
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#333333] mb-5 border-l-2 border-[#00AECC] pl-3">
              Contato
            </span>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="font-sans font-semibold text-[#333333] leading-[1.08] tracking-[-0.03em] max-w-4xl"
              style={{ fontSize: 'clamp(2.1rem, 6.2vw, 4.2rem)' }}>
              Vamos acelerar<br />
              <span className="text-[#00AECC]">os seus resultados?</span>
            </h1>
          </FadeIn>

          <FadeIn delay={450}>
            <p className="text-[#606266] text-base sm:text-[18px] leading-[1.65] mt-6 max-w-2xl font-sans font-medium">
              Preencha o formulário institucional de qualificação abaixo. Nosso time de especialistas seniores analisará o perfil operacional da sua empresa antes do primeiro contato para garantir uma reunião 100% produtiva e focada em suas dores.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 2: FORMULÁRIO + INFO DE CONTATO */}
      <section id="contato-form-section" className="py-20 lg:py-32 bg-white px-6 lg:px-12 border-b border-[#DBDBDB]">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 bg-[#F2F4F8] border border-[#DBDBDB] rounded-[5px] p-6 sm:p-10">
              
              {!formSubmitted ? (
                <div className="flex flex-col gap-6 text-left">
                  <div>
                    <h2 className="text-xl font-bold text-brand-dark font-sans border-b border-border-subtle pb-3 mb-2" id="form-title">
                      Formulário de Qualificação
                    </h2>
                    <p className="text-text-secondary text-xs" id="form-subtitle">
                      Todos os dados são criptografados e confidenciais corporativamente de acordo com a LGPD.
                    </p>
                  </div>
                  <ContactForm 
                    buttonText="Solicitar Reunião de Diagnóstico"
                    onSubmitSuccess={handleSubmit}
                  />
                </div>
              ) : (
                <div id="contato-sucesso-view" className="text-left py-4 flex flex-col font-sans">
                  
                  <div className="flex items-center gap-4 mb-6 border-b border-border-subtle pb-6" id="success-header">
                    <div className="w-14 h-14 bg-brand-cyan/10 text-brand-cyan flex items-center justify-center rounded-full shrink-0">
                      <CheckCircle2 className="w-8 h-8 animate-pulse" id="success-icon" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary" id="success-title">
                        Solicitação Recebida!
                      </h3>
                      <p className="text-xs text-text-secondary" id="success-desc">
                        Mapeamento estratégico registrado com sucesso para a empresa <strong>{submittedData?.empresa}</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Resumo dos Dados Cadastrados */}
                  <div className="bg-white border border-border-subtle rounded-[8px] p-6 sm:p-8 shadow-xs mb-6 relative overflow-hidden text-left" id="lead-summary-card">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-cyan to-brand-blue" />
                    <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-4 border-b border-border-subtle/50 pb-2">
                      Resumo Operacional Recebido
                    </h4>
                    <div className="flex flex-col gap-3.5 text-sm">
                      <p className="text-text-secondary"><strong className="text-brand-dark">Nome do Solicitante:</strong> {submittedData?.nome}</p>
                      <p className="text-text-secondary"><strong className="text-brand-dark">Contato:</strong> {submittedData?.email} | {submittedData?.phone}</p>
                      <p className="text-text-secondary"><strong className="text-brand-dark">Segmento & Porte:</strong> {submittedData?.segmento} ({submittedData?.porte})</p>
                      {submittedData?.desafio && (
                        <div className="mt-2 pt-2 border-t border-border-subtle/50">
                          <p className="text-xs font-bold text-brand-dark uppercase tracking-wide mb-1">Gargalo / Desafio Informado:</p>
                          <p className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">"{submittedData.desafio}"</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Próximos Passos */}
                  <div className="bg-[#F2F4F8] border-l-4 border-brand-cyan p-5 rounded-[5px] text-xs sm:text-sm text-text-secondary mb-8" id="diagnostic-next-steps">
                    <p className="mb-2 font-bold text-brand-dark text-xs uppercase tracking-wide">Próximos Passos:</p>
                    <p className="leading-relaxed">
                      Nossa equipe técnica comercial, liderada por <strong className="text-brand-dark">Rafael Borges</strong>, analisará os gargalos operacionais e os sistemas corporativos informados.
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Entraremos em contato em até <strong className="text-brand-dark">24 horas úteis</strong> nos contatos fornecidos para agendar a reunião oficial de diagnóstico e alinhamento de ROI.
                    </p>
                  </div>

                  <button
                    id="back-to-form-btn"
                    onClick={() => {
                      setFormSubmitted(false);
                      setSubmittedData(null);
                    }}
                    className="text-xs uppercase tracking-widest font-bold text-brand-dark hover:text-brand-cyan border border-border-subtle px-6 py-3 bg-white transition-colors duration-300 self-start cursor-pointer rounded-full"
                  >
                    Voltar ao Formulário
                  </button>
                </div>
              )}

            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 text-left font-sans">
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 text-[#606266] text-[15.5px]">
                  <div className="w-8 h-8 rounded-full bg-[#F2F4F8] flex items-center justify-center text-[#00AECC] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#333333] block mb-1">Localização Física</strong>
                    <p>Rua 13 de maio, 642</p>
                    <p>Indaiatuba, São Paulo — SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-[#606266] text-[15.5px] border-t border-[#DBDBDB] pt-6">
                  <div className="w-8 h-8 rounded-full bg-[#F2F4F8] flex items-center justify-center text-[#00AECC] shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#333333] block mb-1">Contato Executivo Comercial</strong>
                    <p>Rafael Borges</p>
                    <p className="text-sm font-semibold text-[#00AECC]">Diretoria de Contas & ROI</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                
                <div className="bg-[#F2F4F8] border-l-2 border-[#00AECC] p-4 rounded-[5px] flex items-center gap-3">
                  <span className="w-5 h-5 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-full text-[11px] shrink-0">✓</span>
                  <span className="text-xs font-semibold text-[#333333]">Análise prévia do perfil operacional antes da chamada</span>
                </div>

                <div className="bg-[#F2F4F8] border-l-2 border-[#00AECC] p-4 rounded-[5px] flex items-center gap-3">
                  <span className="w-5 h-5 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-full text-[11px] shrink-0">✓</span>
                  <span className="text-xs font-semibold text-[#333333]">Garantia de reunião tática 100% produtiva e resolutiva</span>
                </div>

                <div className="bg-[#F2F4F8] border-l-2 border-[#00AECC] p-4 rounded-[5px] flex items-center gap-3">
                  <span className="w-5 h-5 bg-[#00AECC]/10 text-[#00AECC] flex items-center justify-center rounded-full text-[11px] shrink-0">✓</span>
                  <span className="text-xs font-semibold text-[#333333]">Sem compromisso financeiro ou contratual inicial</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
