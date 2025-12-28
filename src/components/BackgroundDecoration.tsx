interface BackgroundDecorationProps {
  top: string;
  left: string;
  text: string;
  className?: string;
}

export function BackgroundDecoration({ top, left, text, className = '' }: BackgroundDecorationProps) {
  return (
    <div
      className={`absolute text-4xl font-bold text-white pointer-events-none select-none transition-opacity duration-500 bg-white/25 px-4 py-2 rounded-lg backdrop-blur-sm whitespace-nowrap overflow-hidden text-ellipsis ${className}`}
      style={{ top, left }}
    >
      {text}
    </div>
  );
}
