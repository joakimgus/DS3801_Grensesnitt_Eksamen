import React from 'react';
import {menuItems} from '../database.js';

const ProductRender = () => {

  const filterHotCoffee = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  return(
      <div>
        {filterHotCoffee.map(menuItem => {
          return(
            <div className="productCard" key={menuItem.productId}>
              <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
              <h1 className="productTitle">{menuItem.productName}</h1>
              <p className="productPrice">From kr. {menuItem.price[0]},-</p>
            </div>
          )
        })} 
      </div>
  )
}

export default ProductRender;
