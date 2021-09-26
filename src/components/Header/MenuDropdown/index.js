import React, { useState } from 'react';

export default () => {

    const [viewContent, setVieWContet] = useState();

    return (
        <section className={viewContent ? "menu on" : "menu"}>
            <div onClick={() => setVieWContet(!viewContent)} className="menu-dropdown">
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-tree"></div>
            </div>
            <div>
                <ul className="dropdown-content">
                    <li><a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noreferrer">a corebiz</a></li>
                    <li><a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" rel="noreferrer">serviços</a></li>
                    <li><a href="https://www.corebiz.ag/pt/cases/" target="_blank" rel="noreferrer">cases</a></li>
                    <li><a href="https://www.corebiz.ag/pt/contato/" target="_blank" rel="noreferrer">contato</a></li>
                </ul>
            </div>
        </section>
    )
}