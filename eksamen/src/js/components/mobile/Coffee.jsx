import React, { useState } from 'react';
import {menuItems} from '../../database.js';
import Header from './Header.jsx';
import ProductCard from './ProductCard';

const Coffee = (menuItem) => {

  const initialList = menuItems.filter(menuItem => menuItem.category === "coffee");

  const [list, setList] = useState(initialList);

  const filteredList = list.filter(menuItem => menuItem.category === "coffee");

  return(
    <>
    <Header />
      <div>
        <ProductCard
        list={list}
        setList={setList}
        initialList={initialList}
        key={menuItem.productId}
        filteredList={filteredList}
        />
      </div>
      <div id="moveFooter"></div>
      </>
    )
  }

export default Coffee;
