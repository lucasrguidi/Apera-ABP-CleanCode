import { render, screen } from '@testing-library/react';
import StockCard from '@ui/StockCard';
import { MemoryRouter } from 'react-router-dom';

describe('StockCard', () => {
  it('mostra símbolo, nome e valor corretamente', () => {
    render(
      <MemoryRouter>
        <StockCard symbol="AAPL" name="Apple Inc." value={150.25} />
      </MemoryRouter>,
    );

    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('Apple Inc.')).toBeInTheDocument();
    expect(screen.getByText(/150,25/)).toBeInTheDocument();
  });
});
