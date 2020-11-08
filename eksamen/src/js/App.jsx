import React, { useState } from 'react';
import '../css/App.css';
import HotCoffee from './components/mobile/HotCoffee';
import Login from './components/mobile/Login';
import MainMenu from './components/mobile/MainMenu';
import UserProfile from './components/mobile/UserProfile';
import Header from './components/mobile/Header';
import Footer from './components/mobile/Footer';
import POS_Footer from './components/POS/POS_Footer';
import Options from './components/mobile/Options'
import Settings from './components/mobile/Settings';
import Placeholder from './components/mobile/PlaceholderComponent';
import PreviousOrders from './components/mobile/PreviousOrders';
import Cart from './components/mobile/Cart';
import POS_Header from './components/POS/POS_Header';
import POS_ShoppingCart from './components/POS/POS_ShoppingCart';
import POS_HotCoffee from './components/POS/POS_HotCoffee';
import POS_ColdCoffee from './components/POS/POS_ColdCoffee';
import POS_Foods from './components/POS/POS_Foods';
import FavoritesPage from './components/mobile/FavoritesPage';
import Drinks from './components/mobile/Drinks';
import Foods from './components/mobile/Foods';
import QrPage from './components/mobile/QrPage';




const App = (props) => {

  let target;
  function handleClick(e) {
    target = e.target.getAttribute('data-render');
    setTarget(target);
    console.log(target + "skrevet fra app.jsx(handleClick()")
  }

  let [where, setWhere] = useState(target);
  function setTarget() {
    setWhere(target);
  }


  let [refresh, setRefresh] = useState(Math.floor(Math.random() * 100));
  function setUpdate() {
    setRefresh(Math.floor(Math.random() * 100));
  }

  function removeItemFromCart(e) {
    target = e.target.getAttribute('data-id');

    let temp = JSON.parse(localStorage.getItem('cart'));
    temp.splice(target, 1);
    localStorage.setItem('cart', JSON.stringify(temp));
    setUpdate("update");
  }

  console.log(where + ">------");
  /* {where === 'renderFavorites' ? <Header /> : null}  */
  return (
    <>
    <div data-windowSize={props.data}>
      {where === 'previousOrdersRender' ? <Header name="Previous Orders" onClick={handleClick} /> : null}  
      {where === 'coffee' ? <Header name="Coffee" onClick={handleClick} /> : null}  
      {where === 'drinks' ? <Header name="Drinks" onClick={handleClick}/> : null}  
      {where === 'baked-goods' ? <Header name="Pasteries" onClick={handleClick}/> : null}  
      {where === 'renderFavorites' ? <Header name="Favorites" onClick={handleClick}/> : null}  


      {

        (where) === 'renderProfile' ? <UserProfile /> :
          (where) === 'renderHome' ? <MainMenu onClick={handleClick} /> :
            (where) === 'renderMore' ? <Options onClick={handleClick} /> :
              (where) === 'settingsRender' ? <Settings /> :
                (where) === 'personalQrRender' ? <QrPage /> :
                  (where) === 'placeholderRender' ? <Placeholder /> :
                    (where) === 'previousOrdersRender' ? <PreviousOrders /> :
                      (where) === 'renderShoppingCart' ? <Cart onClick={removeItemFromCart} update={refresh} /> :
                        (where) === 'renderFavorites' ? <FavoritesPage /> :
                          (where) === 'logoutRender' ? <Login /> :
                            (where) === 'coffee' ? <HotCoffee /> :
                              (where) === 'drinks' ? <Drinks /> :
                                (where) === 'baked-goods' ? <Foods /> :
                                  <MainMenu onClick={handleClick} />/*<-- standard render if nothing is selectes */

      }
      <Footer
        data={`${where}`}
        onClick={handleClick}
      />
      </div>
    </>
  )
}

export default App;
