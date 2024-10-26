import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import "./App.css";
import { AuthProvider } from './AuthProvider.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="838995627390-a3bajjldovsl9a32q4e5u3pvqo6k2qce.apps.googleusercontent.com">
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
