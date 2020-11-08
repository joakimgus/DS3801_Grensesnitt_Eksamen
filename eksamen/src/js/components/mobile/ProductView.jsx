import React from 'react';
import {menuItems, singleItem} from '../database.js';
import '../../../css/mobile/ProductView.css';

//Denne er ikke i bruk
const ProductView = (props) => {

    return(
        <div>
            <div className="cardContainer" key={singleItem[0].productId}>
                <h3 className="productName">{singleItem[0].productName}</h3>
                <img className="imgProduct" src={singleItem[0].productImage} alt={singleItem[0].productName} />
                <p className="productDescription">{singleItem[0].description}</p>
                
                {/* Buttons for Quantity/Shots/Size/Milk */}
                <div className="tweakContainer">
                <label className="quantityLabel">Quantity : { singleItem.name}</label>
                {/* Insert button component here for +/- quantity */}

                <label className="sizeLabel">Size :</label>
                </div>


            </div>
        </div>
    )
}

export default ProductView;