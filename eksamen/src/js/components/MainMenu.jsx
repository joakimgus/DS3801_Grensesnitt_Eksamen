import React from 'react';
import '../../css/MainMenu.css';

const MainMenu = () => {

  const coffeeImg = require("../../img/app_POS/Hot-drinks.jpeg");
  const drinksImg = require("../../img/app_POS/Cold-drinks.jpeg");
  const foodImg = require("../../img/app_POS/food.jpeg");

  return(
    <div id="menuCardContainer">
      <div id="coffeeContainer">
        <img className="mainMenuImg" src={coffeeImg}/>
        <h1 classname="mainMenuText">COFFEE</h1>
      </div>
      <div id="drinksContainer">
        <img className="mainMenuImg" src={drinksImg}/>
        <h1 classname="mainMenuText">DRINKS</h1>
      </div>
      <div id="foodContainer">
        <img className="mainMenuImg" src={foodImg}/>
        <h1 classname="mainMenuText">BAKED GOODS</h1>
      </div>
    </div>
  )
}

export default MainMenu;