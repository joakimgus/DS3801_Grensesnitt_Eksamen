import { menuItems } from '../../database';
import React from 'react';
import '../../../css/POS/POS_ProductCard.css';

const POS_ProductCard = ({ posList, setPosList, filteredPosList }, props) => {




  function addItemToCart(e){
    let target = e.target.getAttribute('data-item');
    let temp = JSON.parse(localStorage.getItem('POS_cart')) || [];
  
    filteredPosList.map(
      (singleItem) => singleItem.productName === target ? temp.push(singleItem) : null
    );
  
    localStorage.setItem('POS_cart', JSON.stringify(temp));
  }

  return (


    <>
      <div className="pos-action-window-container">
        <div className="posMainContainer">
          {filteredPosList.map((menuItem) => (
            menuItem.category != "food" ?
              <div className="posProductCard">
                <img className="posProductImage" src={menuItem.productImage} />
                <h1 className="posProductTitle">{menuItem.productName}</h1>
                <p className="posProductPrice">From {menuItem.price[0]}.-</p>
                <button onClick={addItemToCart} data-item={menuItem.productName}>Add to cart</button>
              </div>
              :
              <div className="posProductCard">
                <img className="posProductImage" src={menuItem.productImage} />
                <h1 className="posProductTitle">{menuItem.productName}</h1>
                <p className="posProductPrice">{menuItem.price}.-</p>
                <button onClick={addItemToCart} data-item={menuItem.productName}>Add to cart</button>
              </div>
          ))}
        </div>
      </div>
    </>
  )

};

export default POS_ProductCard;