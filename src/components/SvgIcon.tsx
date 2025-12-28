interface SvgIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function SvgIcon({ name, className = '', size = 24 }: SvgIconProps) {
  return (
    <svg className={className} width={size} height={size} aria-hidden="true">
      <use href={`/icons.svg#icon-${name}`} />
    </svg>
  );
}
