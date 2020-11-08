import React, { useState} from 'react';
import { menuItems } from '../../database.js';
import '../../../css/mobile/ProductCard.css';


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

  function handleProductView(e){
    const productName = e.target.getAttribute('data-product');
    const productList = e.target.getAttribute('data-list');
    console.log(productName);
    console.log(productList);
    filteredList.map((menuItem) => menuItem.productName.includes(productName) ? console.log(menuItem) : null);
  }

  return(
    <>
      {filteredList.map((menuItem) => (
        <div className="productCard" key={menuItem.productId}>
          <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
          <h1 className="productTitle">{menuItem.productName}</h1>
          <p className="productPrice">From {menuItem.price[0]},-</p>
          <img 
            id="arrow" 
            alt="arrow" 
            src={require("../../img/mobile-icons/arrow.png")} 
            data-product={menuItem.productName} 
            data-list={menuItem.category}
            onClick={handleProductView} 
          />
          <img 
            id="favorite"
            alt="favorite"
            src={menuItem.favourite ? require("../../img/mobile-icons/favourite-true.png") : require("../../img/mobile-icons/favourite-false.png")}
            onClick={() => handleToggleComplete(menuItem.productId)}
          />
        </div>
      ))}
    </>
    )
}
export default List;