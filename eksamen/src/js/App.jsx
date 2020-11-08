import React, { useState } from 'react';
import '../css/App.css';
import HotCoffee from './components/HotCoffee.jsx';
import Login from './components/Login.jsx';
import MainMenu from './components/MainMenu.jsx';
import UserProfile from './components/UserProfile.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import POS_Footer from './components/POS_Footer';
import More from './components/More.jsx';
import Settings from './components/Settings.jsx';
import Placeholder from './components/PlaceholderComponent.jsx';
import PreviousOrders from './components/PreviousOrders.jsx';
import Cart from './components/Cart.jsx';
import FavoritesPage from './components/FavoritesPage';
import POS_Header from './components/POS_Header';
import POS_ShoppingCart from './components/POS_ShoppingCart';
import POS_HotCoffee from './components/POS_HotCoffee';
import POS_ColdCoffee from './components/POS_ColdCoffee';
import POS_Foods from './components/POS_Foods';

const App = () => {

return(
  <>
  <POS_Header />
  <POS_Foods />
  <POS_ShoppingCart />
  <POS_Footer />
  </>
)
}
export default App;