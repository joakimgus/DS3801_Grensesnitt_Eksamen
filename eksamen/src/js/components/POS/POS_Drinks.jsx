import React, { useState} from 'react';
import { menuItems } from '../../database';
import POS_ProductCard from './POS_ProductCard';

const POS_Drinks = (menuItem) => {

  const initialPosList = menuItems.filter(menuItem => menuItem.category === "drink");

  const [posList, setPosList] = useState(initialPosList);

  const filteredPosList = posList.filter(menuItem => menuItem.category === "drink");
  filteredPosList.sort((a, b) => a.productName.localeCompare(b.productName, 'en', {'sensitivity': 'base'}));

  return(
    <POS_ProductCard
    posList={posList}
    setPosList={setPosList}
    initialPosList={initialPosList}
    key={menuItem.productId}
    filteredPosList={filteredPosList} />
  )


}

export default POS_Drinks;