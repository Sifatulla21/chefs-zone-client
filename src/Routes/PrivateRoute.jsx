import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner className="position-absolute top-50 start-50" animation="grow" variant="info" />;
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login"></Navigate>;
};

export default PrivateRoute;