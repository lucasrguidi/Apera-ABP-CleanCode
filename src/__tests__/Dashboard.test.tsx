import { Dashboard } from '@screens/Dashboard';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard', () => {
  it('renderiza sem crashar', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>,
    );
  });
});
