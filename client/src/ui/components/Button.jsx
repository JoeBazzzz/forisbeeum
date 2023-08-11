import React from "react";

const Button = () => {

    const test = function () {
        document.getElementsByClassName('Popup')[0].classList.toggle('hidden')
    }

    return <div className="Button" onClick={test}>peepee poopoo</div>
} 

export default Button