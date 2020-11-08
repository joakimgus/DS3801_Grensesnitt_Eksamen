import React from 'react';
import '../../../css/mobile/Header.css';

class Header extends React.Component {

  constructor(){
    super()

    this.state = {
      light: true
    }
  }

  changeColor(){
    this.setState({light: !this.state.light})
  }

  render(){
    let btnId = this.state.light ? "lightBtn" : "darkBtn";
    let btnId2 = this.state.light ? "darkBtn" : "lightBtn";

    return(
      <div id="mHeaderContainer">
        <button id={btnId} className="headerBtn" onClick={this.changeColor.bind(this)}>HOT</button>
        <button id={btnId2} className="headerBtn" onClick={this.changeColor.bind(this)}>ICED</button>
      </div>
    )
  }
}

export default Header;

import React, { useState } from 'react';
import '../../../css/mobile/Header.css';

const Header = () => {

  const [light, setLight] = useState(true);



  function changeColor(){
    setLight(false);
  }

  let btnId = this.state.light ? "lightBtn" : "darkBtn";
  let btnId2 = this.state.light ? "darkBtn" : "lightBtn";



    return(
      <div id="mHeaderContainer">
        <button id={btnId} className="headerBtn" onClick={changeColor}>HOT</button>
        <button id={btnId2} className="headerBtn" onClick={changeColor}>ICED</button>
      </div>
    )
}


export default Header;