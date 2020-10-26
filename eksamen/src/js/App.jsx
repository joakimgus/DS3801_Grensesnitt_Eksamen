import React from 'react';
import '../css/App.css';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import MainMenu from './components/MainMenu.jsx';
import ProductRender from './components/ProductRender.jsx';
import Footer from './components/Footer.jsx';


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