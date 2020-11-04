import React from 'react';
import {menuItems} from '../database.js';
import '../../css/ProductRender.css';

const ProductRender = () => {

  const filterHotCoffee = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  const arrowimg = require("../../img/app_POS/arrow.png");

  return(
      <div>
        {filterHotCoffee.map(menuItem => {
          return(
            <div className="productCard" key={menuItem.productId}>
              <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
              <h1 className="productTitle">{menuItem.productName}</h1>
              <p className="productPrice">From {menuItem.price[0]},-</p>
              <img id="arrow" src={arrowimg} alt="arrow-selector"/>
            </div>
          )
        })} 
      </div>
  )
}

export default ProductRender;
