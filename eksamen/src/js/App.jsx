import React from 'react';
import '../css/App.css';
import ProductRender from './components/ProductRender.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return(
    <>
      <ProductRender />
      <Footer />
    </>
  )
}

export default App;