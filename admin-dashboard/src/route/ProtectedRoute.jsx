import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../service/auth';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const user = getCurrentUser();
    const token = localStorage.getItem('token');

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;