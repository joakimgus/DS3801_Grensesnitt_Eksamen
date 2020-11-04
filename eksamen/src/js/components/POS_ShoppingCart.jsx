import React, { useState } from 'react';
import '../../css/POS_ShoppingCart.css';


let POS_ShoppingCart = () =>{
    
    return(
            <div id="shoppingCartContainer">
              <div id="cartTextContainer"></div>
              <div id="cartButtonsContainer">
                <button className="cartButton"></button>
                <button className="cartButton"></button>
              </div>
            </div>
        );
}


export default POS_ShoppingCart;