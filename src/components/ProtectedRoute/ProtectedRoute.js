import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.login);
  return props.login
    ? <Component {...props} />
    : <Navigate to='/' replace={true} />
};

export default ProtectedRoute;
