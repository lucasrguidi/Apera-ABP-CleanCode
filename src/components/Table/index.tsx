import { CSSProperties, ReactNode } from 'react';
import { theme } from '../../styles/theme';
import * as Style from './styles';
import { ITableBody, ITableHeader } from './types';

export const Table = ({ colsHeader, children }: ITableHeader) => (
  <Style.Background>
    <Style.TableContainer>
      <Style.TableHead>
        <Style.TableRowHead>
          {colsHeader.map((col) => (
            <Style.TableColHeader
              key={col.label}
              $cssProps={col.cssProps ?? ({} as CSSProperties)}
              $cssOnMedia={col.cssOnMedia ?? ({} as CSSProperties)}
            >
              {col.label}
            </Style.TableColHeader>
          ))}
        </Style.TableRowHead>
      </Style.TableHead>
      <Style.TableBody>{children}</Style.TableBody>
    </Style.TableContainer>
  </Style.Background>
);

export const TableContent = ({ colsBody, onClick }: ITableBody) => (
  <Style.TableRow $bgColor={theme.color.dark25} $hasOnClick={!!onClick} onClick={() => onClick?.()}>
    {colsBody.map((col, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Style.TableColBody
        key={`${i}-${String(col.cell ?? '')}`}
        $cssProps={col.cssProps ?? ({} as CSSProperties)}
        $cssOnMedia={col.cssOnMedia ?? ({} as CSSProperties)}
      >
        {col.cell as ReactNode}
      </Style.TableColBody>
    ))}
  </Style.TableRow>
);
