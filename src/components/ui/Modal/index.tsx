// UI
import { IconButton } from '@ui/Buttons/IconButton';
import * as Style from './styles';
// ICONS

// TYPES
import { IModal } from './types';
import { MouseEvent } from 'react';
import { icons } from 'src/assets/icons';
import { theme } from '@styles/theme';

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
