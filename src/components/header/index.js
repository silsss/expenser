import React from "react";
import "./header.css"

export const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">Expenser<i class="fi fi-rr-credit-card"></i></div>
                <div className="header-button"><a href='https://github.com/silsss' target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i></a></div>
            </div>
        </div>
    )
}
