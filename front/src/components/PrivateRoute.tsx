import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('token'); // Ou qualquer outra lógica de autenticação

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;