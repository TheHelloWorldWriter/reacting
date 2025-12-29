/**
 * Copyright (c) 2025 The Hello World Writer
 * https://www.thehelloworldwriter.com/
 * Licensed under the MIT License
 */

/** Props for the SvgIcon component */
interface SvgIconProps {
  /** The icon name from the sprite (e.g., "shuffle") */
  name: string;
  /** Additional CSS classes */
  className?: string;
  /** Icon size in pixels */
  size?: number;
}

/**
 * Renders an icon from the SVG sprite file.
 * Uses the <use> element to reference symbols defined in /public/icons.svg.
 */
export function SvgIcon({ name, className = '', size = 24 }: SvgIconProps) {
  return (
    <svg className={className} width={size} height={size} aria-hidden="true">
      <use href={`/icons.svg#icon-${name}`} />
    </svg>
  );
}
