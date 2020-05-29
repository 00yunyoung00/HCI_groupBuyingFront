import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import "./css/MenuBar.css";

const MenuBar = () =>{
    return(
        <div style={{display:'flex'}}>
            <div className="logo"><Link to="/">LOGO</Link></div>
            <Navbar expand="md" style={{width:'80%', backgroundColor:'#F2A391', display:'block'}}>
                <Nav style={{}}>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MenuBar;