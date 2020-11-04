import React from 'react';
import '../../css/POS_Header.css';

class POS_Header extends React.Component {

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

    return(
      <div id="headerContainer">
        <div id="headerMainBar">
          <h2 id="currentPageText">CAFÉ</h2>
        </div>
      </div>
    )
  }
}

export default POS_Header;