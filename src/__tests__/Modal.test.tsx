import { render, screen } from '@testing-library/react';
import { Modal } from '@ui/Modal';

describe('Modal', () => {
  it('renderiza com título e children', () => {
    render(
      <Modal title="Modal Teste" setModal={() => {}}>
        <div>Conteúdo</div>
      </Modal>,
    );
    expect(screen.getByText('Modal Teste')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo')).toBeInTheDocument();
  });
});
