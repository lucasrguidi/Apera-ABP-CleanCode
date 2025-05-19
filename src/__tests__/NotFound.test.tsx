import { render, screen } from '@testing-library/react';
import { NotFound } from '@ui/NotFound';
import { MemoryRouter } from 'react-router-dom';

describe('NotFound', () => {
  it('exibe título e subtítulo corretamente', () => {
    render(
      <MemoryRouter>
        <NotFound title="Página não encontrada" subtitle="A página que você procura não existe." />
      </MemoryRouter>,
    );
    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(screen.getByText('A página que você procura não existe.')).toBeInTheDocument();
  });
});
