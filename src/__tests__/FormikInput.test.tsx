import { render, screen } from '@testing-library/react';
import { FormikInput } from '@ui/Form/FormikInput';
import { Formik } from 'formik';

describe('FormikInput', () => {
  it('renderiza com label e mostra erro', () => {
    render(
      <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
        {() => (
          <FormikInput
            name="name"
            label="Nome"
            value=""
            error="Campo obrigatório"
            onChange={() => {}}
          />
        )}
      </Formik>,
    );
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });
});
