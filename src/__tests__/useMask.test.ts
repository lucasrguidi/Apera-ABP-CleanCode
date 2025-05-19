import { useMask } from '@hooks/useMask';
import { renderHook } from '@testing-library/react';

describe('useMask', () => {
  it('formata BRL corretamente', () => {
    const { result } = renderHook(() => useMask());
    expect(result.current.formatBRL(1234.56)).toBe('R$ 1.234,56');
  });

  it('formata NUM corretamente', () => {
    const { result } = renderHook(() => useMask());
    expect(result.current.formatNUM('1.234,56')).toBe('123456');
  });

  it('remove máscara corretamente', () => {
    const { result } = renderHook(() => useMask());
    expect(result.current.unmask('R$ 1.234,56')).toBe('123456');
  });
});
