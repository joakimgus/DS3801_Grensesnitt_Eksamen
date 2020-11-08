import React, { useState } from 'react';
import '../css/App.css';
import '../css/ProductCard.css';
import HotCoffee from './components/HotCoffee.jsx';
import Login from './components/Login.jsx';
import MainMenu from './components/MainMenu.jsx';
import UserProfile from './components/UserProfile.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import POS_Footer from './components/POS_Footer';
import More from './components/More.jsx';
import Settings from './components/Settings.jsx';
import Placeholder from './components/PlaceholderComponent.jsx';
import PreviousOrders from './components/PreviousOrders.jsx';
import Cart from './components/Cart.jsx';
import FavoritesPage from './components/FavoritesPage';
import POS_Header from './components/POS_Header';
import POS_ShoppingCart from './components/POS_ShoppingCart';
import POS_HotCoffee from './components/POS_HotCoffee';
import POS_ColdCoffee from './components/POS_ColdCoffee';
import POS_Foods from './components/POS_Foods';
import FavoritesPage from './components/FavoritesPage.jsx';
import Drinks from './components/Drinks.jsx';
import Foods from './components/Foods.jsx';
import QrPage from './components/QrPage';




const App = () => {

  let target;
  function handleClick(e){
      target = e.target.getAttribute('data-render');
      setTarget(target);
      console.log(target + "skrevet fra app.jsx(handleClick()")
  }

  let [where, setWhere] = useState(target);
  function setTarget(){
      setWhere(target);
  }


  let [refresh, setRefresh] = useState(Math.floor(Math.random()*100));
  function setUpdate(){
    setRefresh(Math.floor(Math.random()*100));
  }

function removeItemFromCart(e){
  target = e.target.getAttribute('data-id');

  let temp = JSON.parse(localStorage.getItem('cart'));
  temp.splice(target, 1);
  localStorage.setItem('cart', JSON.stringify(temp));
  setUpdate("update");
}

  return(
    <>
      {where === 'renderFavorites' ? <Header /> : null} {/**Determines whether header should be rendered or not */}

      {

        (where) === 'renderProfile' ? <UserProfile /> :
        (where) === 'renderHome' ? <MainMenu onClick = {handleClick}/> :
        (where) === 'renderMore' ? <More onClick = {handleClick}/> :
        (where) === 'settingsRender' ? <Settings /> :
        (where) === 'personalQrRender' ? <QrPage /> :
        (where) === 'placeholderRender' ? <Placeholder /> :
        (where) === 'previousOrdersRender' ? <PreviousOrders /> :
        (where) === 'renderShoppingCart' ? <Cart onClick = {removeItemFromCart} update={refresh}/> :
        (where) === 'renderFavorites' ? <FavoritesPage /> :
        (where) === 'logoutRender' ? <Login /> :
        (where) === 'coffee' ?  <HotCoffee /> : 
        (where) === 'drinks' ?  <Drinks /> : 
        (where) === 'baked-goods' ?  <Foods /> : 
        <MainMenu onClick = {handleClick}/>/*<-- standard render if nothing is selectes */

      } 
      <Footer 
        data={`${where}`}
        onClick={handleClick}
       />
      
    </>
  )
}

export default App;
