import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/Route';
import { GlobalStyled } from './styles';
import { Menu } from './routes/menu';

export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <GlobalStyled />
      <Menu />
      <Routes />
    </BrowserRouter>
  )
};