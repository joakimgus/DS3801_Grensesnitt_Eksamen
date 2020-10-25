import React from 'react';
import icons from "../../img/footer-icons/footer-icons";


const Footer = (props) =>{
    //console.log(icons);


    return(
        <footer>
            <div className="home" onClick={props.onClick}><img src={icons[0].image} alt={icons[0].alt}></img></div>
            <div className="user"><img src={icons[1].image} alt={icons[1].alt}></img></div>
            <div className="favorites"><img src={icons[2].image} alt={icons[2].alt}></img></div>
            <div className="shopping-cart"><img src={icons[3].image} alt={icons[3].alt}></img></div>
            <div className="options"><img src={icons[4].image} alt={icons[4].alt}></img></div>
        </footer>

        
    );
}


export default Footer;