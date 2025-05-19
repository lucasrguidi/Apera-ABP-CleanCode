import { useContext, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';
import { IStocksWalletList } from '../types';
import { applyMask } from '../../../utils/functions';
import { BrApi } from '../../../services/brApi';
import { Api } from '../../../services/api';

export function useWallet() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState<IStocksWalletList[]>([]);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      // 1) Buscar carteiras do usuário
      const res = await Api.get<IStocksWalletList[]>('/wallet');
      const userStocks = res.data.filter((s) => s.userId === user?.id);

      if (!userStocks.length) {
        setStocks([]);
        return;
      }

      // 2) Atualizar preços via BR API
      const tickers = userStocks.map((s) => s.stock).join(',');
      const { data } = await BrApi.get<{ results: IStockData[] }>(`/quote/${tickers}?token=…`);

      // 3) Mapear array original para incluir price/balance/appreciation
      const updated = userStocks.map((s, idx) => {
        const e = data.results[idx];
        const currentPrice = applyMask({
          mask: 'BRL',
          value: String(e.regularMarketPrice * 100),
        }).value;
        const balance = applyMask({
          mask: 'BRL',
          value: String(e.regularMarketPrice * 100 * s.amount),
        }).value;
        const appreciation = Number((100 - s.averagePrice / e.regularMarketPrice).toFixed(2));
        return { ...s, currentPrice, balance, appreciation };
      });

      setStocks(updated);
    } catch {
      toast.error('Algo deu errado ao carregar sua carteira');
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { loading, stocks, refresh };
}
