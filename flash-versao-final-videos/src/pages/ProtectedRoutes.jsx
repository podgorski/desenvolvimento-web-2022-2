import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { UsuarioContext } from "../contexts/User"

export default function ProtectedRoutes() {

    const { user } = useContext(UsuarioContext)

    return user ? <Outlet /> : <Navigate to="/login" />
}