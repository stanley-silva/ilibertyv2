declare module 'shaders/react' {
  import { FC } from 'react';
  export const Swirl: FC<{
    colorA?: string;
    colorB?: string;
    detail?: number;
    className?: string;
    children?: React.ReactNode;
  }>;
  export const ChromaFlow: FC<{
    baseColor?: string;
    downColor?: string;
    leftColor?: string;
    rightColor?: string;
    upColor?: string;
    momentum?: number;
    radius?: number;
    className?: string;
    children?: React.ReactNode;
  }>;
  export const FlutedGlass: FC<{
    aberration?: number;
    angle?: number;
    frequency?: number;
    highlight?: number;
    highlightSoftness?: number;
    lightAngle?: number;
    refraction?: number;
    shape?: string;
    softness?: number;
    speed?: number;
    className?: string;
    children?: React.ReactNode;
  }>;
  export const FilmGrain: FC<{
    strength?: number;
    className?: string;
  }>;
}
