import React, { useState } from 'react';
import '../css/Pos.css'
import '../css/POS/POS_Footer.css';
import '../css/POS/POS_Header.css';
import '../css/POS/POS_ProductCard.css';
import '../css/POS/POS_ShoppingCart.css';
import '../css/POS/POS_WorkerSelect.css';
import POS_Header from './components/POS/POS_Header.jsx';
import POS_Foods from './components/POS/POS_Foods.jsx';
import POS_Footer from './components/POS/POS_Footer.jsx';
import POS_Coffee from './components/POS/POS_Coffee.jsx';
import POS_Drinks from './components/POS/POS_Drinks';
import POS_ProductCard from './components/POS/POS_ProductCard.jsx';
import POS_ShoppingCart from './components/POS/POS_ShoppingCart.jsx';
import POS_WorkerSelect from './components/POS/POS_WorkerSelect.jsx';
import POS_OrderType from './components/POS/POS_OrderType.jsx';

import POS_Calculator from './components/POS/POS_Calculator';



const Pos = (props) => {

  let target;
  function handleClick(e) {
    target = e.target.getAttribute('data-render');
    console.log(target + "skrevet fra Pos.jsx (handleclick())")
    setTarget(target);
    setUpdate();
  }

  let [where, setWhere] = useState("renderCoffee");
  function setTarget() {
    setWhere(target);
  }

  
  
  let [refresh, setRefresh] = useState(Math.floor(Math.random() * 100));
  function setUpdate() {
    setRefresh(Math.floor(Math.random() * 100));
    console.log("setUpdate called");
  }
  



  function removeItemFromCart(e) {
      target = e.target.getAttribute('data-id');
      console.log(e.target);
      console.log(target + " <----");
      let temp = JSON.parse(localStorage.getItem('POS_cart'));
      temp.splice(parseInt(target), 1);
      localStorage.setItem('POS_cart', JSON.stringify(temp));
      setUpdate();
    }



  {/*
  document.addEventListener("click", function() {
    {setUpdate()}
  }) */}
  

  return (
    <>
      <div className='pos-container' data-windowSize={props.data}>
        <POS_Header />
        <POS_WorkerSelect />
        <POS_ShoppingCart  update={refresh} removeItemFromCart={removeItemFromCart}/>
          {
            (where) === 'renderCoffee' ? <POS_Coffee /> :
            (where) === 'renderDrinks' ? <POS_Drinks /> : 
            (where) === 'renderFood' ? <POS_Foods /> : 
            <POS_Coffee  />
          }

        <POS_Footer onClick={handleClick}/>
      </div>
    </>
  )
}
export default Pos;
