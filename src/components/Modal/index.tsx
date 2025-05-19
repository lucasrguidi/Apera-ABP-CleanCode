// UI
import * as Style from './styles';
// ICONS
import { icons } from '../../assets/icons';

// TYPES
import { IModal } from './types';
import { theme } from '../../styles/theme';
import { IconButton } from '../Buttons/IconButton';
import { MouseEvent } from 'react';

export const Modal = ({ children, setModal, title }: IModal) => (
  <Style.Background
    id="background"
    onMouseDown={(evt: MouseEvent<HTMLDivElement>) => {
      if (evt.target === evt.currentTarget) {
        setModal(false);
      }
    }}
  >
    <Style.Body>
      <Style.Header>
        <h6>{title}</h6>
        <IconButton
          icon={icons.x}
          color={theme.color.primary}
          onClick={() => {
            setModal(false);
          }}
        />
      </Style.Header>
      {children}
    </Style.Body>
  </Style.Background>
);
