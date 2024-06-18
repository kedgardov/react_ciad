import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const loggedIn = useSelector((state) => state.session.loggedIn);
    const status = useSelector((state) => state.session.status);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
