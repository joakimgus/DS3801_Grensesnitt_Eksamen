import React from 'react';
import '../../css/QrPage.css';
import Header from './Header';

const QrPage = (props) => {
    return(
        <>
        <Header />
        <div className="qr-page-container">
            <div className="qr-page">
                <h3 className="page-title">QR</h3>
                <hr className="page-title-hr" /><br />
                <p className="page-description">Your personal QR code to register purchases made in store in app.</p>
            </div>
        </div>
        </>
    );

}

export default QrPage;