import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import SubmitForm from './components/SubmitForm';
import SurveyList from './components/SurveyList';
import SurveyDetail from './components/SurveyDetail';
import Login from './components/Login';
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import { Container } from 'reactstrap';
import Carousel from './components/Carousel'
function useWindow(){ //리사이즈용
  const [size, setSize]=useState([window.innerHeight, window.innerWidth]);
  useEffect(()=>{
    const handleResize=()=>{
      setSize([window.innerHeight, window.innerWidth]);
    };
  window.addEventListener("resize", handleResize);
  },[]);
  return size;
}
const App = () => {
  const sideBarBoxStyle={
      float: 'left',
      marginRight: '50px',
      margin:'20px',
  }

  const contentBoxStyle={
    width: '80%',
    margin:'25px',
    marginLeft:'auto',
    marginRight:'auto',
    paddingRight:'10px',
    overflow:'hidden',
  }

  const mainStyle={
    margin:'20px',
  }

  return (
    <div style={mainStyle}>
      <BrowserRouter>
        <MenuBar />
        <Container style={{overflow:'hidden', marginLeft:'0px', marginRight:'0px', width:'100%', maxWidth:'95%'}}>
          <Row>
            <Col md={2}>
          <div style={sideBarBoxStyle}><SideBar/></div></Col>
          <Col md={10}>
            <Carousel></Carousel>
          <div style={contentBoxStyle}>
            <Route exact path="/" component={ItemList}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/demandSurvey" component={ItemList}/>
            <Route exact path="/surveyDetail" component={SurveyDetail}/>
            <Route exact path="/ongoing" component={ItemList}/>
            <Route exact path="/manufacturing" component={ItemList}/>
            <Route exact path="/finished" component={ItemList}/>
            <Route exact path="/itemDetail/:path/:idx" component={ItemDetail}/>
            <Route exact path="/submitForm/:idx" component={SubmitForm}/>
          </div></Col>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
