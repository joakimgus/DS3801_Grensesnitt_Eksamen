import React from 'react';
import '../css/App.css';
import Header from './components/Header.jsx';
import ProductRender from './components/ProductRender.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import MainMenu from './components/MainMenu.jsx';
import ProductView from './components/ProductView.jsx';


const App = () => {
  return(
    <>
      <ProductView />
      <Footer />
    </>
  )
}

export default App;