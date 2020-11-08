import React, { useState} from 'react';
import { menuItems } from '../../database';
import POS_ProductCard from './POS_ProductCard';

const POS_Coffee = (menuItem) => {

  const initialPosList = menuItems.filter(menuItem => menuItem.category === "coffee");

  const [posList, setPosList] = useState(initialPosList);

  const filteredPosList = posList.filter(menuItem => menuItem.category === "coffee");
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

export default POS_Coffee;