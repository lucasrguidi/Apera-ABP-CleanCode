import { Navbar } from '@ui/Navbar';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as Style from './styles';

export const AuthTemplate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href.endsWith('/')) {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <Navbar />

      <Style.AppContent>
        <Outlet />
      </Style.AppContent>
    </>
  );
};
