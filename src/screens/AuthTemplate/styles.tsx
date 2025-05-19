import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const AppContent = styled.main`
  width: 100%;
  margin: 0 auto;

  max-width: 1196px;
  padding: ${theme.size.xlg} ${theme.size.md};

  @media (max-width: 900px) {
    padding: ${theme.size.sm};
  }
`;
