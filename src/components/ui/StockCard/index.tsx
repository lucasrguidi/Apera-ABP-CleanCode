import { formatCurrencyBRL } from '@utils/functions';
import { useNavigate } from 'react-router-dom';
import * as Style from './styles';

interface StockCardProps {
  symbol: string;
  name: string;
  value: number;
}

export default function StockCard({ symbol, name, value }: StockCardProps) {
  const navigate = useNavigate();
  const stockInfos = { stock: symbol, name, close: value };

  return (
    <Style.StockContainer onClick={() => navigate(`/stocks/${symbol}`)}>
      <Style.LeftSide>
        <h4>{stockInfos.stock}</h4>
        <p className="p3">{stockInfos.name}</p>
        <p className="p3">{formatCurrencyBRL(stockInfos.close)}</p>
      </Style.LeftSide>
      {/* resto do layout */}
    </Style.StockContainer>
  );
}
