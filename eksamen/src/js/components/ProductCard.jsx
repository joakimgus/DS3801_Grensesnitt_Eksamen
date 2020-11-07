import React, { useState} from 'react';
import { menuItems } from '../database';
import '../../css/ProductCard.css';
import ProductView from '../components/ProductView';



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

  let empty = {
    productId: "heh",
    productImage: "",
    productName: "svarte"

  }

  function handleProductView(e){
    const productName = e.target.getAttribute('data-product');
    const productList = e.target.getAttribute('data-list');
    setAll("single");
    console.log(productName);
    console.log(productList);
    
      filteredList.map((menuItem) => 
        menuItem.productName.includes(productName) ? 
        console.log(menuItem) 
        
        : null);
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
      )) : <ProductView 
              key={empty.productId}
              src={empty.productImage}
              alt={empty.productName}
              
          />
      }
    </>
    )
}
export default List;
