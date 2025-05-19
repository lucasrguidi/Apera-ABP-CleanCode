/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

export interface ITableHeader {
  colsHeader: {
    label: string;
    cssProps?: CSSProperties;
    cssOnMedia?: CSSProperties;
  }[];
  children: ReactElement[] | ReactElement;
}

export interface ITableBody {
  colsBody: {
    cell: ReactNode;
    cssProps?: CSSProperties;
    cssOnMedia?: CSSProperties;
  }[];

  onClick?: () => void;
}
