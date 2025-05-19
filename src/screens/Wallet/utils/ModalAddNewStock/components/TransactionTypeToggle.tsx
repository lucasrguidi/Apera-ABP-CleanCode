import { theme } from '@styles/theme';
import * as S from '../styles';

interface Props {
  type: 'buy' | 'sale';
  onChange: (type: 'buy' | 'sale') => void;
}

export const TransactionTypeToggle = ({ type, onChange }: Props) => (
  <S.TransactionTypesContainer>
    {(['buy', 'sale'] as const).map((t) => (
      <S.TransactionTypeButton
        key={t}
        $isSelected={type === t}
        $type={t}
        onClick={() => onChange(t)}
      >
        <p className="p3">{t === 'buy' ? 'Compra' : 'Venda'}</p>
        {/* SVGs podem virar ícone separado */}
        <svg width="24" height="24" fill={theme.color.light25}>
          {/* paths diferentes para buy/sale */}
        </svg>
      </S.TransactionTypeButton>
    ))}
  </S.TransactionTypesContainer>
);
