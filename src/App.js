import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import IndexPage from './pages/IndexPage.js'
import { AuthProvider } from './providers/AuthProvider'
import UserProvider from './providers/UserProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <IndexPage />
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
