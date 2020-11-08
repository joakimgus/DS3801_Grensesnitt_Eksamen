import React from 'react';
import '../../../css/mobile/Options.css';


/*
- More
  - Settings
  - Fargevalg for å gjøre sort/hvit?

*/

const Options = (props) =>{

    const settingsicon = require("../../../img/mobile-icons/settings.png");

    return(
        <div className="morepage">
            <div className="more-container">
                <p>Options</p>
                <img id="settingsIcon" src={settingsicon} alt="Settings icon" />
                <hr id="hrMore" />
                <div className="button-container">
                    <div className="more-options">
                        <button onClick={props.onClick} data-render="settingsRender">Settings</button>
                    </div>

                    <div className="more-options">
                        <button onClick={props.onClick} data-render="previousOrdersRender">Previous orders</button>
                    </div>

                    <div className="more-options">
                        <button onClick={props.onClick} data-render="personalQrRender">QR</button>
                    </div>

                    <div className="more-options">
                        <button onClick={props.onClick} data-render="placeholderRender">Placeholder</button>
                    </div>
                    <div className="more-options">
                        <button onClick={props.onClick} data-render="logoutRender">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Options;