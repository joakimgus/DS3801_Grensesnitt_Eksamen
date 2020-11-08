import React from 'react';
import '../../css/UserProfile.css';
import { users } from '../database.js';


const UserProfile = (props) => {
    //console.log(icons);
    const couponCoffee = require("../../img/app_POS/free-coffee.png");
    const couponDessert = require('../../img/app_POS/free-dessert.png');

    return (
        <>
            <div className="placeholder-profile-page">
                <div className="profile-container">

                    <div className="edit-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                            <path d="M19.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
                        </svg>
                    </div>
                    <div className="picture-container">
                        {/* <img></img> */}
                        <img src={users[3].userimg} alt="Profile picture" />
                        {/* <div className="profile-picture"></div> { /*placeholder element for actual picture*/}
                    </div>

                    <div className="user-info-container">
                        <h3 className="user-name">{users[3].firstName + " " + users[3].lastName}</h3>
                        <hr id="hr-name"></hr> {/* This is for the underscore under username */}
                    </div>
                    <div className="contact-container">
                        <div className='email'>
                            <span role="img" aria-label='email'>📧</span>
                            placeholder@mail.com{/* INSERT CALL TO ACTION */}
                        </div>
                        <div className="password-manager">
                            <span role='img' aria-label='password-manager'>🔑</span>
                            Manage password{/* INSERT CALL TO ACTION */}
                        </div>

                        <div className="manage-payment-options">
                            <span role='img' aria-label='Manage-payment-options'> 💳 </span>
                            Manage payment options
                    </div>

                    </div>

                    {/* ? PO QUE EXTRACT THIS TO INDEPENDENT COMPONENT? */}
                    <div className="rewards-container">
                        <p>YOUR REWARDS</p>
                        <div className="reward-component">
                            {/* dummy cards - not ideal layout */}
                            {/*<p>⬅</p> */}
                            <div className="reward-card-container">
                                <div className="reward-card" id='free-coffee'>
                                    <img src={couponCoffee} alt="Free Coffee coupon" />
                                </div>
                                <div className="reward-card">
                                    <img src={couponDessert} alt="Free Dessert coupon" />
                                </div>
                            </div>
                            {/*<p>➡</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div id="moveFooter"></div>
        </>


    );
}


export default UserProfile;