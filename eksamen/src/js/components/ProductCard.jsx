import React, { useState} from 'react';
import { menuItems } from '../database';
import '../../css/ProductCard.css';
import ProductView from '../components/ProductView';


let itemHolder = [];
const List = ({list, setList, filteredList}) => { 
  

  let [all, setAll] = useState(false);

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
    itemHolder = [];
    const productName = e.target.getAttribute('data-product');
    const productList = e.target.getAttribute('data-list');
    setAll("single");
    console.log(productName);
    console.log(productList);
    
      filteredList.map((singleItem) => 
        singleItem.productName.includes(productName) ? 

        itemHolder.push(singleItem)
        
        : null);
        console.log("under");
        console.log(itemHolder); 
        console.log("over");
  }

  let length = itemHolder.length-1;
  console.log(length);

  return(
    <>
      {all != "single" ? filteredList.map((menuItem) => (
        <div className="productCard" key={menuItem.productId}>
          <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
          <h1 className="productTitle">{menuItem.productName}</h1>
          <p className="productPrice">From {menuItem.price[0]},-</p>
          <img 
            id="arrow" 
            alt="arrow" 
            src={require("../../img/app_POS/arrow.png")} 
            data-product={menuItem.productName} 
            data-list={menuItem.category}
            onClick={handleProductView} 
          />
          <img 
            id="favorite"
            alt="favorite"
            src={menuItem.favourite ? require("../../img/app_POS/favoriteTrue.png") : require("../../img/app_POS/favoriteFalse.png")}
            onClick={() => handleToggleComplete(menuItem.productId)}
          />
        </div>
      )) : <div>
            <div className="cardContainer" key={itemHolder[length].productId}>
                <h3 className="productName">{itemHolder[length].productName}</h3>
                <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
                <p className="productDescription">{itemHolder[length].description}</p>
                
                {/* Buttons for Quantity/Shots/Size/Milk */}
                <div className="tweakContainer">
                </div>


            </div>
        </div>
      }
    </>
    )
}
export default List;
export { itemHolder };

