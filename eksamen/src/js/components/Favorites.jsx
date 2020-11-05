import React, { useState } from 'react';
import { menuItems } from '../database';
import '../../css/Favorites.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const Favorites = (props) => {

  const filterFavorites = menuItems.filter(menuItem => menuItem.favourite === true);

  const arrowimg = require("../../img/app_POS/arrow.png");
  const isFavorite = require("../../img/app_POS/favoriteTrue.png");

  return(
    <>
      <Header />
        {filterFavorites.map(menuItem => {
          return(
            <div className="productCard" key={menuItem.productId}>
              <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
              <h1 className="productTitle">{menuItem.productName}</h1>
              <p className="productPrice">From {menuItem.price[0]},-</p>
              <img id="arrow" src={arrowimg} alt="arrow-selector" />
              <img id="favorite" src={isFavorite} alt="favorite-selector" /> 
            </div>
          )
        })}
      <Footer />  
      </>
  )
}

export default Favorites;