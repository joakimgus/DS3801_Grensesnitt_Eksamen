import React from 'react';
import '../../css/More.css';


/*
- More
  - Settings
  - Fargevalg for å gjøre sort/hvit?

*/

const More = (props) =>{

    return(
        <div className="more-container">
            <h2>More options</h2>
            <div className="button-container">
                <div className="more-options">
                    <button onClick={props.onClick} data-render="settingsRender">Settings</button>
                </div>

                <div className="more-options">
                    <button onClick={props.onClick} data-render="previousOrdersRender">View previous orders</button>
                </div>

                <div className="more-options">
                    <button onClick={props.onClick} data-render="placeholderRender">Placeholder</button>
                </div>

                <div className="more-options">
                    <button onClick={props.onClick} data-render="placeholderRender">Placeholder</button>
                </div>
            </div>
        </div>
        
    );
}


export default More;