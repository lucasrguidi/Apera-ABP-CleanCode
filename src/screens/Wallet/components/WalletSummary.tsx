import { useMask } from '@hooks/useMask';
import * as S from '../styles';
import { IStocksWalletList } from '../types';
import { icons } from 'src/assets/icons';

interface Props {
  stocks: IStocksWalletList[];
}

export const WalletSummary = ({ stocks }: Props) => {
  const { formatBRL } = useMask();
  // calcula valor aplicado (preço médio × quantidade)
  const appliedNum = stocks.reduce((acc, s) => acc + s.averagePrice * s.amount, 0);
  const applied = formatBRL(appliedNum * 100);

  // soma de saldo (usando balance já formatado)
  const balanceSum = stocks.reduce((acc, s) => {
    // remove "R$ " e pontos para parse
    const numeric = Number(s.balance.replace(/[R$\s.]/g, '').replace(',', '.'));
    return acc + numeric;
  }, 0);
  const saldo = formatBRL(balanceSum);

  // variação média
  const variation = (stocks.reduce((acc, s) => acc + s.appreciation, 0) / stocks.length).toFixed(2);

  return (
    <S.WalletInfosContainer>
      <S.WalletInfosWrapper>
        <img src={icons.piggyBank} alt="" />
        <h6>Valor aplicado</h6>
        <p className="p5">{applied}</p>
      </S.WalletInfosWrapper>

      <S.WalletInfosWrapper>
        <img src={icons.circleDollar} alt="" />
        <h6>Saldo bruto</h6>
        <p className="p5">{saldo}</p>
      </S.WalletInfosWrapper>

      <S.WalletInfosWrapper>
        <img src={icons.percent} alt="" />
        <h6>Variação</h6>
        <S.VariationValueContainer className="p5" $variation={Number(variation)}>
          {variation.startsWith('-') ? variation : `+ ${variation}`}%
        </S.VariationValueContainer>
      </S.WalletInfosWrapper>

      <S.WalletInfosWrapper>
        <img src={icons.wallet} alt="" />
        <h6>Carteiras</h6>
        <p className="p5">Carteira 1</p>
      </S.WalletInfosWrapper>
    </S.WalletInfosContainer>
  );
};
