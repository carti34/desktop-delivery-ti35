import React from 'react';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/deliverymenList">Lista de Entregadores</Link>
            <Link to="/deliverymenRegister">Cadastro de Entregadores</Link>
            <Link to="/assignOrder">Distribuição de Pedidos</Link>
        </nav>
    );
}

export default GlobalMenu;