import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BrApi } from '../../../services/brApi';

export function useDashboard() {
  const { stockName } = useParams<{ stockName: string }>();
  const [loading, setLoading] = useState(true);
  const [stockData, setStockData] = useState<IStockData | null>(null);
  const [series, setSeries] = useState<number[][]>([]);
  const [stocksList, setStocksList] = useState<IStocks[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  const fetchStockData = async () => {
    setLoading(true);
    setSeries([]);
    try {
      const { data } = await BrApi.get(
        `/quote/${stockName}?range=3mo&interval=1d&fundamental=true&token=…`,
      );
      const result = data.results[0];
      setStockData(result);
      setLastUpdate(data.requestedAt);

      const hist = result.historicalDataPrice.map((h: IHistoricalDataPrice) => [
        h.date * 1000,
        h.close,
      ]);
      setSeries(hist);
    } catch {
      // silenciar: fallback de UI
    } finally {
      setLoading(false);
    }
  };

  const fetchStocksList = async () => {
    try {
      const { data } = await BrApi.get(`/quote/list?limit=20&token=…`);
      setStocksList(data.stocks.reverse());
    } catch {
      toast.error('Ops! Estamos com problemas!');
    }
  };

  useEffect(() => {
    fetchStocksList();
    fetchStockData();
  }, [stockName]);

  return { loading, stockData, series, stocksList, lastUpdate };
}
