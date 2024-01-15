import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountriesContextProvider from './Utils/CountriesContextProvider.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import ThemeProvider from './Utils/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <CountriesContextProvider>
    <Router>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </Router>
    </CountriesContextProvider>
  </React.StrictMode>
)
