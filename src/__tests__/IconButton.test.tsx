import { render, screen } from '@testing-library/react';
import { IconButton } from '@ui/Buttons/IconButton';

describe('IconButton', () => {
  it('renderiza com o texto correto', () => {
    render(<IconButton label="Adicionar" icon="/icon.png" onClick={() => {}} />);
    expect(screen.getByText(/adicionar/i)).toBeInTheDocument();
  });
});
