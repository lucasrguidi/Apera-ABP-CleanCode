import { render, screen } from '@testing-library/react';
import { Table, TableContent } from '@ui/Table';

describe('Table & TableContent', () => {
  it('renderiza cabeçalho e linhas corretamente', () => {
    render(
      <Table colsHeader={[{ label: 'Col1' }, { label: 'Col2' }]}>
        <TableContent colsBody={[{ cell: 'Linha1-Col1' }, { cell: 'Linha1-Col2' }]} />
      </Table>,
    );
    expect(screen.getByText('Col1')).toBeInTheDocument();
    expect(screen.getByText('Col2')).toBeInTheDocument();
    expect(screen.getByText('Linha1-Col1')).toBeInTheDocument();
    expect(screen.getByText('Linha1-Col2')).toBeInTheDocument();
  });
});
