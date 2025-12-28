interface BackgroundDecorationProps {
  top: string;
  left: string;
  text: string;
  className?: string;
}

export function BackgroundDecoration({ top, left, text, className = '' }: BackgroundDecorationProps) {
  return (
    <div
      className={`pointer-events-none absolute z-0 truncate rounded-lg bg-white/5 px-4 py-2 text-4xl font-bold text-white/10 backdrop-blur-sm transition-all duration-500 select-none ${className}`}
      style={{ top, left }}
    >
      {text}
    </div>
  );
}
