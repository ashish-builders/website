import { type Part } from '../types';

const formatToParts = (
  value: bigint | number | string,
  { format, locales }: { format?: Intl.NumberFormatOptions; locales?: Intl.LocalesArgument },
  prefix?: string,
  suffix?: string,
) => {
  const formatter = new Intl.NumberFormat(locales, format);
  const parts: { type: string; value: string }[] = formatter.formatToParts(Number(value));
  if (prefix) {
    parts.unshift({ type: 'prefix', value: prefix });
  }
  if (suffix) {
    parts.push({ type: 'suffix', value: suffix });
  }
  const pre: Part[] = [];
  // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
  const _integer: Part[] = []; // we do a second pass to key these from RTL
  const fraction: Part[] = [];
  const post: Part[] = [];
  const counts: Record<string, number> = {};
  const generateKey = (type: string) => {
    const key = `${type}:${(counts[type] = (counts[type] ?? -1) + 1)}`;
    return key;
  };
  let formatted = '';
  let seenInteger = false;
  let seenDecimal = false;
  for (const part of parts) {
    formatted += part.value;
    // Merge plus and minus sign types (doing it this way appeases TypeScript)
    const type = part.type === 'minusSign' || part.type === 'plusSign' ? 'sign' : part.type;
    switch (type) {
      case 'integer':
        seenInteger = true;
        _integer.push(
          ...part.value
            .split('')
            .map((d) => ({ key: generateKey(type), type, value: parseInt(d, 10) })),
        );
        break;
      case 'group':
        _integer.push({ key: generateKey(type), type, value: part.value });
        break;
      case 'decimal':
        seenDecimal = true;
        fraction.push({
          key: generateKey(type),
          type,
          value: part.value,
        });
        break;
      case 'fraction':
        fraction.push(
          ...part.value.split('').map((d) => ({
            key: generateKey(type),
            type,
            value: parseInt(d, 10),
          })),
        );
        break;
      default:
        (seenInteger || seenDecimal ? post : pre).push({
          key: generateKey(type),
          type,
          value: part.value,
        });
    }
  }
  const integer: Part[] = [];
  // Key the integer parts RTL, for better layout animations
  for (let i = _integer.length - 1; i >= 0; i -= 1) {
    integer.unshift({
      ..._integer[i],
      key: generateKey(_integer[i].type),
    });
  }
  return { formatted, fraction, integer, post, pre };
};

export { formatToParts };
