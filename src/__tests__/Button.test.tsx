import { render, screen } from '@testing-library/react';
import { Button } from '@ui/Buttons/Button';

describe('Button', () => {
  it('renderiza com o texto correto', () => {
    render(<Button label="Confirmar" />);
    expect(screen.getByRole('button', { name: /confirmar/i })).toBeInTheDocument();
  });
});
