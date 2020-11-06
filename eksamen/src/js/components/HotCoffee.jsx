import React, { useState } from 'react';
import {menuItems} from '../database.js';
import ProductCard from './ProductCard';

const HotCoffee = (menuItem) => {

  const initialList = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  const [list, setList] = useState(initialList);

  const filteredList = list.filter(menuItem => menuItem.category === "hotCoffee");

  return(
      <div>
        <ProductCard
        list={list}
        setList={setList}
        initialList={initialList}
        key={menuItem.productId}
        filteredList={filteredList}
        />
      </div>
    )
  }

export default HotCoffee;
