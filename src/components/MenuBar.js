import React from "react"
import { Link } from "react-router-dom";

import "./css/MenuBar.css";

const MenuBar = () =>{
    return(
        <div>
            <ul>
                <li className="logo"><Link to="/">LOGO</Link></li>
                <li className="menu"><Link to="/">메뉴</Link></li>
                <li className="menu"><Link to="/">메뉴</Link></li>
                <li className="menu"><Link to="/">메뉴</Link></li>
                <li className="menu"><Link to="/">메뉴</Link></li>
                <li className="menu"><Link to="/">메뉴</Link></li>
            </ul>
        </div>
    )
}

export default MenuBar;