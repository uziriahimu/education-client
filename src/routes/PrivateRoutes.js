import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
;

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <Spinner className='text-center' animation="border" variant="info" />;

    if (user?.email) return children;

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
}

export default PrivateRoutes;