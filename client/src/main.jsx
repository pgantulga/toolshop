import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from "@apollo/client";

// CSS Reset & Typography
import './styles/resets.css'

// Global styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';


import App from './App.jsx'
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <App client={client} />

        </ApolloProvider>

      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
