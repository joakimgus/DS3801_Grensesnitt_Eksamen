import { menuItems } from '../database';
import React from 'react';
import '../../css/POS_ProductCard.css';

const POS_ProductCard = ({posList, setPosList, filteredPosList}) => {

  return(
    <> 
      <div className="posMainContainer">
        {filteredPosList.map((menuItem) => (
          menuItem.category != "food" ? 
            <div className="posProductCard">
              <img className="posProductImage" src={menuItem.productImage} />
              <h1 className="posProductTitle">{menuItem.productName}</h1>
              <p className="posProductPrice">From {menuItem.price[0]}.-</p>
            </div>
          :  
            <div className="posProductCard">
              <img className="posProductImage" src={menuItem.productImage} />
              <h1 className="posProductTitle">{menuItem.productName}</h1>
              <p className="posProductPrice">{menuItem.price}.-</p>
            </div>
        ))}
      </div>
    </>
  )

};

export default POS_ProductCard;