import { theme } from '@styles/theme';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface Props {
  series: { name: string; data: number[][] }[];
}

export const StockChart = ({ series }: Props) => {
  const options: ApexOptions = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      foreColor: theme.color.gray1,
      zoom: { autoScaleYaxis: true },
      toolbar: { tools: { download: false } },
    },
    colors: [theme.color.infos70],
    grid: { show: false },
    dataLabels: { enabled: false },
    markers: { size: 0 },
    yaxis: {
      labels: {
        formatter: (v) => `R$${v.toFixed(2)}`,
      },
    },
    xaxis: { type: 'datetime' },
    tooltip: {
      theme: 'dark',
      x: { format: 'dd MMM yyyy' },
      y: { formatter: (v) => `R$${v.toFixed(2)}` },
    },
    fill: { type: 'solid', colors: [theme.color.infos50] },
  };

  return <ReactApexChart options={options} series={series} type="area" height={350} />;
};
