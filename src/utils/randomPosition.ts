import type { DecorationPosition } from '../types';

export function generateRandomPositions(count: number): DecorationPosition[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `decoration-${index}`,
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
    rotation: Math.random() * 360 - 180,
    opacity: Math.random() * 0.15 + 0.05,
    scale: Math.random() * 0.5 + 0.8,
  }));
}
