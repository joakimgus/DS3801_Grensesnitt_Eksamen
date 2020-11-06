import React, { useState } from 'react';
import {menuItems} from '../database.js';
import '../../css/ProductRender.css';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const Foods = (menuItem) => {

  const initialList = menuItems.filter(menuItem => menuItem.category === "food");

  const [list, setList] = useState(initialList);

  const filteredList = list.filter(menuItem => menuItem.category === "food");

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

export default Foods;