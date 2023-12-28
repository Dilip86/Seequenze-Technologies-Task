import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './components/navPage.jsx'
import SideBar from './components/sideBar.jsx'
import Dashboard from './components/Contentpage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    <main style={{display:'flex',gap:'5px'}}>
      <SideBar />
      <Dashboard />
    </main>
  </React.StrictMode>,
)
