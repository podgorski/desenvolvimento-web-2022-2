import Game from './pages/Game'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { GamificationProvider } from "./contexts/Gamification"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoutes from './pages/ProtectedRoutes';
import { UsuarioProvider } from './contexts/User';


export default function App() {

    return (

        <UsuarioProvider>

            <GamificationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={"login"} element={<Login />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path={"game"} element={<Game />} />
                            <Route path={"dashboard"} element={<Dashboard />} />
                        </Route>

                        <Route path={"/"} element={<Navigate to={"/login"} />} />
                    </Routes>
                </BrowserRouter>
            </GamificationProvider>
        </UsuarioProvider>
    )
}