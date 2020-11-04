import React from 'react';
import {posFooterIcons} from '../database.js';
import {footerIcons} from '../database.js';
import '../../css/POS_Footer.css';


const POS_Footer = () => {
    
    
    return(
        <nav>
           <button className="POS_Footer" id="more">
            <img className="POS_Button" src={footerIcons[4].image} alt={footerIcons[4].alt}></img>
            </button>
           <button className="POS_Footer" id="coffee">
               <img src={posFooterIcons[0].image} alt={posFooterIcons[0].alt}></img>
               <p>Coffee</p>
            </button>
           <button className="POS_Footer" id="drinks"><img src={posFooterIcons[1].image} alt={posFooterIcons[1].alt}></img>
            <p>Drinks</p>
            </button>
           <button className="POS_Footer" id="food"><img src={posFooterIcons[3].image} alt={posFooterIcons[3].alt}></img>
            <p>Food</p>
            </button>
           <button className="POS_Footer" id="orders"><img className="POS_Button" src={posFooterIcons[2].image} alt={posFooterIcons[2].alt}></img></button>
           <button className="POS_Footer" id="receipts"><img className="POS_Button" src={posFooterIcons[5].image} alt={posFooterIcons[5].alt}></img></button>
           <button className="POS_Footer" id="calculator"><img className="POS_Button" src={posFooterIcons[4].image} alt={posFooterIcons[4].alt}></img></button>
        </nav>
    );
}


export default POS_Footer;