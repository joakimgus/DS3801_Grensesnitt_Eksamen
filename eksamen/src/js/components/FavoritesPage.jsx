import React, { useState } from 'react';
import { menuItems } from '../database';
import '../../css/Favorites.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductCard from './ProductCard';

    const FavoritesPage = (menuItem) => {

      const initialList = menuItems.filter(menuItem => menuItem.favourite === true);

      const [list, setList] = useState(initialList);

      const filteredList = list.filter(menuItem => menuItem.favourite === true);

      return (
        <>
          <Header />
              <ProductCard
              list={list}
              setList={setList}
              initialList={initialList}
              key={menuItem.productId}
              filteredList={filteredList} 
              />
          <Footer />
        </>
      )
}

export default FavoritesPage;