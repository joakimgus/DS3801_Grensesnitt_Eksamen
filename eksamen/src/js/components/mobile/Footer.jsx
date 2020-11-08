import React, { useState } from 'react';
import {footerIcons} from '../../database.js';
import '../../../css/mobile/Footer.css';


let Footer = (props) =>{
    
    return(
            <footer data-clicked={props.data}>
                <div className="footer" id="home">
                    <img src={footerIcons[0].image} onClick={props.onClick} alt={footerIcons[0].alt} data-render="renderHome" />
                </div>

                <div className="footer" id="user" >
                    <img src={footerIcons[1].image} onClick={props.onClick} alt={footerIcons[1].alt} data-render="renderProfile" />
                </div>

                <div className="footer" id="favorites">
                    <img src={footerIcons[2].image} onClick={props.onClick} alt={footerIcons[2].alt} data-render="renderFavorites" />
                </div>

                <div className="footer" id="shopping-cart">
                    <img src={footerIcons[3].image} onClick={props.onClick} alt={footerIcons[3].alt} data-render="renderShoppingCart" />
                </div>

                <div className="footer" id="options">
                    <img src={footerIcons[4].image} onClick={props.onClick} alt={footerIcons[4].alt} data-render="renderMore" />

                </div>
            </footer>
        );
}


export default Footer;