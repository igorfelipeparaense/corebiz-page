import React from 'react';
import Logo from '../../assets/logo.svg';
import MenuDropdown from './MenuDropdown';
import './styles.css';

export default () => <header className="header">
    <div className="container-header">
        <img src={Logo} className="logo-header" alt="logo header" />
        <MenuDropdown />
        <nav className="navbar">
            <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">a corebiz</a>
            <a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">serviços</a>
            <a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">cases</a>
            <a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">contato</a>
        </nav>
    </div>
</header>