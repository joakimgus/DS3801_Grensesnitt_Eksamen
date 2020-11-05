import React, { useState } from 'react';
import '../../css/PreviousOrders.css';
import {orderHistory} from '../database';


/* const orderTestObject = [{
    id: 0,
    number: 1001,
    items: ["coffe", "tea", "bagel"],
    total: 322
}];
 */

let target;
const PreviousOrders = (props) =>{
    function viewOrder(e){
        target = parseInt(e.target.getAttribute('data-order')) - 1;
        setRender(target);
        console.log(target);

        HandleOrderNumberRender()
    };

    let [render, setRender] = useState("false");


    //TODO: "Prettify" the output
    function HandleOrderNumberRender(){

        return (
            <div className="order-receipt">
                        <div>
                            <p>Order number: {orderHistory[target].number}</p>
                            <p>- {orderHistory[target].items.map(item => {return (item + "  ")})} -</p>
                            <p>Total: {orderHistory[target].total}kr</p>
                        </div>
            </div>
            
        );
    };


    //TODO: Make this dynamic - generate buttons based on how many previous orders there are in db
    return(
    <div className="previous-orders-page">
        <h4> Select a order from the left to display on right</h4>
            <div className="orders-container">
                <div className="orders-overview">
                    <div>
                        <h1>Orders</h1>
                        <div className="orders-overview">
                            <button onClick={viewOrder} data-order="1">Order: 0001</button>
                            <button onClick={viewOrder} data-order="2">Order: 0002</button>
                            <button onClick={viewOrder} data-order="3">Order: 0003</button>
                            <button onClick={viewOrder} data-order="4">Order: 0004</button>
                            <button onClick={viewOrder} data-order="5">Order: 0005</button>
                            <button onClick={viewOrder} data-order="6">Order: 0006</button>
                            <button onClick={viewOrder} data-order="7">Order: 0007</button>
                        </div>
                    </div>

                </div>

                <div className="orders-display">
                    <h1></h1>
                    <p>These are all placeholder values directly inserted</p>
                    {render === target ? <HandleOrderNumberRender /> : null}
                </div>
            </div>
    </div>
    );
}


export default PreviousOrders;



// <div className="order-receipt">
// {orderHistory.map(items => {
//     return(
//         <div>
//             <p>Order number: {items.number}</p>
//             <p>- {items.items.map(item => {return (item + "  ")})} -</p>
//             <p>Total: {items.total}kr</p>
//         </div>
//     )
// })
// }
// </div>