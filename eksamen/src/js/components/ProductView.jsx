import React from 'react';
import {menuItems} from '../database.js';
import '../../css/ProductView.css';

const ProductView = (props) => {
    return(
        <div>
            <div className="cardContainer" key={props.productId}>
                <h3 className="productName">{props.productName}</h3>
                <img className="imgProduct" src={props.productImage} alt={props.productName} />
                <p className="productDescription">{props.description}</p>
                
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