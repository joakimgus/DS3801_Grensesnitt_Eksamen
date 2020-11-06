import React from 'react';
import '../../css/Cart.css';
import { menuItems, cartIcons } from '../database.js';

//import { cartItemsArray } from '../database';

const Cart = () => {


  /*   menuItems = [
        {
            productId: 1,
            productName: "Black Coffee",
            productImage: require("../img/app_POS/black-coffee.jpeg"),
            price: [28, 32, 36],
            allergies: "none",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
            favourite: false,   ../img/app_POS/black-coffee.jpeg
            category: "hotCoffee"
        }, */

    
    /*get item array - cartItemsArray - produkter må pushes til det arrayet fra handlesiden; så denne "arrayen" er en dud */    
    let itemsArray = [];
    let product = {
        productName: "Black Coffee",
        price: 32,
        image: require("../../img/app_POS/black-coffee.jpeg"),
        size: "XL",
        extra: "milk"
    }

    itemsArray.push(product);
    let product2 = {
        productName: "Cafe au latee",
        price: 66,
        image: require("../../img/app_POS/black-coffee.jpeg"),
        size: "M",
        extra: "sukker"
    }
    itemsArray.push(product2);
    let product3 = {
        productName: "Gul saft",
        price: 12,
        image: require("../../img/app_POS/black-coffee.jpeg"),
        size: "XL",
        extra: "isbiter"
    }
    itemsArray.push(product3);
    

    //Denne funker ikke gaddamn brainfarts
    let sum = itemsArray.map((item, total) => {
        return parseInt(total + item.price);
    })
    console.log(sum);

    console.log(itemsArray);
    console.log(itemsArray.map((item) => {return (item.productName)}));

    return(
        <div className="cart">
            <div className="productCartContainer">
                {itemsArray.map((item) => {
                    return(
                        <div className="prodCard" key={item.productName}>
                            <div className="itemQ">
                                <span>x</span>
                                1</div>
                            <img className="itemImage" src={item.image} alt={item.productName + " image"}/>
                            <ul className="itemName">{item.productName}
                                <li className="itemSize">Size: {item.size}</li>
                                <li className="addOns">Extras: {item.extra}</li>
                                <li className="itemPrice">{item.price},-</li>
                            </ul>
                            <div className='cartBtnContainer'>
                                <div className="addBtn">
                                    <img src={cartIcons[0].image} alt={cartIcons[0].name}/>
                                </div>
                                <div className="subBtn">
                                    <img src={cartIcons[1].image} alt={cartIcons[1].name}/>
                                </div>
                                <div className="discardBtn">
                                    <img src={cartIcons[2].image} alt={cartIcons[2].name}/>
                                </div>
                            </div>
                        </div> 
                    )
                })}
            </div>
            

                    {/*pladeholder $sum forreløpig. frem til jeg lærer meg å plusse sammen */}
            <p className="mTotal">Total: 
                <span className="mTotal" id="mTotalSpan"> {sum}</span>,-
            </p>
            <button className="mCheckoutBtn">Checkout</button>
        </div>
    );

}





export default Cart;

/* return(
    <div>
        {itemsArray.map((item) => {
            return(
                
                
                )
        })}
    </div>
); */