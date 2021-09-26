import React, { useState, useEffect } from "react";
import iconseta from '../../assets/icon-button.svg';
import './styles.css';

export default () => {

    const [indice, setIndice] = useState(0);
    const [dados, setDados] = useState([{ title: " ", url: " " }, { title: " ", url: " " }, { title: " ", url: " " }, { title: " ", url: " " }]);

    const getImages = async () => {
        const response = await fetch('https://my-json-server.typicode.com/pacotee/api-teste/dados');
        const data = await response.json();

        setDados(data);
    }

    useEffect(() => getImages(), []);

    return <main>
        <div className='container-main'>
            <div className="content-left">
                <div className="titulo">
                    <h2>{dados[indice].title}</h2>
                    <a href="https://www.corebiz.ag/pt/" target="_blank"><span>veja mais</span><img src={iconseta} className="btn-seta" alt="veja mais" /></a>
                </div>
                <div className="menu-images">
                    <button onClick={() => setIndice(0)}><img className={indice === 0 ? "active" : "normal"} src={dados[0].url} alt="img-um" /></button>
                    <button onClick={() => setIndice(1)}><img className={indice === 1 ? "active" : "normal"} src={dados[1].url} alt="img-dois" /></button>
                    <button onClick={() => setIndice(2)}><img className={indice === 2 ? "active" : "normal"} src={dados[2].url} alt="img-tres" /> </button>
                    <button onClick={() => setIndice(3)}><img className={indice === 3 ? "active" : "normal"} src={dados[3].url} alt="img-quatro" /> </button>
                </div>
            </div>
            <div className="banner">
                <div className="container-banner" >
                    <img src={dados[indice].url} alt="banner" />
                </div>
            </div>
        </div>
    </main>
}