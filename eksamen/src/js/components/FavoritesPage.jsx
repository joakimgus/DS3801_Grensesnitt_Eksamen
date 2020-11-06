import React, { useState } from 'react';
import { menuItems } from '../database';
import ProductCard from './ProductCard';

    const FavoritesPage = (menuItem) => {

      const initialList = menuItems.filter(menuItem => menuItem.favourite === true);

      const [list, setList] = useState(initialList);

      const filteredList = list.filter(menuItem => menuItem.favourite === true);

      return (
        <>
          <ProductCard
          list={list}
          setList={setList}
          initialList={initialList}
          key={menuItem.productId}
          filteredList={filteredList} 
          />
          <div id="moveFooter"></div>
        </>
      )
}

export default FavoritesPage;