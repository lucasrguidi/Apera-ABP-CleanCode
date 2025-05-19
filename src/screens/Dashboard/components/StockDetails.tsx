import * as S from '../styles';

interface Props {
  data: IStockData;
  lastUpdate: string;
}

export const StockDetails = ({ data, lastUpdate }: Props) => (
  <S.StockDetailsContainer>
    <S.StockDetailsLeftSide>
      <img src={data.logourl} alt={data.symbol} />
      <div>
        <h4>{data.symbol}</h4>
        <p className="p2">{data.longName}</p>
      </div>
    </S.StockDetailsLeftSide>

    <S.StockDetailsRightSide>
      <p className="p3">Última atualização</p>
      <div>
        <p className="p2">{new Date(lastUpdate).toLocaleDateString('pt-br')}</p>
      </div>
    </S.StockDetailsRightSide>
  </S.StockDetailsContainer>
);
