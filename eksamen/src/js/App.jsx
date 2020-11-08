import React, { useState } from 'react';
import '../css/App.css';
import Cart from './components/mobile/Cart';
import Drinks from './components/mobile/Drinks';
import FavoritesPage from './components/mobile/FavoritesPage';
import Foods from './components/mobile/Foods';
import Footer from './components/mobile/Footer';
import Header from './components/mobile/Header';
import Coffee from './components/mobile/Coffee';
import Login from './components/mobile/Login';
import MainMenu from './components/mobile/MainMenu';
import Options from './components/mobile/Options';
import Placeholder from './components/mobile/PlaceholderComponent';
import PreviousOrders from './components/mobile/PreviousOrders';
import QrPage from './components/mobile/QrPage';
import Settings from './components/mobile/Settings';
import UserProfile from './components/mobile/UserProfile';




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

  return (
    <>
      <div data-windowSize={props.data}>
        {where === 'renderFavorites' ? <Header /> : null} {/**Determines whether header should be rendered or not */}

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
                              (where) === 'coffee' ? <Coffee /> :
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
