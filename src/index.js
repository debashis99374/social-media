import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import {PostProvider,PostContext} from './context/postContext'
import { AuthContext,AuthProvider } from './context/authContext';
import { UserContext,UserProvider } from './context/userContext';

// Call make Server
makeServer();
export {PostContext};
export {AuthContext};
export {UserContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
    <AuthProvider>
    <PostProvider>
      <UserProvider>
    <App />
    </UserProvider>
    </PostProvider>
    </AuthProvider>
    
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
