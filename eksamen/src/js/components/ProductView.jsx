import React from 'react';
import {menuItems} from '../database.js';
import '../../css/ProductView.css';

const ProductView = () => {
    return(
        <div>
            <div className="cardContainer" key={menuItems[0].productId}>
                <h3 className="productName">{menuItems[0].productName}</h3>
                <img className="imgProduct" src={menuItems[0].productImage} alt={menuItems[0].productName} />
                <p className="productDescription">{menuItems[0].description}</p>
                
                {/* Buttons for Quantity/Shots/Size/Milk */}
                <div className="tweakContainer">
                <label className="quantityLabel">Quantity :</label>
                {/* Insert button component here for +/- quantity */}

                <label className="sizeLabel">Size :</label>
                </div>


            </div>
        </div>
    )
}

export default ProductView;