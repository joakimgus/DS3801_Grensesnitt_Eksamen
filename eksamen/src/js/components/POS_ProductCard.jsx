import { menuItems } from '../database';
import React from 'react';

const POS_ProductCard = () => {

  return(
    <>
        {menuItems.map((menuItem) => {
          return(
            <div className="posProductCard">
              <img className="posProductImage" src={menuItem.productImage} />
              <h1 className="posProductTitle">{menuItem.productName}</h1>
              <p className="posProuctPrice">{menuItem.price[0]}</p>
            </div>
        )})};
    </>
  )

};

export default POS_ProductCard;