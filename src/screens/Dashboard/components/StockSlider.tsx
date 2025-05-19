import { Slider } from '@ui/Slider';
import { StockCard } from '@ui/StockCard';

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
