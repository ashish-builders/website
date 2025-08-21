import { oklch, formatHex } from 'culori';

export default function oklchToHex(value: string): string | undefined {
  let color = value.trim();
  color = color.startsWith('oklch(') ? color : `oklch(${color})`;
  return formatHex(oklch(color));
}
