import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
    <div>
        <nav className="navigation-container">
            <div className="nav-header">
                <Link to="/" className="nav-title text-size-m text-center">The Berry Store</Link>
            </div>
            
            <div className="nav-right-links">
                <Link className="text-style-none text-size-m btn link-btn" to="/" >Login</Link>
                <Link to="/" className="nav-links">
                    <div className="badge">
                        <i className="fas fa-heart badge-icon"></i>
                        <span className="badge-number"></span>
                        
                    </div>
                </Link>
                <Link to="/" className="nav-links">
                    <div className="badge">
                        <i className="fas fa-shopping-cart badge-icon"></i>
                        <span className="badge-number"></span>
                    </div>
                </Link>
            </div>
        </nav>
    </div>
    );
}
