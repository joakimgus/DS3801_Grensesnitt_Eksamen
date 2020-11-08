import React, { useState } from 'react';
import '../../../css/mobile/Cart.css';
import { menuItems, cartIcons } from '../../database.js';

//import { cartItemsArray } from '../database';

const Cart = (props) => {

    let cartHolder = JSON.parse(localStorage.getItem("cart")) || [];


    //Denne funker ikke gaddamn brainfarts
    let total = 0;
    let priceee = cartHolder.map((item => {
        total = total + (item.price[1] === undefined ? item.price : item.price[1]);
        return total;
    }))


    function handleCartClick(e) {
        //console.log(e.target);
        const target = e.target.getAttribute('data-id') - 1;
        const action = e.target.getAttribute('alt')


        //Alle disse fungerer - i consollen - men de blir ikke rendret på nytt. Burde vel bruke useState([]), men det har jeg ikke fått til. 
        switch (action) {
            case "Add":
                //itemsArray[target].amount++;
                //console.log(this.state);
                break;
            case "Subtract":
                //itemsArray[target].amount--;
                break;
            case "Discard":
                //Elementet blir slettet, som man ser i consollen - men elementet blir ikke rendret på nytt. 
                //itemsArray.splice(target, 1);
                let temp = JSON.parse(localStorage.getItem('cart'));
                temp.splice(target, 1);
                localStorage.setItem('cart', JSON.stringify(temp));
                break;
        }
    }


let id = 0;
    return (
        <>
            <div className="cart">
                <div className="productCartContainer">
                    {cartHolder.map((item) => {
                        id++;
                        console.log(item.price[1]);
                        return (

                            <div className="prodCard" key={item.productId + " " + id} data-update={props.update}>

                                <div className="itemQ">
                                    <span>x</span>{item.amount} 1
                                </div>
                                <img className="itemImage" src={item.productImage} alt={item.productName + " image"} />
                                <ul className="itemName">{item.productName}
                                    <li className="itemSize">Size: XL {item.size}</li>
                                    <li className="addOns">Extras: {item.extra}none</li>
                                    <li className="itemPrice">{item.price[1] === undefined ? item.price : item.price[1] /* * item.amount*/ },-</li>
                                </ul>
                                <div className='cartBtnContainer'>
                                    <div className="addBtn" >
                                        <img src={cartIcons[0].image} alt={cartIcons[0].name} onClick={handleCartClick} data-id={`${item.id}`} />
                                    </div>
                                    <div className="subBtn">
                                        <img src={cartIcons[1].image} alt={cartIcons[1].name} onClick={handleCartClick} data-id={`${item.id}`} />
                                    </div>
                                    <div className="discardBtn">
                                        <img src={cartIcons[2].image} alt={cartIcons[2].name} onClick={props.remove} data-id={cartHolder.indexOf(item)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>



                {/*pladeholder $sum forreløpig. frem til jeg lærer meg å plusse sammen */}
                <p className="mTotal">Total:
                    <span className="mTotal" id="mTotalSpan"> {total} </span>,-
                </p>
                <button className="mCheckoutBtn" onClick={props.checkout} data-render="checkout">Checkout</button>
            </div>
            <div id="moveFooter"></div>
        </>
    );

}





export default Cart;
