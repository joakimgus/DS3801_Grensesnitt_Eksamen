import React, { useState } from 'react';
import {menuItems} from '../database.js';
import '../../css/ProductRender.css';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const Drinks = (menuItem) => {

  const initialList = menuItems.filter(menuItem => menuItem.category === "drink");

  const [list, setList] = useState(initialList);

  const filteredList = list.filter(menuItem => menuItem.category === "drink");

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

export default Drinks;
