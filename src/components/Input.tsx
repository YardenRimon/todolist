import React from "react";

interface IInput {
    className?: string;
    placeHolder?:string;
    value?:string;
}

const Input = ({className="", placeHolder="type here", value="", ...props }:IInput) => {
    return (
        <input placeholder={placeHolder} className={`input ${className}`} value={value} />
    )
}

export default Input;