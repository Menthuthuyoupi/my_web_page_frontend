import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

import SearchProvider from './context/SearchContext.jsx'
import LoggedInProvider from './context/LoggedInContext.jsx'
import PedidoProvider from './context/PedidoContext.jsx'
import TotalPayProvider from './context/TotalPayContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PedidoProvider >
      <TotalPayProvider>
        <LoggedInProvider >
          <SearchProvider >
            <App />
          </SearchProvider>
        </LoggedInProvider>
      </TotalPayProvider>
    </PedidoProvider>
    </BrowserRouter>
  </React.StrictMode>
)
