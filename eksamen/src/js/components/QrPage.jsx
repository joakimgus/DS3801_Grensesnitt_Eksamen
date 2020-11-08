import React from 'react';
import '../../css/QrPage.css';
import Header from './Header';

const QrPage = (props) => {

    const qrCode = require("../../img/app_POS/qr-code.png");

    return(
        <>
        <Header />
        <div className="qr-page-container">
            <div className="qr-page">
                <h3 className="page-title">QR</h3>
                <hr className="page-title-hr-qr" /><br />
                <p className="page-description">Your personal QR code to register purchases made in store in app.</p>
                <div className="qr-container">
                    <img id='qr-code-img' src={qrCode} alt="QR Code" width="80%" />
                    <p className="qr-text">SCAN ME!</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default QrPage;