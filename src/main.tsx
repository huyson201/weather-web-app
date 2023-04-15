import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CommonContextProvider from './contexts/Common'
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <CommonContextProvider>
    <App />
  </CommonContextProvider>

  // </React.StrictMode>
  ,
)
