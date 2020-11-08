import React, { useState} from 'react';
import { menuItems } from '../../database';
import POS_ProductCard from './POS_ProductCard';

const POS_HotCoffee = (menuItem) => {

  const initialPosList = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  const [posList, setPosList] = useState(initialPosList);

  const filteredPosList = posList.filter(menuItem => menuItem.category === "hotCoffee");

  return(
    <POS_ProductCard
    posList={posList}
    setPosList={setPosList}
    initialPosList={initialPosList}
    key={menuItem.productId}
    filteredPosList={filteredPosList} />
  )


}

export default POS_HotCoffee;