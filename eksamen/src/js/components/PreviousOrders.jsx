import React from 'react';
import '../../css/PreviousOrders.css';
import { orderHistory } from '../database';

const PreviousOrders = () => {



    //TODO: Make this dynamic - generate buttons based on how many previous orders there are in db
    return (
        <>
            <div className="previous-orders-page">
                <h3 className="previous-order-title">Previous orders</h3>
                <hr className="page-title-hr" />
                <div className="orders-container">
                    {orderHistory.map(order => {
                        return (
                            <>
                                <div className="order-card">
                                        <p className='receipt-nr'><span role='img' aria-label='emoji receipt'>🧾</span> Order number: <span>{order.number}</span></p>
                                        <div id='order-hr-container'>
                                            <hr  />
                                        </div>
                                        {order.items.map(item => {
                                            return (
                                                <ul id='card-order-ul'>
                                                    <li>{item.quantity} <span>x</span> {item.name}</li>
                                                    <li className='extras'> + {item.size}</li>
                                                </ul>
                                            )
                                        })
                                        }
                                        <p id='total-ordercard'>Total : <span>{order.total}kr</span></p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div id="moveFooter"></div>
        </>
    )
};


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