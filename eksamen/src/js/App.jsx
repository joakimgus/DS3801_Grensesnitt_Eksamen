import React, { useState } from 'react';
import '../css/App.css';
import ProductRender from './components/ProductRender.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import MainMenu from './components/MainMenu.jsx';
import UserProfile from './components/UserProfile.jsx';
import Header from './components/Header.jsx';
import POS_Footer from './components/POS_Footer';
import More from './components/More.jsx';
import Settings from './components/Settings.jsx';
import Placeholder from './components/PlaceholderComponent.jsx';
import PreviousOrders from './components/PreviousOrders.jsx';


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
      {

        (where) === 'renderProfile' ? <UserProfile /> :
        (where) === 'renderHome' ? <MainMenu /> :
        (where === 'renderMore') ? <More onClick = {handleClick}/> :
        (where) === 'settingsRender' ? <Settings /> :
        (where) === 'placeholderRender' ? <Placeholder /> :
        (where) === 'previousOrdersRender' ? <PreviousOrders /> :
        <ProductRender />
      } 

      <Footer 
        data={`${where}`}
        onClick={handleClick}
       />
       
    </>
  )
}

export default App;