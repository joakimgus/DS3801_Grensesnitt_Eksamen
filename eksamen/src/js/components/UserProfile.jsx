import React from 'react';
import '../../css/UserProfile.css';
import {users} from '../database.js';


const UserProfile = (props) =>{
    //console.log(icons);
    const arrowimg = require("../../img/app_POS/arrow.png");
    return(
        <div className="placeholder-profile-container">
            <div className="profile-container">
                <div className="picture-container">
                    {/* <img></img> */}
                    <img src={users[3].userimg}></img>
                    {/* <div className="profile-picture"></div> { /*placeholder element for actual picture*/ }
                </div>

                <div className="contact-container">
                    <h1 className="user-name">{users[3].firstName + " " + users[3].lastName}</h1>
                    <hr id="hr-name"></hr> {/* This is for the underscore under username */} 

                    <div className="e-mail">
                        <p> {/* INSERT ICON */}✉️ hei@jonjohannes.no {/* INSERT CALL TO ACTION */}</p>
                    </div>

                    <div className="password-manager">
                        <p>{/* INSTERT ICON */} 🔑 Manage password{/* INSERT CALL TO ACTION */}</p>
                    </div>
                </div>

                {/* ? PO QUE EXTRACT THIS TO INDEPENDENT COMPONENT? */}
                <div className="rewards-container">
                    <p>YOUR REWARDS</p>
                    <div className="reward-component">
                        {/* dummy cards - not ideal layout */}
                        {/*<p>⬅</p> */}
                        <div className="reward-card-container">
                            <div className="reward-card"></div>
                            <div className="reward-card"></div>
                            <div className="reward-card"></div>
                            <div className="reward-card"></div>
                        </div>
                        {/*<p>➡</p> */}
                    </div>
                </div>

                {/* payment and recepits */}
                <div className="payment-and-receipts">
                    <div className="manage-payment-options">
                        <p>💳Manage payment options</p>
                    </div>

                    <div className="user-receipts">
                        <p>🧾My receipts</p>
                    </div>
                </div>
{/**test */} 
                <div>
                    <button type="button" name="logout" className="logout-button"> 👋 LOGOUT</button>
                </div>
            </div>
        </div>

        
    );
}


export default UserProfile;