import { icons } from '../../../assets/icons';
import { IconButton } from '../../../components/Buttons/IconButton';
import { theme } from '../../../styles/theme';

import * as S from '../styles';

interface Props {
  onAdd: () => void;
}

export const WalletEmpty = ({ onAdd }: Props) => (
  <>
    <IconButton
      label="Adicionar ativo"
      icon={icons.plus}
      onClick={onAdd}
      className="p3"
      color={theme.color.success}
    />
    <S.NoResultsContainer>
      <img src={icons.finance} alt="" />
      <h5>Sua carteira está vazia!</h5>
      <p className="p2">Adicione um ativo para visualizar.</p>
    </S.NoResultsContainer>
  </>
);
