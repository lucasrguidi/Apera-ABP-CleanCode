import { formatCurrencyBRL, numericScaleIdentifier } from '@utils/functions';
import * as S from '../styles';
import { icons } from 'src/assets/icons';

interface Props {
  data: IStockData;
}

export const StockValues = ({ data }: Props) => (
  <S.StockValuesContainer>
    {[
      { label: 'Preço', value: formatCurrencyBRL(data.regularMarketPrice) },
      {
        label: 'Variação (dia)',
        value: `${formatCurrencyBRL(
          data.regularMarketChange,
        )} (${data.regularMarketChangePercent.toFixed(2)}%)`,
        icon: data.regularMarketChange < 0 ? icons.downValue : icons.upValue,
      },
      { label: 'Min. 52 semanas', value: formatCurrencyBRL(data.fiftyTwoWeekLow) },
      { label: 'Máx. 52 semanas', value: formatCurrencyBRL(data.fiftyTwoWeekHigh) },
      { label: 'Capitalização de mercado', value: numericScaleIdentifier(data.marketCap) },
    ].map(({ label, value, icon }, i) => (
      <S.StockValuesContent key={i}>
        <p className="p2">{label}</p>
        {icon ? (
          <div>
            <h3>{value}</h3>
            <img src={icon} alt="" />
          </div>
        ) : (
          <h3>{value}</h3>
        )}
      </S.StockValuesContent>
    ))}
  </S.StockValuesContainer>
);
