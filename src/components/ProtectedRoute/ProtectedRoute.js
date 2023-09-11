import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return props.login
    ? <Component {...props} />
    : <Navigate to='/' replace={true} />
};

export default ProtectedRoute;
