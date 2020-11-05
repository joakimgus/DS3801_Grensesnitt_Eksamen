import React from 'react';
import '../../css/Header.css';

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
      <div id="HeaderContainer">
        <button id={btnId} className="headerBtn" onClick={this.changeColor.bind(this)}>BACK</button>
        <button id={btnId2} className="headerBtn" onClick={this.changeColor.bind(this)}>FAVORITES</button>
      </div>
    )
  }
}

export default Header;