import React, { useState } from 'react';
import { menuItems, singleItem, singleItemProperties } from '../../database.js';
import '../../../css/mobile/ProductCard.css';
import '../../../css/mobile/SingleView.css';


const coffeIcon = {
  src: require('../../../img/mobile-icons/Coffee-icon.png')
}
//"../../img/mobile-icons/Coffee-icon.png";



let itemHolder = [];
const List = ({ list, setList, filteredList }) => {

  let [all, setAll] = useState(false);

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


  function handleProductView(e) {
    itemHolder = [];
    const productName = e.target.getAttribute('data-product');
    const productList = e.target.getAttribute('data-list');
    setAll("single");

    filteredList.map((singleItem) =>
      singleItem.productName.includes(productName) ?

        itemHolder.push(singleItem)

        : null);

  }

  let length = itemHolder.length - 1;

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

  const milk = require('../../../img/mobile-icons/milk.png');
  const noMilk = require('../../../img/mobile-icons/no-milk.png');
  const lactoseFree = require('../../../img/mobile-icons/lactose-free.png');

  return (
    <>
      {all != "single" ? filteredList.map((menuItem) => (
        (menuItem.category != "food" ?
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice">From {menuItem.price[0]},-</p>
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
          :
          <div className="productCard" key={menuItem.productId}>
            <img className="productImage" src={menuItem.productImage} alt={menuItem.productName} />
            <h1 className="productTitle">{menuItem.productName}</h1>
            <p className="productPrice">From {menuItem.price},-</p>
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
        : itemHolder[length].category === "hotCoffee" ?
          <div>
            <div className="single-view-container" key={itemHolder[length].productId}>
              <button className="return-button" onClick={handleSetBackToAll} alt="return to favorites button">⬅</button>
              <div className="product-info">
                <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
                <h3 className="productName">{itemHolder[length].productName}</h3>
                <hr className="single-view-divider" />

                <p className="productDescription">{itemHolder[length].description}</p>
                <hr className="single-view-divider" />

              </div>
              <div className="product-settings">
                <div className="product-settings-specifics"><p>Quantity: </p><p>- 1 +</p></div>
                <hr className="single-view-divider" />

                <div className="product-settings-specifics"><p>Shots:</p><p>- 1 +</p></div>
                <hr className="single-view-divider" />

                <div className="product-settings-specifics-size">
                  <p>Size:</p>
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
                  <p>Milk:</p>
                  <div>
                    <p className="product-p">
                      <div className="div-click-milk" onClick={setClickedSpanMilk}>
                        <img src={noMilk} alt='no milk icon' width='30px' />
                      </div>
                      <div className="div-click-milk" onClick={setClickedSpanMilk}>
                        <img src={lactoseFree} alt='no milk icon' width='30px' />
                      </div>
                      <div className="div-click-milk" onClick={setClickedSpanMilk}>
                        <img src={milk} alt='no milk icon' width='30px' />
                      </div>
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
          : itemHolder[length].category === "drink" ?

            <div>
              <div className="single-view-container" key={itemHolder[length].productId}>
                <button className="return-button" onClick={handleSetBackToAll} alt="return to favorites button">⬅</button>
                <div className="product-info">
                  <img className="imgProduct" src={itemHolder[length].productImage} alt={itemHolder[length].productName} />
                  <h3 className="productName">{itemHolder[length].productName}</h3>
                  <hr className="single-view-divider" />

                  <p className="productDescription">{itemHolder[length].description}</p>
                  <hr className="single-view-divider" />

                </div>
                <div className="product-settings">
                  <div className="product-settings-specifics"><p>Quantity: </p><p>- 1 +</p></div>
                  <hr className="single-view-divider" />

                  <div className="product-settings-specifics-size">
                    <p>Size:</p>
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

                    <p className="productDescription">{itemHolder[length].description}</p>
                    <hr className="single-view-divider" />

                  </div>
                  <div className="product-settings">
                    <div className="product-settings-specifics"><p>Quantity: </p><p>- 1 +</p></div>
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
    </>
  )
}
export default List;

