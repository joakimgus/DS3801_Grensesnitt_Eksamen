import React from 'react';
import '../../css/Cart.css';
import { menuItems, cartIcons } from '../database.js';

const Cart = () => {

    return (
        <div className="cart">

            <div className="productCartContainer" >
                <div className="prodCard" key={menuItems[0].productId}>
                    <div className="itemQ"><span>x</span> 1</div>
                    <img className="itemImage" src={menuItems[0].productImage} alt={menuItems[0].productName} />
                    <ul className="itemName">{menuItems[0].productName}
                        <li className="itemSize">Size</li>
                        <li className="addOns">Extras</li>
                        <li className="itemPrice">90,-</li>
                    </ul>
                    <div className='cartBtnContainer' >
                        <div className="addBtn">
                            <img src={cartIcons[0].image} alt={cartIcons[0].name} />
                        </div>
                        <div className="subBtn">
                            <img src={cartIcons[1].image} alt={cartIcons[1].name} />
                        </div>
                        <div className="discardBtn">
                            <img src={cartIcons[2].image} alt={cartIcons[2].name} />
                        </div>
                    </div>
                </div>
                
            </div>
    <p className="mTotal">Total: <span className="mTotal" id="mTotalSpan">{menuItems[0].price[1]}</span>,-</p>
            <button className="mCheckoutBtn">Checkout</button>
        </div>

    )
}

export default Cart;