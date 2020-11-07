import React, { useState} from 'react';
import { menuItems, singleItem } from '../database';
import '../../css/ProductCard.css';
import '../../css/SingleView.css';
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
            <div className="return-button" onClick={handleSetBackToAll} alt="return to favorites button">⬅ Back</div>
                <h3 className="productName">{itemHolder[length].productName}</h3>
                <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
                <p className="productDescription">{itemHolder[length].description}sss</p>
                
                {/* Buttons for Quantity/Shots/Size/Milk */}
                <div className="tweakContainer">
                <button onClick={addItemToCart}>add to cart</button>
                </div>
            </div>
        </div>
      }
    </>
    )
}
export default List;

