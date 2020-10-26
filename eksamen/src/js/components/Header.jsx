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
    let btnId = this.state.light ? "darkBtn" : "lightBtn";
    let btnId2 = this.state.light ? "lightBtn" : "darkBtn";

    return(
      <div id="HeaderContainer">
        <button id={btnId} className="headerBtn" onClick={this.changeColor.bind(this)}>HOT</button>
        <button id={btnId2} className="headerBtn" onClick={this.changeColor.bind(this)}>ICED</button>
      </div>
    )
  }
}

export default Header;