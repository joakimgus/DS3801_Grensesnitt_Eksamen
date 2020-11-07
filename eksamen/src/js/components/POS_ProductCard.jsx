import { menuItems } from '../database';
import React from 'react';

const POS_ProductCard = () => {

  return(
    <>
    {menuItems.map((menuItem) => {
      return(
      <div>
        <img src={menuItem.productImage} />
        <h1>{menuItem.productName}</h1>
        <p>{menuItem.price[0]}</p>
      </div>
    )})};
    </>
  )

};

export default POS_ProductCard;