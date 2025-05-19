import { IconButton } from '@ui/Buttons/IconButton';
import * as S from '../styles';
import { icons } from 'src/assets/icons';
import { theme } from '@styles/theme';

interface Props {
  onAdd: () => void;
  onView: () => void;
}

export const WalletActions = ({ onAdd, onView }: Props) => (
  <S.ButtonsContainer>
    <IconButton
      label="Ver lançamentos"
      icon={icons.scroll}
      onClick={onView}
      className="p3"
      size="8px"
      color={theme.color.white}
    />
    <IconButton
      label="Adicionar ativo"
      icon={icons.plus}
      onClick={onAdd}
      className="p3"
      color={theme.color.success}
    />
  </S.ButtonsContainer>
);
