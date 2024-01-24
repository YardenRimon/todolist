import React, { ReactNode } from "react";

interface IContainer {
    children:ReactNode;
    className:string;
}

const Container = ({children, className="", ...props}:IContainer) => {
    return (
        <div className={`container ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Container;