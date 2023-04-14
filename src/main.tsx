import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CommonContextProvider from './contexts/Common'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <CommonContextProvider>
    <App />
  </CommonContextProvider>

  // </React.StrictMode>
  ,
)
