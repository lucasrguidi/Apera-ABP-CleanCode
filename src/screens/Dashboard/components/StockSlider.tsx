import { Slider } from '../../../components/Slider';
import { StockCard } from '../../../components/StockCard';

interface Props {
  list: IStocks[];
}

export const StockSlider = ({ list }: Props) => (
  <Slider>
    {list.map((item) => (
      <StockCard stockInfos={item} key={item.stock} />
    ))}
  </Slider>
);
