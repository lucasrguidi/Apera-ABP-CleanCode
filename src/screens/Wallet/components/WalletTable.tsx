import { useMask } from '@hooks/useMask';
import { Table, TableContent } from '@ui/Table';
import * as S from '../styles';
import { IStocksWalletList } from '../types';

interface Props {
  stocks: IStocksWalletList[];
  onRowClick: (ticker: string) => void;
}

export const WalletTable = ({ stocks, onRowClick }: Props) => {
  const { formatBRL } = useMask();

  return (
    <Table
      colsHeader={[
        { label: 'Ativo' },
        { label: 'Quantidade' },
        { label: 'Preço médio' },
        { label: 'Preço atual' },
        { label: 'Valorização' },
        { label: 'Saldo' },
      ]}
    >
      {stocks.map((stock) => (
        <TableContent
          key={stock.id}
          colsBody={[
            {
              cell: (
                <S.StockCell onClick={() => onRowClick(stock.stock)}>
                  <img src={stock.stockLogoUrl} alt={stock.stock} />
                  <p className="p3">{stock.stock}</p>
                </S.StockCell>
              ),
              cssProps: { width: '150px' },
            },
            { cell: stock.amount },
            {
              cell: formatBRL(stock.averagePrice),
            },
            { cell: stock.currentPrice },
            {
              cell: stock.appreciation < 0 ? `${stock.appreciation}%` : `+${stock.appreciation}%`,
            },
            { cell: stock.balance },
          ]}
        />
      ))}
    </Table>
  );
};
