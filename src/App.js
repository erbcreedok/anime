import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import IndexPage from './pages/IndexPage.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <IndexPage />
      </BrowserRouter>
    </>
  );
}

export default App;
