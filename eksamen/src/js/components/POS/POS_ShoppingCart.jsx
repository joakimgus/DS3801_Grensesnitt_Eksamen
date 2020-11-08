import React, { useState } from 'react';
import '../../../css/POS/POS_ShoppingCart.css';
import { posCartIcons, cartIcons } from '../../database';

let POS_ShoppingCart = () => {

    


    return (
        <div className="pos-cart-container">
            <div id="shoppingCartContainer">
                <div id="cartTextContainer">
                    <h2 id="orderNumber">Order #0000</h2>
                    <p>1 x Iced Mocha</p>
                    <div id="orderCustomDiv">
                        <div id="orderCustomText">
                            <p className="orderSpecs">+ Large</p>
                            <p className="orderSpecs">+ 2 x Shots</p>
                            <p className="orderSpecs">+ Lactose Free Milk</p>
                            <p id="orderSum">Total: <strong id="amount">57.40 NOK</strong></p>
                        </div>
                        <div id="orderCustomButtonContainer">
                            <button className="orderCustomButton" id="trashButton">
                                <img src={posCartIcons[3].image} width="20px" alt={posCartIcons[3].alt} />
                            </button>
                            <button className="orderCustomButton">
                                <img src={posCartIcons[2].image} width='40px' alt={posCartIcons[2].alt} />
                            </button>
                        </div>
                    </div>

                </div>
                <div id="cartButtonsContainer">
                    <button className="cartButton" id="park">
                        <img src={posCartIcons[0].image} alt={posCartIcons[0].alt} />
                    </button>
                    <button className="cartButton" id="checkout">
                        <img src={posCartIcons[1].image} alt={posCartIcons[1].alt} />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default POS_ShoppingCart;