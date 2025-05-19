import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const SliderContainer = styled.div`
  .slider {
    cursor: grab;
    overflow: hidden;
    padding: 8px 8px;
  }

  .sliderContent {
    display: flex;
    gap: ${theme.size.sm};
  }
`;
