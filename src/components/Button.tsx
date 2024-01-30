import React from "react";

interface IButton {
    text:string;
    action:string;
    className?:string;
}

const Button = ({className="", text, action, ...props }:IButton) => {
    return (
        <button className={`button ${action}_button`}>
            {text}
        </button>
    )
}

export default Button;