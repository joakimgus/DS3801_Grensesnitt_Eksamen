import React, { useState } from 'react';
import '../../../css/POS/POS_ShoppingCart.css';
import { posCartIcons, cartIcons } from '../../database';




let POS_ShoppingCart = (props) => {

    let cartHolder = JSON.parse(localStorage.getItem("POS_cart")) || [];

    let counter = 0;

    return (

        <div className="pos-cart-container">
            <div id="shoppingCartContainer">
                <div id="cartTextContainer" data-update-holder="0">
               {cartHolder.map((item) =>{
                   console.log(item);
                   {counter++}
                   return(

                       <div data-update={props.updatee}>

                            <h2 id="orderNumber">Order {counter}</h2>
                            <p className="cart-p"> 1 x {item.productName}</p>
                            <div id="orderCustomDiv">
                                <div id="orderCustomText">
                                    <p className="orderSpecs">+ Small</p>
                                    <p className="orderSpecs">+ 1 x Shots</p>
                                    <p className="orderSpecs">+ Milk</p>
                                    <p id="orderSum">Total: <strong id="amount">{item.price[0]}</strong></p>
                                </div>
                                <div id="orderCustomButtonContainer" data-id={cartHolder.indexOf(item)}>
                                    <button className="orderCustomButton" id="trashButton" data-id={cartHolder.indexOf(item)}>
                                        <img src={posCartIcons[3].image} width="20px" alt={posCartIcons[3].alt} onClick={props.removeItemFromCart} data-id={cartHolder.indexOf(item)}/>
                                    </button>
                                    <button className="orderCustomButton">
                                        <img src={posCartIcons[2].image} width='40px' alt={posCartIcons[2].alt} />
                                    </button>
                                </div>
                            </div>
                        </div>

                   )}
                   )
               }
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