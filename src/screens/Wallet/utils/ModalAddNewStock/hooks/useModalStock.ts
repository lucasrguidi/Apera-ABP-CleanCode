import { useContext, useState, useCallback } from 'react';
import { IStocksWalletList } from '../../../types';
import { AuthContext } from '../../../../../context/AuthContext';
import { BrApi } from '../../../../../services/brApi';
import { toast } from 'react-toastify';
import { Api } from '../../../../../services/api';

export function useModalStock(_existingList: IStocksWalletList[], onSuccess: () => void) {
  const { user } = useContext(AuthContext);
  const [onQuery, setOnQuery] = useState(false);
  const [stocksList, setStocksList] = useState<IStocks[]>([]);

  const requestStocks = useCallback(
    async (search?: string): Promise<{ value: string; label: string; icon: string }[]> => {
      const options: { value: string; label: string; icon: string }[] = [];
      try {
        const response = await BrApi.get<{ stocks: IStocks[] }>(
          `/quote/list?token=…&search=${search || ''}&limit=10`,
        );
        const stocks = response.data.stocks;
        setStocksList(stocks);
        stocks.forEach(({ stock, logo }) => {
          options.push({ label: stock, value: stock, icon: logo });
        });
      } catch {
        toast.error('Falha ao buscar ações');
      }
      return options;
    },
    [],
  );

  const addStock = useCallback(
    async (values: { stock: string; amount: number; value: number }) => {
      setOnQuery(true);
      try {
        await Api.post('/wallet', {
          stock: values.stock,
          stockLogoUrl: stocksList.find((s) => s.stock === values.stock)?.logo || '',
          amount: values.amount,
          averagePrice: values.value,
          userId: user?.id,
        });
        toast.success('Ativo adicionado com sucesso!');
        onSuccess();
      } catch {
        toast.error('Erro ao adicionar ativo');
      } finally {
        setOnQuery(false);
      }
    },
    [stocksList, user?.id, onSuccess],
  );

  const editStock = useCallback(
    async (
      values: { amount: number; value: number },
      type: 'buy' | 'sale',
      existing: IStocksWalletList,
    ) => {
      setOnQuery(true);
      try {
        // validações
        if (type === 'sale' && existing.amount <= values.amount) {
          toast.info('Quantidade inválida para venda');
          return;
        }
        // cálculo
        const totalQty =
          type === 'buy' ? existing.amount + values.amount : existing.amount - values.amount;
        const newAvg =
          type === 'buy'
            ? (existing.averagePrice * existing.amount + values.value * values.amount) / totalQty
            : (existing.averagePrice * existing.amount - values.value * values.amount) / totalQty;

        await Api.put(`/wallet/${existing.id}`, {
          amount: totalQty,
          averagePrice: Math.round(newAvg),
        });
        toast.success('Ativo atualizado com sucesso!');
        onSuccess();
      } catch {
        toast.error('Erro ao atualizar ativo');
      } finally {
        setOnQuery(false);
      }
    },
    [onSuccess],
  );

  return {
    onQuery,
    stocksList,
    requestStocks,
    addStock,
    editStock,
    setOnQuery,
  };
}
