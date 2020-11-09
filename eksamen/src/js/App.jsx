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
import Checkout from './components/mobile/Checkout';




const App = (props) => {

  let target;
  function handleClick(e) {
    target = e.target.getAttribute('data-render');

    if (target === "checkout") {
      localStorage.clear();
    }
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

  /* {where === 'renderFavorites' ? <Header /> : null}  */
  return (
    <>

      <div data-windowSize={props.data}>
        {where === 'previousOrdersRender' ? <Header name="Previous Orders" onClick={handleClick} /> : null}
        {where === 'coffee' ? <Header name="Coffee" onClick={handleClick} /> : null}
        {where === 'drinks' ? <Header name="Drinks" onClick={handleClick} /> : null}
        {where === 'baked-goods' ? <Header name="Pasteries" onClick={handleClick} /> : null}
        {where === 'renderFavorites' ? <Header name="Favorites" onClick={handleClick} /> : null}
        {where === 'renderProfile' ? <Header name='Profile' onClick={handleClick} /> : null}
        {where === 'renderShoppingCart' ? <Header name='Cart' onClick={handleClick} /> : null}
        {where === 'renderMore' ? <Header name='Options' onClick={handleClick} /> : null}
        {where === 'personalQrRender' ? <Header name='Qr' onClick={handleClick} /> : null}

        {

          (where) === 'renderProfile' ? <UserProfile /> :
            (where) === 'renderHome' ? <MainMenu onClick={handleClick} /> :
              (where) === 'renderMore' ? <Options onClick={handleClick} /> :
                (where) === 'settingsRender' ? <Settings /> :
                  (where) === 'personalQrRender' ? <QrPage /> :
                    (where) === 'placeholderRender' ? <Placeholder /> :
                      (where) === 'previousOrdersRender' ? <PreviousOrders /> :
                        (where) === 'renderShoppingCart' ? <Cart remove={removeItemFromCart} checkout={handleClick} update={refresh} /> :
                          (where) === 'renderFavorites' ? <FavoritesPage /> :
                            (where) === 'logoutRender' ? <Login /> :
                              (where) === 'coffee' ? <Coffee /> :
                                (where) === 'drinks' ? <Drinks /> :
                                  (where) === 'baked-goods' ? <Foods /> :
                                    (where) === 'checkout' ? <Checkout onClick={handleClick} /> :
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
