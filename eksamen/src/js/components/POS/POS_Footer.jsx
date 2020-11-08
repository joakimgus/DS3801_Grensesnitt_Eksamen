import React from 'react';
import { posFooterIcons } from '../../database';
import '../../../css/POS/POS_Footer.css';


function POS_Footer(props) {
   return (
      <div className="pos-footer-container">
         <nav>
            <button className="POS_Footer" id="menu" onClick={props.onClick} data-render="renderMenu">
               <img className="POS_Button" src={posFooterIcons[6].image} alt={posFooterIcons[6].name} onClick={props.onClick} data-render="renderMenu"/>
            </button>
  
            <button className="POS_Footer" id="coffee" onClick={props.onClick} data-render="renderCoffee" >
               <img src={posFooterIcons[0].image} alt={posFooterIcons[0].name} onClick={props.onClick} data-render="renderCoffee" />
               <p onClick={props.onClick} data-render="renderCoffee">Coffee</p>
            </button>

            <button className="POS_Footer" id="drinks" onClick={props.onClick} data-render="renderDrinks">
               <img src={posFooterIcons[1].image} alt={posFooterIcons[1].name} onClick={props.onClick} data-render="renderDrinks"/>
               <p onClick={props.onClick} data-render="renderDrinks">Drinks</p>
            </button>

            <button className="POS_Footer" id="food" onClick={props.onClick} data-render="renderFood">
               <img src={posFooterIcons[3].image} alt={posFooterIcons[3].name} onClick={props.onClick} data-render="renderFood"/>
               <p onClick={props.onClick} data-render="renderFood">Food</p>
            </button>

            <button className="POS_Footer" id="orders" onClick={props.onClick} data-render="renderOrders">
               <img className="POS_Button" src={posFooterIcons[2].image} alt={posFooterIcons[2].name} onClick={props.onClick} data-render="renderOrders"/>
            </button>

            <button className="POS_Footer" id="receipts" onClick={props.onClick} data-render="renderReceipts">
               <img className="POS_Button" src={posFooterIcons[5].image} alt={posFooterIcons[5].name} onClick={props.onClick} data-render="renderReceipts"/>
            </button>

            <button className="POS_Footer" id="calculator" onClick={props.onClick} data-render="renderCalculator">
               <img className="POS_Button" src={posFooterIcons[4].image} alt={posFooterIcons[4].name} onClick={props.onClick} data-render="renderCalculator"/>
            </button>
         </nav>
      </div>
   );
}


export default POS_Footer;