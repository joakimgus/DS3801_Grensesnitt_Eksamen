import React from 'react';
import { coffee } from '../database';

const Coffee = (coffee) => {

    return (
        <div className="productCard">
            {console.log(coffee)}
            {coffee.coffee.[0].productName}
        </div>
    )
}

export default Coffee;