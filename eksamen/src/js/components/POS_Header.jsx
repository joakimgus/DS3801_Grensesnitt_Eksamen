import React from 'react';
import '../../css/POS_Header.css';
import {posFooterIcons} from '../database.js';

const POS_Header = () => {

  

    return(
      <div id="headerContainer">
        <div id="headerMainBar">
          <h2 id="currentPageText">COFFEE</h2>
        </div>
      </div>
    )
  }


export default POS_Header;