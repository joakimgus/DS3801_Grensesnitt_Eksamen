import React from 'react';

const HotCoffee = (hotcoffee) => {

    return (
        <div className="productCard">
            {/* {console.log(hotcoffee)} */}
            <img src={hotcoffee.hotcoffee.productImage} alt={hotcoffee.hotcoffee.productName} />
            <p className="productTitle">{hotcoffee.hotcoffee.productName}</p>
            <p className="productPrice">From kr. {hotcoffee.hotcoffee.price[0]},-</p>
        </div>
    )
}

export default HotCoffee;