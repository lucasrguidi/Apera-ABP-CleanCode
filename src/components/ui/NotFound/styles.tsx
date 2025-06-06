import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const ContainerNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.size.md};

  h2 {
    color: ${theme.color.success};
  }

  h6 {
    max-width: 556px;
  }
`;
