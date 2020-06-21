import React, { useState, useEffect } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {BsPersonFill} from "react-icons/bs";
import logo from "../image/82PeopleLogo.png"
import AlarmNoficationCart  from "./AlarmNoficationCart.js";

const NavbarPage = ({ user, onLogout }) =>{

  const [collapse1, setCollapseOpen] = useState(false);

  const toggle = () => setCollapseOpen(prevState => !prevState);

  //var isUser = localStorage.getItem('user')==='ok'

  return (
    
    <MDBContainer>
      <MDBNavbar color="amber lighten-4" style={{ marginTop: '20px' }} light>
        <MDBContainer>
          {
            !user? (<MDBNavbarBrand style={{maxWidth:'8%', width:'10%', minWidth:'10%'}}> <Link to="/login" style={{ color: 'black', textDecoration: 'none', fontSize: '15px'}}>{}
                      <BsPersonFill size="24" color="gray"/>&nbsp;Login</Link>
                    </MDBNavbarBrand>) : 
                    (<div><AlarmNoficationCart/><MDBNavbarBrand onClick={onLogout} style={{maxWidth:'8%', width:'10%', minWidth:'10%'}}> 
                    &nbsp;
                    <Link to="/" style={{ color: 'black', textDecoration: 'none', fontSize: '15px'}}>{}
                      Logout</Link>
                    </MDBNavbarBrand></div>)
          }
          <MDBNavbarBrand> <Link to="/" style={{ color: 'black', textDecoration: 'none', fontSize:'2.5rem', textAlign:'center'}}>
            {/*<strong>82 People</strong>*/}
            <img src={logo} width="180px"/>
            </Link>
          </MDBNavbarBrand>
          <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={toggle} />
            <MDBCollapse isOpen={collapse1} navbar>
             <MDBNavbarNav left style={{textAlign: 'center'}}>
            <p/>  <p>  <MDBNavItem >
                  <Link to="/demandSurvey" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Demand Survey</Link>
                </MDBNavItem></p>
               <p> <MDBNavItem active>
                  <Link to="/ongoing" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ongoing Project</Link>
                </MDBNavItem> </p>
               <p> <MDBNavItem>
                  <Link to="/myGBList" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Project</Link>
                </MDBNavItem> </p>
                <p> <MDBNavItem>
                  <Link to="/newGB" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Group Buying</Link>
                </MDBNavItem> </p>
              </MDBNavbarNav>
           </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>

  );
}

/*
class NavbarPage extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

if(localStorage.getItem('user'))

render() {
  return (
    
      <MDBContainer>
        <MDBNavbar color="amber lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer>
            <MDBNavbarBrand> <Link to="/login" style={{ color: 'black', textDecoration: 'none'}}>
              <BsPersonFill size="24" color="gray"/>Login</Link>
            </MDBNavbarBrand>
            <MDBNavbarBrand> <Link to="/" style={{ color: 'black', textDecoration: 'none'}}>
              <strong>82 People</strong></Link>
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
               <MDBNavbarNav left style={{textAlign: 'center'}}>
              <p/>  <p>  <MDBNavItem >
                    <Link to="/demandSurvey" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Demand Survey</Link>
                  </MDBNavItem></p>
                 <p> <MDBNavItem active>
                    <Link to="/ongoing" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ongoing Project</Link>
                  </MDBNavItem> </p>
                 <p> <MDBNavItem>
                    <Link to="/finished" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Project</Link>
                  </MDBNavItem> </p>
                  <p> <MDBNavItem>
                    <Link to="/newProject" style={{color: 'gray', textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Group Buying</Link>
                  </MDBNavItem> </p>
                </MDBNavbarNav>
             </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
  
    );
  }
}
*/
export default NavbarPage;