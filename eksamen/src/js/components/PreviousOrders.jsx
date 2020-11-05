import React from 'react';
import '../../css/PreviousOrders.css';


/*
- More
  - Settings
  - Fargevalg for å gjøre sort/hvit?

*/

const PreviousOrders = (props) =>{

    return(
        <div className="orders-container">
            <div className="orders-overview">
                <div>
                    <h2>Orders</h2>
                </div>

                <div>Order 1</div>
                <div>Order 2</div>
                <div>Order 3</div>
            </div>

            <div className="orders-display">
                coffe, ice etc 
                <p>These are all placeholder values directly inserted</p>
            </div>
        </div>
    );
}


export default PreviousOrders;