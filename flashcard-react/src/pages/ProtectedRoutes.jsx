import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, Outlet } from "react-router-dom";

import { UsuarioContext } from "../contexts/User";

const ProtectedRoutes = () => {
    const { user } = useContext(UsuarioContext);

    return user ? <Outlet /> : <Navigate to="/login" />;



};

export default ProtectedRoutes

