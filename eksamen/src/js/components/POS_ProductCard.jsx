import { menuItems } from '../database';
import React from 'react';

const POS_ProductCard = () => {

  return(
    <>
      <div className="posProductCardContainer">
        {menuItems.map((menuItem) => {
          return(
            <div className="posProductCard">
              <img className="posProductImage" src={menuItem.productImage} />
              <h1>{menuItem.productName}</h1>
              <p>{menuItem.price[0]}</p>
            </div>
        )})};
      </div>
    </>
  )

};

export default POS_ProductCard;