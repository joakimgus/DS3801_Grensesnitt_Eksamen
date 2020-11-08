import React from 'react';
import {posFooterIcons} from '../../database';
import '../../../css/POS/POS_Footer.css';


function POS_Footer() {
   return (
      <nav>
         <button className="POS_Footer" id="menu">
            <img className="POS_Button" src={posFooterIcons[6].image} alt={posFooterIcons[6].name} />
         </button>

         <button className="POS_Footer" id="coffee">
            <img src={posFooterIcons[0].image} alt={posFooterIcons[0].name} />
            <p>Coffee</p>
         </button>

         <button className="POS_Footer" id="drinks">
            <img src={posFooterIcons[1].image} alt={posFooterIcons[1].name} />
            <p>Drinks</p>
         </button>

         <button className="POS_Footer" id="food">
            <img src={posFooterIcons[3].image} alt={posFooterIcons[3].name} />
            <p>Food</p>
         </button>

         <button className="POS_Footer" id="orders">
            <img className="POS_Button" src={posFooterIcons[2].image} alt={posFooterIcons[2].name} />
         </button>

         <button className="POS_Footer" id="receipts">
            <img className="POS_Button" src={posFooterIcons[5].image} alt={posFooterIcons[5].name} />
         </button>

         <button className="POS_Footer" id="calculator">
            <img className="POS_Button" src={posFooterIcons[4].image} alt={posFooterIcons[4].name} />
         </button>
      </nav>
   );
}


export default POS_Footer;