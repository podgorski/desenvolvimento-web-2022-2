import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Game from './pages/Game'

import { GamificationProvider } from "./contexts/Gamification"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GamificationProvider>
      <Game />
    </GamificationProvider>
  </React.StrictMode>
)
