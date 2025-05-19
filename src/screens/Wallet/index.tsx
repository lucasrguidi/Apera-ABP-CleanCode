import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

import { LoadingOverlay } from './components/LoadingOverlay';
import { WalletActions } from './components/WalletActions';
import { WalletEmpty } from './components/WalletEmpty';
import { WalletSummary } from './components/WalletSummary';
import { WalletTable } from './components/WalletTable';
import { useWallet } from './hooks/useWallet';
import { ModalAddNewStock } from './utils/ModalAddNewStock';

export const Wallet = () => {
  const navigate = useNavigate();
  const { loading, stocks, refresh } = useWallet();
  const [modalOpen, setModalOpen] = useState(false);

  const handleAdd = () => setModalOpen(true);
  const handleView = () => setModalOpen(true);
  const handleRowClick = (ticker: string) => {
    navigate(`/dashboard/${ticker}`);
  };

  return (
    <S.Container>
      {modalOpen && (
        <ModalAddNewStock
          setModal={setModalOpen}
          stocksWalletList={stocks}
          callback={() => {
            setModalOpen(false);
            refresh();
          }}
        />
      )}

      {loading && <LoadingOverlay />}

      {!loading && stocks.length > 0 && (
        <>
          <WalletSummary stocks={stocks} />
          <WalletActions onAdd={handleAdd} onView={handleView} />
          <WalletTable stocks={stocks} onRowClick={handleRowClick} />
        </>
      )}

      {!loading && stocks.length === 0 && <WalletEmpty onAdd={handleAdd} />}
    </S.Container>
  );
};
