import React from 'react';
import {footerIcons} from '../database.js';
import '../../css/Footer.css';


const Footer = (props) =>{
    //console.log(icons);


    return(
        <footer>
            <div className="footer" id="home" onClick={props.onClick}>
                <img src={footerIcons[0].image} alt={footerIcons[0].alt} />
            </div>
            <div className="footer" id="user">
                <img src={footerIcons[1].image} alt={footerIcons[1].alt} />
            </div>
            <div className="footer" id="favorites"><img src={footerIcons[2].image} alt={footerIcons[2].alt}></img></div>
            <div className="footer" id="shopping-cart"><img src={footerIcons[3].image} alt={footerIcons[3].alt}></img></div>
            <div className="footer" id="options"><img src={footerIcons[4].image} alt={footerIcons[4].alt}></img></div>
        </footer>
    );
}


export default Footer;