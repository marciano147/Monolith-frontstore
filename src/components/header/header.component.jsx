import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

const Header = () => (
    <div className="header">
        <div className="company"> Monolith Storefront </div>
            <Link className="link" to="/" > Home </Link>
    </div>
)

export default Header