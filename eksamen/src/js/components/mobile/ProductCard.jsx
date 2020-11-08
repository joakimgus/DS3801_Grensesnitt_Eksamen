import React, { useState} from 'react';
import { menuItems, singleItem } from '../../database.js';
import '../../../css/mobile/ProductCard.css';
import '../../../css/mobile/SingleView.css';
import ProductView from './ProductView';





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
    
      filteredList.map((singleItem) => 
        singleItem.productName.includes(productName) ? 

        itemHolder.push(singleItem)
        
        : null);

  }

  let length = itemHolder.length-1;

  function handleSetBackToAll(){
    setAll(false);
  }

function addItemToCart(){
/*   console.log("Item added!");
  allCartItems.push(singleItem);
  console.log(allCartItems); */
  let temp = JSON.parse(localStorage.getItem("cart")) || [];
  itemHolder.forEach((item) => temp.push(item));
  //temp.push(itemHolder);
  //console.log(temp);
  localStorage.setItem('cart', JSON.stringify(temp));
}

  return(
    <>
      {all != "single" ? filteredList.map((menuItem) => (
        (menuItem.category != "food" ? 
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice">From {menuItem.price[0]},-</p>
            <img 
              id="arrow" 
              alt="arrow" 
              src={require("../../../img/mobile-icons/arrow.png")} 
              data-product={menuItem.productName} 
              data-list={menuItem.category}
              onClick={handleProductView} 
            />
            <img 
              id="favorite"
              alt="favorite"
              src={menuItem.favourite ? require("../../../img/mobile-icons/favourite-true.png") : require('../../../img/mobile-icons/favourite-false.png')}
              onClick={() => handleToggleComplete(menuItem.productId)}
            />
          </div>
        : 
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice">From {menuItem.price},-</p>
            <img 
              id="arrow" 
              alt="arrow" 
              src={require("../../../img/mobile-icons/arrow.png")} 
              data-product={menuItem.productName} 
              data-list={menuItem.category}
              onClick={handleProductView} 
            />
            <img 
              id="favorite"
              alt="favorite"
              src={menuItem.favourite ? require("../../../img/mobile-icons/favourite-true.png") : require('../../../img/mobile-icons/favourite-false.png')}
              onClick={() => handleToggleComplete(menuItem.productId)}
            />
          </div>
        ))) 
        : 
        <div>
          <div className="single-view-container" key={itemHolder[length].productId}>
            <button className="return-button" onClick={handleSetBackToAll} alt="return to favorites button">⬅</button>
            <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
            <h3 className="productName">{itemHolder[length].productName}</h3>
            <p className="productDescription">{itemHolder[length].description}</p>


            {/* Buttons for Quantity/Shots/Size/Milk */}
            <div className="tweakContainer">
            </div>
            <button className="add-to-cart" onClick={addItemToCart}>add to cart</button>
          </div>
        </div>
      }
    </>
    )
}
export default List;

