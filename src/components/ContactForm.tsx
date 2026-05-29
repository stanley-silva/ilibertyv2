import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export interface ContactFormValues {
  nome: string;
  email: string;
  phone: string;
  empresa: string;
  segmento: string;
  porte: string;
  desafio: string;
}

export interface ContactFormProps {
  buttonText?: string;
  onSubmitSuccess: (values: ContactFormValues) => void;
  isLoading?: boolean;
  themeColor?: 'cyan' | 'green';
}

export default function ContactForm({
  buttonText = 'ENVIAR SOLICITAÇÃO E AGENDAR REUNIÃO',
  onSubmitSuccess,
  isLoading = false,
  themeColor = 'cyan'
}: ContactFormProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [segmento, setSegmento] = useState('');
  const [porte, setPorte] = useState('');
  const [desafio, setDesafio] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && email && phone && empresa && segmento && porte) {
      onSubmitSuccess({
        nome,
        email,
        phone,
        empresa,
        segmento,
        porte,
        desafio
      });
    }
  };

  const focusClass = themeColor === 'green'
    ? 'focus:border-[#00995D] focus:ring-[#00995D]'
    : 'focus:border-brand-cyan focus:ring-brand-cyan';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left w-full relative z-10">
      
      {/* Nome Completo */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="form-nome" className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
          Nome Completo *
        </label>
        <input
          id="form-nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome completo"
          className={`w-full bg-white border border-[#DBDBDB] rounded-[6px] px-4 py-3 text-sm focus:outline-none focus:ring-1 text-brand-dark transition-all duration-200 placeholder:text-text-secondary/40 font-sans ${focusClass}`}
        />
      </div>

      {/* Grid: Email & Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="form-email" className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
            E-mail Corporativo *
          </label>
          <input
            id="form-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@corporativo.com"
            className={`w-full bg-white border border-[#DBDBDB] rounded-[6px] px-4 py-3 text-sm focus:outline-none focus:ring-1 text-brand-dark transition-all duration-200 placeholder:text-text-secondary/40 font-sans ${focusClass}`}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="form-phone" className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
            Telefone / WhatsApp *
          </label>
          <input
            id="form-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            className={`w-full bg-white border border-[#DBDBDB] rounded-[6px] px-4 py-3 text-sm focus:outline-none focus:ring-1 text-brand-dark transition-all duration-200 placeholder:text-text-secondary/40 font-sans ${focusClass}`}
          />
        </div>
      </div>

      {/* Grid: Empresa & Segmento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="form-empresa" className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
            Nome da Empresa / Instituição *
          </label>
          <input
            id="form-empresa"
            type="text"
            required
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            placeholder="Razão Social / Singular / Unidade"
            className={`w-full bg-white border border-[#DBDBDB] rounded-[6px] px-4 py-3 text-sm focus:outline-none focus:ring-1 text-brand-dark transition-all duration-200 placeholder:text-text-secondary/40 font-sans ${focusClass}`}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="form-segmento" className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
            Segmento de Atuação *
          </label>
          <select
            id="form-segmento"
            required
            value={segmento}
            onChange={(e) => setSegmento(e.target.value)}
            className={`w-full bg-white border border-[#DBDBDB] rounded-[6px] px-4 py-3 text-sm focus:outline-none focus:ring-1 text-brand-dark transition-all duration-200 appearance-none font-sans cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23606266%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10 ${focusClass}`}
          >
            <option value="" disabled hidden>Selecione seu segmento</option>
            <option value="Cooperativa de Saúde / Unimed">Cooperativa de Saúde / Singular Unimed</option>
            <option value="Hospital / Clínica Médica">Hospital ou Clínica Médica</option>
            <option value="Laboratório de Apoio / Diagnóstico">Laboratório de Apoio ou Diagnóstico</option>
            <option value="Outro Setor / Tecnologia">Outro Setor ou Empresa</option>
          </select>
        </div>
      </div>

      {/* Porte / Volume Operacional */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="form-porte" className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
          Porte / Volume Operacional Estimado *
        </label>
        <select
          id="form-porte"
          required
          value={porte}
          onChange={(e) => setPorte(e.target.value)}
          className={`w-full bg-white border border-[#DBDBDB] rounded-[6px] px-4 py-3 text-sm focus:outline-none focus:ring-1 text-brand-dark transition-all duration-200 appearance-none font-sans cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23606266%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10 ${focusClass}`}
        >
          <option value="" disabled hidden>Selecione o volume diário</option>
          <option value="Até 500 exames/procedimentos por dia">Até 500 exames ou procedimentos diários</option>
          <option value="De 501 a 2.000 exames por dia">De 501 a 2.000 exames ou procedimentos diários</option>
          <option value="Acima de 2.000 exames por dia ou Grande Operadora">Acima de 2.000 exames diários / Grande Operadora</option>
        </select>
      </div>

      {/* Desafio Principal / Gargalo */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="form-desafio" className="text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">
          Principal Desafio / Gargalo Operacional
        </label>
        <textarea
          id="form-desafio"
          value={desafio}
          onChange={(e) => setDesafio(e.target.value)}
          placeholder="Descreva brevemente os principais desafios ou ineficiências em seus fluxos operacionais (opcional)"
          rows={3}
          className={`w-full bg-white border border-[#DBDBDB] rounded-[6px] px-4 py-3 text-sm focus:outline-none focus:ring-1 text-brand-dark transition-all duration-200 placeholder:text-text-secondary/40 font-sans resize-none ${focusClass}`}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full mt-3 active:scale-[0.99] text-white font-sans font-bold py-4 rounded-[6px] transition-all flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider cursor-pointer shadow-sm hover:shadow-md ${themeColor === 'green' ? 'bg-[#00995D] hover:bg-[#00804e] disabled:bg-[#00995D]/60' : 'bg-[#00AECC] hover:bg-[#009cb7] disabled:bg-[#00AECC]/60'}`}
      >
        {isLoading ? (
          <>
            <span>PROCESSANDO...</span>
            <Loader2 className="w-4 h-4 animate-spin" />
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

    </form>
  );
}
