import React from "react"
import { Link } from "react-router-dom";

import "./css/SideBar.css";

const SideBar = () =>{
    return(
        <div className="vertical-sidebar">
            <Link to="/login">login</Link>
            <Link to="/">my info</Link>
            <hr />
            <Link to="/">My GBlist</Link>
            <Link to="/">HostingList</Link>
            <hr />
            <Link to="/demandSurvey">demandSurvey</Link>
            <Link to="/ongoing">ongoing</Link>
            <Link to="/manufacturing">manufacturing</Link>
            <Link to="/finished">finished</Link>
        </div>
    )
}

export default SideBar;