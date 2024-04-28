import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import AuthProvider from '../src/Provider/AuthProvider.jsx'
import router from './Routers/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </React.StrictMode>,
)
