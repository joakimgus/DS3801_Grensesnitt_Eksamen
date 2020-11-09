import React, { useState } from 'react';
import { menuItems, singleItem, singleItemProperties } from '../../database.js';
import '../../../css/mobile/ProductCard.css';
import '../../../css/mobile/SingleView.css';
//import ProductView from './ProductView';
//import Header from './Header.jsx';





let itemHolder = [];
const List = ({ list, setList, filteredList }) => {

  let [all, setAll] = useState("all");

  function handleToggleComplete(id) {

    const newList = list.map((menuItem) => {
      if (menuItem.productId === id) {
        const updatedmenuItem = {
          ...menuItem,
          favourite: !menuItem.favourite,
        };

        return updatedmenuItem;
      }
      return menuItem;
    });

    setList(newList);
  }

  let length = itemHolder.length-1;


  function handleProductView(e) {
    itemHolder = [];
    console.log(itemHolder + "should be empty");
    const productName = e.target.getAttribute('data-product');
    const productList = e.target.getAttribute('data-list');

    setAll("single");

    filteredList.map((singleItem) =>
      singleItem.productName === productName ?

        itemHolder.push(singleItem)

        : null);

    setAll("single");
    
  }


  function handleSetBackToAll() {
    setAll(false);
  }

  function addItemToCart() {
    /*   console.log("Item added!");
      allCartItems.push(singleItem);
      console.log(allCartItems); */
    let temp = JSON.parse(localStorage.getItem("cart")) || [];
    itemHolder.forEach((item) => temp.push(item));
    //temp.push(itemHolder);
    //console.log(temp);
    localStorage.setItem('cart', JSON.stringify(temp));
  }

  function setClickedSpan(e) {
    let span = document.getElementsByClassName("span-click");

    console.log(span);
    for (let i = 0; i < span.length; i++) {
      span[i].style = "color: black";
    }

    e.target.style = "color: white";
    e.target.style.border = "1px solid white";
    e.target.style.borderRadius = "5px";
  }

  function setClickedSpanMilk(e) {
    let span = document.getElementsByClassName("span-click-milk");

    for (let i = 0; i < span.length; i++) {
      span[i].style = "color: black";
    }

    e.target.style.color = "white";
    e.target.style.border = "1px solid white";
    e.target.style.borderRadius = "5px";

  }

  return (
    <>

    {console.log(all)}
      {all != "single" ? filteredList.map((menuItem) => (
        (menuItem.category != "food" ?
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice" alt="price">From {menuItem.price[0]},-</p>
            <img
              id="arrow"
              alt="arrow"
              src={require("../../../img/mobile-icons/arrow.png")}
              data-product={menuItem.productName}
              data-list={menuItem.category}
              onClick={handleProductView}
            />
            <img
              id="favorite"
              alt="favorite"
              alt="favorite status"
              src={menuItem.favourite ? require("../../../img/mobile-icons/favourite-true.png") : require('../../../img/mobile-icons/favourite-false.png')}
              onClick={() => handleToggleComplete(menuItem.productId)}
            />
          </div>
          :
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice" alt="price">From {menuItem.price},-</p>
            <img
              id="arrow"
              alt="arrow"
              src={require("../../../img/mobile-icons/arrow.png")}
              data-product={menuItem.productName}
              data-list={menuItem.category}
              onClick={handleProductView}
            />
            <img
              id="favorite"
              alt="favorite"
              src={menuItem.favourite ? require("../../../img/mobile-icons/favourite-true.png") : require('../../../img/mobile-icons/favourite-false.png')}
              onClick={() => handleToggleComplete(menuItem.productId)}
            />
          </div>

        )))
        : itemHolder[length].category === "coffee" ?
          <div>
            <div className="single-view-container" key={itemHolder[length].productId}>
              <button className="return-button" onClick={handleSetBackToAll} alt="return to favorites button">⬅</button>
              <div className="product-info">
                <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
                <h3 className="productName" alt={itemHolder[length].productName}>{itemHolder[length].productName}</h3>
                <hr className="single-view-divider" />

                <p className="productDescription" alt="description">{itemHolder[length].description}</p>
                <hr className="single-view-divider" />

              </div>
              <div className="product-settings">
                <div className="product-settings-specifics" alt="Quantity"><p>Quantity: </p><p>- 1 +</p></div>
                <hr className="single-view-divider" />

                <div className="product-settings-specifics" alt="shots"><p>Shots:</p><p>- 1 +</p></div>
                <hr className="single-view-divider" />

                <div className="product-settings-specifics-size">
                  <p>Size:</p>
                  <div>
                    <p className="product-p">
                      <div id="small" alt="small size" className="span-click" onClick={setClickedSpan}>
                        <p>S</p>
                        </div>
                      <div id="medium" alt="medium size" className="span-click" onClick={setClickedSpan}>
                        <p>M</p>
                        </div>
                      <div id="large" alt="large size" className="span-click" onClick={setClickedSpan}>
                        <p>L</p>
                      </div>
                    </p>
                  </div>
                </div>
                <hr className="single-view-divider" />

                <div className="product-settings-specifics-milk">
                  <p>Milk:</p>
                  <div>
                    <p className="product-p">
                      <div className="div-click-milk" onClick={setClickedSpanMilk}>
                        <img src={singleItemProperties.noMilk} alt='no milk selection' width='30px' />
                      </div>
                      <div className="div-click-milk" onClick={setClickedSpanMilk}>
                        <img src={singleItemProperties.lactoseFree} alt='lactose free selection' width='30px' />
                      </div>
                      <div className="div-click-milk" onClick={setClickedSpanMilk}>
                        <img src={singleItemProperties.milk} alt='extra milk selection' width='30px' />
                      </div>
                    </p>
                  </div>
                </div>
                <hr className="single-view-divider" />

                <div className="product-settings-specifics"><p>Total: </p><p>Kr {itemHolder[length].price[1] || itemHolder[length].price},-</p></div>
                <div className="product-settings-specifics"></div>
                <button className="add-to-cart" onClick={addItemToCart} alt="add item to cart">add to cart</button>
              </div>
              {/* Buttons for Quantity/Shots/Size/Milk */}

            </div>
          </div>
          : itemHolder[length].category === "drink" ?

            <div>
              <div className="single-view-container" key={itemHolder[length].productId}>
                <button className="return-button" onClick={handleSetBackToAll} alt="return to favorites button">⬅</button>
                <div className="product-info">
                  <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
                  <h3 className="productName">{itemHolder[length].productName}</h3>
                  <hr className="single-view-divider" />

                  <p className="productDescription" alt="description">{itemHolder[length].description}</p>
                  <hr className="single-view-divider" />

                </div>
                <div className="product-settings">
                  <div className="product-settings-specifics" alt="quantity"><p>Quantity: </p><p>- 1 +</p></div>
                  <hr className="single-view-divider" />

                  <div className="product-settings-specifics-size">
                    <p alt="size">Size:</p>
                    <div>
                      <p className="product-p">
                        <img src={singleItemProperties.coffe} id="small" alt="small size" className="span-click" onClick={setClickedSpan} />
                        <img src={singleItemProperties.coffe} id="medium" alt="medium size" className="span-click" onClick={setClickedSpan} />
                        <img src={singleItemProperties.coffe} id="large" alt="large size" className="span-click" onClick={setClickedSpan} />
                      </p>
                    </div>
                  </div>
                  <hr className="single-view-divider" />

                  <div className="product-settings-specifics-milk">
                    <p>Allergies:</p>
                    <div>
                      <p className="product-p">
                        {itemHolder[length].allergies}
                      </p>
                    </div>
                  </div>
                  <hr className="single-view-divider" />

                  <div className="product-settings-specifics"><p>Total: </p><p>Kr {itemHolder[length].price[1] || itemHolder[length].price},-</p></div>
                  <div className="product-settings-specifics"></div>
                  <button className="add-to-cart" onClick={addItemToCart}>add to cart</button>
                </div>
                {/* Buttons for Quantity/Shots/Size/Milk */}

              </div>
            </div>
            : itemHolder[length].category === "food" ?
              <div>
                <div className="single-view-container" key={itemHolder[length].productId}>
                  <button className="return-button" onClick={handleSetBackToAll} alt="return to favorites button">⬅</button>
                  <div className="product-info">
                    <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
                    <h3 className="productName">{itemHolder[length].productName}</h3>
                    <hr className="single-view-divider" />

                    <p className="productDescription" alt="description">{itemHolder[length].description}</p>
                    <hr className="single-view-divider" />

                  </div>
                  <div className="product-settings">
                    <div className="product-settings-specifics" alt="quantity"><p>Quantity: </p><p>- 1 +</p></div>
                    <hr className="single-view-divider" />

                    <div className="product-settings-specifics-milk">
                      <p>Allergies:</p>
                      <div>
                        <p className="product-p">
                          {itemHolder[length].allergies}
                        </p>
                      </div>
                    </div>
                    <hr className="single-view-divider" />

                    <div className="product-settings-specifics"><p>Total: </p><p>Kr {itemHolder[length].price[1] || itemHolder[length].price},-</p></div>
                    <div className="product-settings-specifics"></div>
                    <button className="add-to-cart" onClick={addItemToCart}>add to cart</button>
                  </div>
                  {/* Buttons for Quantity/Shots/Size/Milk */}

                </div>
              </div>
              : null
      }
      <div id="moveFooter"></div>
    </>
  )
}
export default List;

