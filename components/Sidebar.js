import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/clientes">Clientes</Link></li>
                <li><Link to="/fornecedores">Fornecedores</Link></li>
                <li><Link to="/compras">Compras</Link></li>
                <li><Link to="/vendas">Vendas</Link></li>
                <li><Link to="/relatorios">Relatórios</Link></li>
            </ul>
            <button className="logout">Logout</button>
        </div>
    );
};

export default Sidebar;