





/*
import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import HamburgerMenu from "../hamburger/HamburgerMenu.js";
import "../hamburger/index.css";
import "./css/MenuBar.css";

  const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
  };
const MenuBar = () =>{
    return(
        <div style={{display:'flex'}}>
            <HamburgerMenu/>
            <Navbar expand="md" style={{width:'80%', backgroundColor:'#F2A391', display:'block'}}>
                <Nav style={{}}>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/demandSurvey" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/ongoing" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/manufacturing" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                    <NavItem className="menu" style={{width:'20%'}}><NavLink href="/finished" style={{color:'#fff'}}>메뉴</NavLink></NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MenuBar;


/*
<NavItem style={styles}>
                    <Hello name="Create cool burger menu using reactjs-popup" />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
                    </NavItem>
*/