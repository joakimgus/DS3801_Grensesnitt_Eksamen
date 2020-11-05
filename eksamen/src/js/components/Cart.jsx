import React from 'react';
import {menuItems} from '../database.js';
import '../../css/Cart.css';

const Cart = () => {

    return(
        <div className="cart">
            <div className="cardContainer" key={menuItems[0].productId}>

            <img className="productImage" src={menuItems[0].productImage} alt={menuItems[0].productName} />

              <h1 className="productTitle">{menuItems[0].productName}</h1>
              <p className="productSize">Small</p>
              <p className="productPrice">{menuItems[0].price[0]},-</p>

            </div>
        </div>
        
    )
}

export default Cart;