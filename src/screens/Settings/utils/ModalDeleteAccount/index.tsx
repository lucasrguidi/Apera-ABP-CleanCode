import { theme } from '@styles/theme';
import { Button } from '@ui/Buttons/Button';
import { Modal } from '@ui/Modal';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthContext';
import { Api } from '../../../../services/api';
import * as Style from './styles';
import { IModalDeleteAccount } from './types';

export const ModalDeleteAccount = ({ setModal }: IModalDeleteAccount) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [onQuery, setOnQuery] = useState<boolean>(false);

  async function deleteAccount() {
    setOnQuery(true);
    await Api.delete(`/login/${user?.id}`)
      .then(() => {
        setOnQuery(false);
        toast.success('Conta deletada com sucesso!');
        navigate('/login');
      })
      .catch(() => {
        setOnQuery(false);
        toast.error('Algo de errado aconteceu!');
      });
  }
  return (
    <Modal title="Deletar conta" setModal={() => setModal(false)}>
      <Style.Container>
        <p className="p1">Deseja excluir a sua conta?</p>
        <p className="p3">Essa ação não poderá ser desfeita posteriormente.</p>

        <Button
          loading={onQuery}
          center
          label="Excluir"
          bgColor={theme.color.danger}
          onClick={deleteAccount}
        />
      </Style.Container>
    </Modal>
  );
};
