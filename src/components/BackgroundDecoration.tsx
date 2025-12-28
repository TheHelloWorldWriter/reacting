import type { DecorationPosition } from '../types';

interface BackgroundDecorationProps {
  position: DecorationPosition;
  text: string;
}

export function BackgroundDecoration({ position, text }: BackgroundDecorationProps) {
  return (
    <div
      className="absolute text-4xl font-bold text-white pointer-events-none select-none transition-opacity duration-500"
      style={{
        top: position.top,
        left: position.left,
        transform: `rotate(${position.rotation}deg) scale(${position.scale})`,
        opacity: position.opacity,
      }}
    >
      {text}
    </div>
  );
}
