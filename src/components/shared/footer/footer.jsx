import React from "react";
import "./footer.css";

export default function Footer(){
    return (
        <div>
            <footer className="footer">
                <div className="footer-header text-center text-size-normal">Made with code by Nagashree Hegde</div>
                <ul className="social-links flex ">
                    <li className="social-link-list">
                        <a className="link" href="https://github.com/Nagashree01" rel="noreferrer">
                        <i className="fab fa-github text-size-m"></i></a>
                    </li>
                    <li className="social-link-list">
                        <a className="link" href="https://www.linkedin.com/in/nagashree-hegde-96876417b/" rel="noreferrer">
                        <i className="fab fa-linkedin-in text-size-m"></i></a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
