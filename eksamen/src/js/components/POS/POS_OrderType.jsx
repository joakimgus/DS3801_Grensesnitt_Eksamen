import React from 'react';
import '../../../css/POS/POS_OrderType.css';
import { orderTypeIcons } from '../../database.js'


const POS_OrderType = () => {
  return (
    <>
      <div className="pos-action-window-container">
        <div className="orderTypeContainer">
          <div id="orderTypeDiv1">
            <p>How would you like your order?</p>
          </div>
          <div id="orderTypeDiv2">
            <button className="orderTypeButton" id="btn1">
              <img src={orderTypeIcons[0].image} alt={orderTypeIcons[0].alt} />
              <p>Table</p>
            </button>
            <button className="orderTypeButton" id="btn2">
              <img src={orderTypeIcons[1].image} alt={orderTypeIcons[1].alt} />
              <p>Take Away</p>
            </button>
            <button className="orderTypeButton" id="btn3">Cancel transaction</button>
          </div>
          <div id="orderTypeDiv3"></div>

        </div>
      </div>

    </>
  )

};

export default POS_OrderType;