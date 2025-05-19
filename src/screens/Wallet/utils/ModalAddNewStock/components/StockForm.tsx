import { Form, Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { theme } from '../../../../../styles/theme';
import { applyMask, dateToISOString, unMask } from '../../../../../utils/functions';
import { IStocksWalletList } from '../../../types';
import * as S from '../styles';
import { useMask } from '@hooks/useMask';
import ReactAsyncSelect from '@ui/ReactAsyncSelect';
import { FormikInput } from '@ui/Form/FormikInput';
import { Button } from '@ui/Buttons/Button';
import { useModalStock } from '@hooks/useModalStock';

const schema = yup.object({
  stock: yup.string().required('Selecione uma ação.'),
  buyDate: yup.string().required('Data é obrigatória.'),
  amount: yup.string().required('Quantidade é obrigatória.'),
  value: yup.string().required('Valor é obrigatório.'),
  otherCosts: yup.string(),
});

interface Props {
  type: 'buy' | 'sale';
  existingList: IStocksWalletList[];
  onSuccess: () => void;
}

export const StockForm = ({ type, existingList, onSuccess }: Props) => {
  const { onQuery, stocksList, requestStocks, addStock, editStock } = useModalStock(
    existingList,
    onSuccess,
  );

  const { formatBRL, formatNUM } = useMask();

  const handleSubmit = async (
    data: {
      stock: string;
      buyDate: string;
      amount: string;
      value: string;
      otherCosts: string;
    },
    formik: FormikHelpers<any>,
  ) => {
    const parsed = {
      stock: data.stock,
      amount: Number(data.amount),
      value: Number(unMask(data.value)),
    };
    const existing = existingList.find((s) => s.stock === data.stock);
    if (existing) {
      await editStock(parsed, type, existing);
    } else {
      await addStock(parsed);
    }
    formik.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        stock: '',
        amount: '',
        buyDate: dateToISOString(new Date()),
        otherCosts: '',
        value: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form>
          <ReactAsyncSelect
            label="Ativo"
            name="stock"
            loadOptions={requestStocks}
            error={touched.stock && errors.stock ? errors.stock : undefined}
            onChange={(evt) => {
              const found = stocksList.find((s) => s.stock === evt.value);
              setFieldValue('value', formatBRL(found?.close || 0));
              setFieldValue('stock', evt.value);
            }}
          />

          <S.InputsWrapper>
            <FormikInput
              name="buyDate"
              label={type === 'buy' ? 'Data da compra' : 'Data da venda'}
              type="date"
              error={touched.buyDate && errors.buyDate ? errors.buyDate : undefined}
            />
            <FormikInput
              name="amount"
              label="Quantidade"
              maxLength={5}
              error={touched.amount && errors.amount ? errors.amount : undefined}
              onChange={(e) => setFieldValue('amount', formatNUM(e.target.value))}
            />
          </S.InputsWrapper>

          <S.InputsWrapper>
            <FormikInput
              name="value"
              label="Preço R$"
              maxLength={15}
              error={touched.value && errors.value ? errors.value : undefined}
              onChange={(e) => setFieldValue('value', formatBRL(e.target.value))}
            />
            <FormikInput
              name="otherCosts"
              label="Outros custos"
              maxLength={15}
              error={touched.otherCosts && errors.otherCosts ? errors.otherCosts : undefined}
              onChange={(e) => setFieldValue('otherCosts', formatBRL(e.target.value))}
            />
          </S.InputsWrapper>

          <S.TotalValueContainer className="p5">
            Valor total:{' '}
            {
              applyMask({
                mask: 'BRL',
                value: String(
                  Number(values.amount) * Number(unMask(values.value)) +
                    Number(unMask(values.otherCosts)),
                ),
              }).value
            }
          </S.TotalValueContainer>

          <Button
            center
            loading={onQuery}
            label="Salvar"
            type="submit"
            color={theme.color.primary}
            bgColor={theme.color.success}
          />
        </Form>
      )}
    </Formik>
  );
};
