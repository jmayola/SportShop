import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <div id='bg' className='flex min-h-screen flex-col justify-between'>
    <App></App>
    </div>
  </React.StrictMode>,
)
