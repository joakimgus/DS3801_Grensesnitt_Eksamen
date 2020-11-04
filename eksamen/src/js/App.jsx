import React from 'react';
import '../css/App.css';
import ProductRender from './components/ProductRender.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import MainMenu from './components/MainMenu.jsx';
import UserProfile from './components/UserProfile.jsx';
import Header from './components/Header.jsx';


const App = () => {
  return(
    <>
      <Header />
      <ProductRender />
      <Footer />
    </>
  )
}

export default App;