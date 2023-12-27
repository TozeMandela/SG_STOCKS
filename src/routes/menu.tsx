import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../styles';

export const Menu: React.FC = () => {
  return (
    <Header>
        <div className="menuContainer">
            <div>
                Stock
            </div>
            <nav>
                <Link to='/DashBoard'>Início</Link>
                <Link to='/Items'>Items</Link>
            </nav>
        </div>
    </Header>
  )
}
