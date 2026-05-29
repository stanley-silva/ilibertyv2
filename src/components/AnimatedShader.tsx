import React, { ErrorInfo } from 'react';
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';

interface AnimatedShaderProps {
  accentColor?: string; // '#00AECC' ou '#2575FC'
}

class ShaderErrorBoundary extends React.Component<any, any> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Shader wrapper rendering failed, falling back to clean CSS mesh gradient:', error, errorInfo);
  }

  render() {
    const self = this as any;
    if (self.state.hasError) {
      return self.props.fallback;
    }
    return self.props.children;
  }
}

export default function AnimatedShader({ accentColor = '#00AECC' }: AnimatedShaderProps) {
  const isLaboratorios = accentColor === '#2575FC';
  
  // Gradiente fluido baseado em CSS que serve como fallback animado de alta fidelidade
  const fallback = (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none bg-[#F2F4F8]">
      <div 
        className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full blur-[120px] opacity-35 mix-blend-multiply animate-pulse"
        style={{ 
          background: isLaboratorios 
            ? 'radial-gradient(circle, #2575FC 0%, rgba(37,117,252,0) 70%)' 
            : 'radial-gradient(circle, #00AECC 0%, rgba(0,174,204,0) 70%)',
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[100px] opacity-25 mix-blend-screen animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0) 70%)',
          animationDuration: '12s',
          animationDelay: '2s'
        }}
      />
      {/* Efeito de ruído de filme estilizado via CSS */}
      <div className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );

  return (
    <ShaderErrorBoundary fallback={fallback}>
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none bg-[#F2F4F8]">
        {/* Elemento ChromaFlow */}
        <ChromaFlow
          baseColor="#ffffff"
          downColor={accentColor}
          leftColor={accentColor === '#00AECC' ? '#e8f8fc' : '#ebf3ff'}
          rightColor={accentColor}
          upColor={accentColor === '#00AECC' ? '#00AECC' : '#2575FC'}
          momentum={13}
          radius={3.5}
          className="w-full h-full absolute inset-0 opacity-45"
        >
          {/* Efeito Swirl sobreposto */}
          <Swirl
            colorA="#ffffff"
            colorB={accentColor === '#00AECC' ? '#e8f8fc' : '#ebf3ff'}
            detail={1.7}
            className="w-full h-full absolute inset-0 mix-blend-multiply opacity-60"
          />
          {/* Camada de refração de vidro */}
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
            className="w-full h-full absolute inset-0 opacity-75"
          />
          {/* Efeito de granulado de filme */}
          <FilmGrain strength={0.05} className="w-full h-full absolute inset-0 mix-blend-overlay opacity-30" />
        </ChromaFlow>
      </div>
    </ShaderErrorBoundary>
  );
}
