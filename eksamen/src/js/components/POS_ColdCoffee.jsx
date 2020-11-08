import React, { useState} from 'react';
import { menuItems } from '../database';
import POS_ProductCard from './POS_ProductCard';

const POS_ColdCoffee = (menuItem) => {

  const initialPosList = menuItems.filter(menuItem => menuItem.category === "coldCoffee");

  const [posList, setPosList] = useState(initialPosList);

  const filteredPosList = posList.filter(menuItem => menuItem.category === "coldCoffee");

  return(
    <POS_ProductCard
    posList={posList}
    setPosList={setPosList}
    initialPosList={initialPosList}
    key={menuItem.productId}
    filteredPosList={filteredPosList} />
  )

  
}

export default POS_ColdCoffee;