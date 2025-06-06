import { theme } from '@styles/theme';
import styled from 'styled-components';

export const Background = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.size.sm} ${theme.size.md};
  background-color: ${theme.color.primary};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${theme.size.sm};

  input {
    height: 56px;
  }

  > h2 {
    margin-bottom: ${theme.size.sm};
    color: ${theme.color.primary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 364px;

  display: flex;
  flex-direction: column;
  margin-top: ${theme.size.xxxxlg};

  img {
    width: 130px;
  }

  button {
    margin-top: ${theme.size.xsm};
  }
`;
