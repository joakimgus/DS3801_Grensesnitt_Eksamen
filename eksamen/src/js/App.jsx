import React, { useState } from 'react';
import '../css/App.css';
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


  return(
    <>
    <Header />
      {

        (where) === 'renderProfile' ? <UserProfile /> :
        (where) === 'renderHome' ? <MainMenu /> :
        (where === 'renderMore') ? <More onClick = {handleClick}/> :
        (where) === 'settingsRender' ? <Settings /> :
        (where) === 'placeholderRender' ? <Placeholder /> :
        (where) === 'previousOrdersRender' ? <PreviousOrders /> :
        (where) === 'renderShoppingCart' ? <Cart /> :
        (where) === 'renderFavorites' ? <FavoritesPage /> :
        (where) === 'logoutRender' ? <Login /> :
        <HotCoffee /> /*<-- standard render if nothing is selectes */
      } 
      <Footer 
        data={`${where}`}
        onClick={handleClick}
       />
      
    </>
  )
}

export default App;