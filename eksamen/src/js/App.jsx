import React, { useState } from 'react';
import '../css/App.css';
import ProductRender from './components/ProductRender.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import MainMenu from './components/MainMenu.jsx';
import UserProfile from './components/UserProfile.jsx';
import Header from './components/Header.jsx';
import POS_Footer from './components/POS_Footer';


const App = () => {

  let target;
  function handleClick(e){
      target = e.target.getAttribute('data-render');
      setTarget(target);
      console.log(target + "skrevet fra app.jsx(handleClick()")
  }

  let [where, setWhere] = useState(target);
  function setTarget(){
      setWhere(target);
  }


  return(
    <>
      {(where) === 'renderProfile' ? <UserProfile /> : (where) === 'renderHome' ? <MainMenu /> : <ProductRender />} 
      <POS_Footer 
        data={`${where}`}
        onClick={handleClick}
       />
    </>
  )
}

export default App;