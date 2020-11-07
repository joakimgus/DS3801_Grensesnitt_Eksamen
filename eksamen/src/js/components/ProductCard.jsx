import React, { useState} from 'react';
import { menuItems } from '../database';
import '../../css/ProductCard.css';


const List = ({list, setList, filteredList}) => { 
  

  function handleToggleComplete(id) {

    const newList = list.map((menuItem) => {
      if (menuItem.productId === id) {
        const updatedmenuItem = {
          ...menuItem,
          favourite: !menuItem.favourite,
        };

        return updatedmenuItem;
      }
 
      return menuItem;
    });
    
    setList(newList);
  }

  return(
    <>
      {filteredList.map((menuItem) => (
        menuItem.category === "food" ?
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice">From {menuItem.price},-</p>
            <img id="arrow" alt="arrow" src={require("../../img/app_POS/arrow.png")} alt="arrow-selector" />
            <img 
              id="favorite"
              alt="favorite"
              src={menuItem.favourite ? require("../../img/app_POS/favoriteTrue.png") : require("../../img/app_POS/favoriteFalse.png")}
              onClick={() => handleToggleComplete(menuItem.productId)}
            />
          </div>
        :
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice">From {menuItem.price[0]},-</p>
            <img id="arrow" alt="arrow" src={require("../../img/app_POS/arrow.png")} alt="arrow-selector" />
            <img 
              id="favorite"
              alt="favorite"
              src={menuItem.favourite ? require("../../img/app_POS/favoriteTrue.png") : require("../../img/app_POS/favoriteFalse.png")}
              onClick={() => handleToggleComplete(menuItem.productId)}
            />
          </div>
      ))}
    </>
    )
}
export default List;