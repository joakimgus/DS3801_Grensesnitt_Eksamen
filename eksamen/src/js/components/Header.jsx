import React from 'react';
import '../../css/Header.css';

const Header = () => {

  return(
    <div id="HeaderContainer">
      <button id="tabOne" className="headerBtn">HOT</button>
      <button id="tabTwo" className="headerBtn">ICED</button>
    </div>
  )

}

export default Header;