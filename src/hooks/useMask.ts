import { applyMask as applyMaskUtil, unMask as unMaskUtil } from '../utils/functions';

export function useMask() {
  /** Formata número ou string para moeda BRL */
  const formatBRL = (value: number | string): string =>
    applyMaskUtil({ mask: 'BRL', value: String(value) }).value;

  /** Formata número ou string para numérico puro (somente dígitos) */
  const formatNUM = (value: number | string): string =>
    applyMaskUtil({ mask: 'NUM', value: String(value) }).value;

  /** Remove máscara de uma string */
  const unmask = (value: string): string => unMaskUtil(value);

  return { formatBRL, formatNUM, unmask };
}
