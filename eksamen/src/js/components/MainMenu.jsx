import React from 'react';
import '../../css/MainMenu.css';

const MainMenu = () => {

  return(
    <div className="homepage" id="menuCardContainer">

      <div className="homepage" id="coffeeContainer">
        <p className="mainMenuText">COFFEE</p>
      </div>

      <div className="homepage" id="drinksContainer">
        <p className="mainMenuText">DRINKS</p>
      </div>

      <div className="homepage" id="foodContainer">
        <p className="mainMenuText">BAKED GOODS</p>
      </div>

    </div>
  )
}

export default MainMenu;