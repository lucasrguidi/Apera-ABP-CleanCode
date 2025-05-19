import { IStocksWalletList } from '@screens/Wallet/types';
import { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from 'src/context/AuthContext';
import { useMask } from './useMask';
import { Api } from '@services/api';
import { BrApi } from '@services/brApi';

export function useWallet() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState<IStocksWalletList[]>([]);

  const { formatBRL } = useMask();

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
        const currentPrice = formatBRL(e.regularMarketPrice * 100);
        const balance = formatBRL(e.regularMarketPrice * 100 * s.amount);
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
