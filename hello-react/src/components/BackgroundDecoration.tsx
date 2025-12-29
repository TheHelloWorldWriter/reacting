/**
 * Copyright (c) 2025 The Hello World Writer
 * https://www.thehelloworldwriter.com/
 * Licensed under the MIT License
 */

/** Props for the BackgroundDecoration component */
interface BackgroundDecorationProps {
  /** Vertical position as percentage (e.g., "10%") */
  top: string;
  /** Horizontal position as percentage (e.g., "5%") */
  left: string;
  /** The text to display */
  text: string;
  /** Additional CSS classes for responsive visibility */
  className?: string;
}

/**
 * Displays a subtle, semi-transparent text decoration in the background.
 * Used to create a decorative pattern behind the main dialog.
 */
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
