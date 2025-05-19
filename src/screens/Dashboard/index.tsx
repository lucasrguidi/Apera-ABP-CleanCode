import { useDashboard } from '@hooks/useDashboard';
import { LoadingOverlay } from './components/LoadingOverlay';
import { StockChart } from './components/StockChart';
import { StockDetails } from './components/StockDetails';
import { StockSlider } from './components/StockSlider';
import { StockValues } from './components/StockValues';
import { NotFound } from '@ui/NotFound';

export const Dashboard = () => {
  const { loading, stockData, series, stocksList, lastUpdate } = useDashboard();

  if (loading) return <LoadingOverlay />;

  if (!stockData) {
    return (
      <NotFound
        title="Ação não encontrada"
        subtitle="A ação que você requisitou não existe ou ocorreu algum erro"
      />
    );
  }

  return (
    <>
      <StockDetails data={stockData} lastUpdate={lastUpdate} />
      <StockValues data={stockData} />
      <StockChart series={[{ name: 'Valor', data: series }]} />
      <StockSlider list={stocksList} />
    </>
  );
};
