import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import ItemList from './components/ItemList';
import ItemListContainer from './container/itemListContainer';
import ItemDetail from './components/ItemDetail';
import SubmitForm from './components/SubmitForm';
import SurveyList from './components/SurveyList';
import SurveyDetail from './components/SurveyDetail';
import Login from './components/Login';
import Footer from './components/Footer';
import { Container } from 'reactstrap';
import BurgerNavbar from './hamburger/BurgerNavbar';
import UserContainer from './container/userContainer'
import MyList from './components/MyList';
import AddNewGB from './components/AddNewGB';
import ReactNotification from "react-notifications-component"
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
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
  };
  const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
  };
  const sideBarBoxStyle={
      float: 'left',
      marginRight: '50px',
      margin:'20px',
  }

  const contentBoxStyle={
    width: '90%',
    margin:'25px',
    /*
    marginLeft:'auto',
    marginRight:'auto',
    paddingRight:'auto',
    paddingLeft:'auto',
    overflow:'hidden',
    alignContent:'center',*/
    margin: '0 auto'
  }

  const mainStyle={
    margin:'20px',
  }

  return (
    <div style={mainStyle}>
      <ReactNotification/>
      <BrowserRouter>
      <p>
        <UserContainer/></p>
        <Container style={{overflow:'hidden',width:'95%', maxWidth:'100%'}}
        >
          <Row>
            <Col md={2}></Col>
        <Col md={10}>
          <div style={{overflow:'hidden',width:'80%', maxWidth:'100%'}}>
            {/*contentBoxStyle}*/}
            <Route exact path="/" component={ItemListContainer}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/demandSurvey" component={ItemListContainer}/>
            <Route exact path="/surveyDetail" component={SurveyDetail}/>
            <Route exact path="/ongoing" component={ItemListContainer}/>
            <Route exact path="/manufacturing" component={ItemListContainer}/>
            <Route exact path="/finished" component={ItemListContainer}/>
            <Route exact path="/itemDetail/:path/:idx" component={ItemDetail}/>
            <Route exact path="/submitForm/:idx" component={SubmitForm}/>
            <Route exact path="/myGBList" component={MyList}/>
            <Route exact path="/newGB" component={AddNewGB}/>
          </div></Col>
          
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
