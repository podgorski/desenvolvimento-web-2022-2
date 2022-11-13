import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Game from './pages/Game'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { GamificationProvider } from "./contexts/Gamification"
import { UsuarioProvider } from "./contexts/User"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './pages/ProtectedRoutes'
import "./services/firebase"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      <GamificationProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"login"} element={<Login />} />
            <Route path={"/"} element={<Navigate to={"/login"} />} />

            <Route element={<ProtectedRoutes />}>
              <Route path={"game"} element={<Game />} />
              <Route path={"dashboard"} element={<Dashboard />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GamificationProvider>
    </UsuarioProvider>
  </React.StrictMode>
)
