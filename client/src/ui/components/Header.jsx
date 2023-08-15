import React from "react";


const Header = (props) => {

    const setPage = function (value){
        props.setPage(value);

    }

    return <>
    <div className="Header-container">
        <div className="Header-title">Ultimateum</div>
        <div className="Header-link" onClick={() => setPage('home')}>Home</div>
        <div className = "Header-link" onClick={() => setPage('profile')}>Profile</div>
        <div className = "Header-link">Settings</div>
    </div>
    </>
}


export default Header