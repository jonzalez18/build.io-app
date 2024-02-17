import './App.css';
import React from 'react'
import { AuthContextProvider } from './components/routes/Auth'
import { BrowserRouter } from 'react-router-dom';
import CustomRouter from './components/routes/routes';


function App() { 

  return (
  
  
      <BrowserRouter>
        <AuthContextProvider >
            <CustomRouter />
          </AuthContextProvider>
        </BrowserRouter>
    
  );
}

export default App;
