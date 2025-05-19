import { BrApi } from '@services/brApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from 'src/assets/icons';
import { IconButton } from '../Buttons/IconButton';
import ReactAsyncSelect from '../ReactAsyncSelect';
import * as Style from './styles';

export const Search = ({ iconPosition = 'right' }: ISearch) => {
  const navigate = useNavigate();
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  async function requestStocks(search?: string) {
    const options: { value: string; label: string; icon: string }[] = [];
    await BrApi.get(`/quote/list?search=${search}&limit=10&token=hXAyiiQ3NhNz1Kp1ciC6pu`).then(
      ({ data }) => {
        data.stocks.forEach(({ stock, logo }: IStocks) => {
          options.push({ label: stock, value: stock, icon: logo });
        });
      },
    );
    return options;
  }

  return (
    <Style.SearchContainer $iconPosition={iconPosition}>
      {isOpenSearch && (
        <ReactAsyncSelect
          loadOptions={requestStocks}
          style={Style.selectStyles}
          onChange={(evt) => navigate(`/dashboard/${evt.value}`)}
        />
      )}

      <IconButton icon={icons.search} onClick={() => setIsOpenSearch(!isOpenSearch)} />
    </Style.SearchContainer>
  );
};
