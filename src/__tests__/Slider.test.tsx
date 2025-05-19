import { render } from '@testing-library/react';
import { Slider } from '@ui/Slider';

describe('Slider', () => {
  it('renderiza sem erros (placeholder)', () => {
    render(<Slider />);
  });
});
