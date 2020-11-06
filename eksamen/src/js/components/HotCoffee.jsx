import React, { useState } from 'react';
import {menuItems} from '../database.js';
import '../../css/ProductRender.css';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const ProductRender = (menuItem) => {

  const initialList = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  const [list, setList] = useState(initialList);

  const filteredList = list.filter(menuItem => menuItem.category === "hotCoffee");

  return(
      <div>
        <Header />
            <ProductCard
            list={list}
            setList={setList}
            initialList={initialList}
            key={menuItem.productId}
            filteredList={filteredList}
            />
          <Footer />
      </div>
    )
  }

export default ProductRender;
