import React from 'react';
import image from './logo.png';
import './App.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <img src={image} alt="logo" className="logo" />
      <Button onClick={() => navigate("/dashboard")}>
        Entrar
      </Button>
    </div >
  );
}

export default App;
