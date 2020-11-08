import React, { useState} from 'react';
import { menuItems } from '../../database';
import POS_ProductCard from './POS_ProductCard';

const POS_Foods = (menuItem) => {

  const initialPosList = menuItems.filter(menuItem => menuItem.category === "food");

  const [posList, setPosList] = useState(initialPosList);

  const filteredPosList = posList.filter(menuItem => menuItem.category === "food");

  return(
    <POS_ProductCard
    posList={posList}
    setPosList={setPosList}
    initialPosList={initialPosList}
    key={menuItem.productId}
    filteredPosList={filteredPosList} />
  )


}

export default POS_Foods;