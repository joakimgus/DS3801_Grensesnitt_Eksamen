import React from 'react';
import '../../css/MainMenu.css';

const MainMenu = () => {

  const coffeeImg = require("../../img/app_POS/Hot-drinks.jpeg");
  const drinksImg = require("../../img/app_POS/Cold-drinks.jpeg");
  const foodImg = require("../../img/app_POS/food.jpeg");

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