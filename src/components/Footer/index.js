import React from "react";
import LogoFooter from '../../assets/logo-corebiz-global.svg';
import { CgFacebook } from 'react-icons/cg';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Address from "./Address";
import './styles.css'

export default () => <footer>
    <div className='container-footer'>
        <div className="container-left">
            <div className="contacts">
                <div className="logo">
                    <img src={LogoFooter} alt="logo corebiz" />
                    <span> direitos reservados, corebiz 2021 </span>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/corebiz.ag/" target="_blank"><CgFacebook /></a>
                    <a href="https://www.instagram.com/corebizag/" target="_blank"><AiOutlineInstagram /></a>
                    <a href="https://www.linkedin.com/company/corebiz-brasil/" target="_blank"><FaLinkedinIn /></a>
                </div>
            </div>
            <div className="menu-footer">
                <nav>
                    <a href="https://www.corebiz.ag/pt/about/" target="_blank"> a corebiz </a>
                    <a href="https://www.corebiz.ag/pt/#framework-title" target="_blank"> serviços </a>
                    <a href="corebiz.ag/pt/cases/" target="_blank"> cases </a>
                    <a href="https://www.corebiz.ag/pt/contato/" target="_blank"> contato </a>
                </nav>
            </div>
        </div>
        <div className="container-address" >
            <Address {...{
                title: ".Brasil",
                details: [
                    {
                        text: "Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP"
                    },
                    {
                        text: "R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP"

                    }
                ]
            }} />
            <Address {...{
                title: ".Argentina",
                details: [
                    {
                        text: "Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA"
                    }
                ]
            }} />
            <Address {...{
                title: ".México",
                details: [
                    {
                        text: "Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX"
                    }
                ]
            }} />
            <Address {...{
                title: ".Chile",
                details: [
                    {
                        text: "Roberto del Río 1137, Providencia."
                    }
                ]
            }} />
        </div>
    </div>
</footer>