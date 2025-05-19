import { render, screen } from '@testing-library/react';
import { Sidebar } from '@ui/Sidebar';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar', () => {
  it('contém elemento de navegação', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
