import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext'
import { ToastProvider } from './Context/ToastContext' 
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ThemeProvider>
    </React.StrictMode>,
  )
} else {
  console.error("Erro crítico: O elemento 'root' não foi encontrado no index.html");
}