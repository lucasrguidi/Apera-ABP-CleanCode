import { IStocksWalletList } from '@screens/Wallet/types';
import { Modal } from '@ui/Modal';
import { useState } from 'react';
import { StockForm } from './components/StockForm';
import { TransactionTypeToggle } from './components/TransactionTypeToggle';

interface Props {
  setModal: (open: boolean) => void;
  stocksWalletList: IStocksWalletList[];
  callback: () => void;
}

export const ModalAddNewStock = ({ setModal, stocksWalletList, callback }: Props) => {
  const [type, setType] = useState<'buy' | 'sale'>('buy');

  return (
    <Modal title="Adicionar Transação" setModal={() => setModal(false)}>
      <TransactionTypeToggle type={type} onChange={setType} />
      <StockForm
        type={type}
        existingList={stocksWalletList}
        onSuccess={() => {
          setModal(false);
          callback();
        }}
      />
    </Modal>
  );
};
