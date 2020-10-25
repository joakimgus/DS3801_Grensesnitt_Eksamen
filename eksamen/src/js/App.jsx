import React from 'react';
import '../css/App.css';
import { menuItems } from './database';

const App = () => {
  const filterHotCoffee = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

    return(
        <div>
          {filterHotCoffee.map(menuItem => {
            return(
              <div className="productCard" key={menuItem.productId}>
                <img src={menuItem.productImage} alt={menuItem.productName} />
                <h1 className="productTitle">{menuItem.productName}</h1>
                <p className="productPrice">From kr. {menuItem.price[0]},-</p>
              </div>
            )
          })} 
        </div>
      )
}

export default App


// ha alle items i et array, .filter == category for hva som vises
// filter based på hva som blir klikket på 
// https://stackoverflow.com/questions/59819613/map-filter-in-react-objects-are-not-valid-as-a-react-child-if-you-meant-to-ren