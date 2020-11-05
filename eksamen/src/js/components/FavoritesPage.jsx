import React, { useState } from 'react';
import { menuItems } from '../database';
import '../../css/Favorites.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

    const FavoritesPage = () => {

      const initialList = menuItems.filter(menuItem => menuItem.favourite === true);

      const [list, setList] = useState(initialList);
     
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
        console.log(newList)
      }
     
      return <List list={list} onToggleComplete={handleToggleComplete} />;
    };
     
    const List = ({ list, onToggleComplete }) => {

      const filteredList = list.filter(menuItem => menuItem.favourite === true);
      
      return(
      <>
      <Header />
        {filteredList.map((menuItem) => (
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice">From {menuItem.price[0]},-</p>
            <img id="arrow" alt="arrow" src={require("../../img/app_POS/arrow.png")} alt="arrow-selector" />
            <img 
              id="favorite"
              alt="favorite"
              src={require("../../img/app_POS/favoriteTrue.png")}
              onClick={() => onToggleComplete(menuItem.productId)}
            />
          </div>
        ))}
      <Footer />
      </>
    )};

export default FavoritesPage;