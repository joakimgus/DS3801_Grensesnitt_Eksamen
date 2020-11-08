import { menuItems } from '../database';
import React from 'react';
import '../../css/POS_ProductCard.css';

const POS_ProductCard = () => {

  return(
    <> 
      <div className="posMainContainer">

            <div className="posProductCard">
              <img className="posProductImage" src={menuItems[0].productImage} />
              <h1 className="posProductTitle">{menuItems[0].productName}</h1>
              <p className="posProductPrice">From {menuItems[0].price[0]}.-</p>
            </div>
          
      </div>
    </>
  )

};

export default POS_ProductCard;