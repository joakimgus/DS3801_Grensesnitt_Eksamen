import React from 'react';
import '../css/POS_App.css';
import POS_ColdCoffee from './components/POS/POS_ColdCoffee';
import POS_Foods from './components/POS/POS_Foods';
import POS_Footer from './components/POS/POS_Footer';
import POS_Header from './components/POS/POS_Header';
import POS_HotCoffee from './components/POS/POS_HotCoffee';
import POS_ProductCard from './components/POS/POS_ProductCard';
import POS_ShoppingCart from './components/POS/POS_ShoppingCart';
import POS_WorkerSelect from './components/POS/POS_WorkerSelect';


const POS_App = () => {

return (
    <div className='pos-container'>
      <POS_Header />
      <POS_WorkerSelect />
      <POS_ShoppingCart />
      <POS_Foods />
      <POS_Footer />
    </div>
  )
}

export default POS_App;