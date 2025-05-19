/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import { CSSProperties } from 'react';
import { theme } from '../../styles/theme';

export const Background = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 ${theme.size.xxsm};
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRowHead = styled.tr<{ $bgColor?: string }>`
  height: 32px;
  vertical-align: top;
`;

export const TableRow = styled.tr<{ $bgColor?: string; $hasOnClick: boolean }>`
  ${({ $bgColor }) =>
    $bgColor &&
    css`
      background-color: ${$bgColor};
    `}

  ${({ $hasOnClick }) =>
    $hasOnClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const TableColHeader = styled.th<{
  $cssProps?: CSSProperties;
  $cssOnMedia?: CSSProperties;
}>`
  color: ${theme.color.gray4};
  text-align: center;
  white-space: nowrap;

  ${({ $cssProps }) =>
    $cssProps &&
    css`
      ${Object.entries($cssProps)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n')}
    `}

  @media (max-width: 900px) {
    ${({ $cssOnMedia }) =>
      $cssOnMedia &&
      css`
        ${Object.entries($cssOnMedia)
          .map(([key, value]) => `${key}: ${value};`)
          .join('\n')}
      `}
  }
`;

export const TableColBody = styled.td<{
  textAlign?: string;
  $cssProps?: CSSProperties;
  $cssOnMedia?: CSSProperties;
}>`
  height: ${theme.size.xxlg};
  text-align: center;
  padding-inline: ${theme.size.sm};
  white-space: nowrap;

  &:first-of-type {
    border-radius: ${theme.size.xxsm} 0 0 ${theme.size.xxsm};
    padding-left: ${theme.size.sm};
  }

  &:last-of-type {
    border-radius: 0 ${theme.size.xxsm} ${theme.size.xxsm} 0;
    min-width: 0;
    padding-right: ${theme.size.sm};
  }

  ${({ $cssProps }) =>
    $cssProps &&
    css`
      ${Object.entries($cssProps)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n')}
    `}

  @media (max-width: 900px) {
    min-width: 150px;
    ${({ $cssOnMedia }) =>
      $cssOnMedia &&
      css`
        ${Object.entries($cssOnMedia)
          .map(([key, value]) => `${key}: ${value};`)
          .join('\n')}
      `}
    :first-of-type {
      min-width: 0;
    }
  }
`;
