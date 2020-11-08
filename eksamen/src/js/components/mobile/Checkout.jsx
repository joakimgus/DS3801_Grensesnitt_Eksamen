import React from 'react';
import '../../../css/mobile/Checkout.css';



const Checkout = (props) => {

    return (
        <>
            <div className="checkout">
                <h3>Thank you!</h3>
                <p>Your order is on the way!</p>
                <button className="return-to-start" onClick={props.onClick} data-render="renderHome">Return to homepage</button>
            </div>
        </>
    );

}






export default Checkout;
