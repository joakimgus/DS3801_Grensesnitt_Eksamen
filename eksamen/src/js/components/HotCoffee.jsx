import React from 'react';

const HotCoffee = (hotcoffee) => {

    return (
        <div className="productCard">
            {console.log(hotcoffee)}
            {hotcoffee.hotcoffee.productName}
        </div>
    )
}

export default HotCoffee;