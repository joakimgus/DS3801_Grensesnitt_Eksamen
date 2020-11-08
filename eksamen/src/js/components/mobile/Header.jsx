import React, { useState } from 'react';
import '../../../css/mobile/Header.css';
import { singleItemProperties } from '../../database';

const Header = (props) => {

    return(
      <div id="mHeaderContainer">
        <button id="lightBtn" className="headerBtn" onClick={props.onClick}>Back</button>
        <button id="darkBtn" className="headerBtn">{props.name}</button>
      </div>
    )
}


export default Header;