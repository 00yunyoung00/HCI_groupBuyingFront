import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col, Nav, NavItem, TabContent, TabPane, NavLink, Button, Container } from "reactstrap"
import titleimg from "../image/mario.png";
import classnames from "classnames";

import ItemInformation from "./ItemInformation";
import Notices from "./Notice";
import Editor from "./Editor";
import QnAs from "./QnAs";

import './css/ItemDetail.css'

import img1 from "../image/1_GlitterPurse1.png";
import img2 from "../image/2_GreenJumper.png";
import img3 from "../image/3_Airpod1.jpg";
import img4 from "../image/4_NabyJumper.jpg";
import img5 from "../image/5_Badge.jpg";
import img6 from "../image/6_PhoneCase.jpg";
import img7 from "../image/7_WhiteDopper2.jpg";
import img8 from "../image/8_Hoody1.jpg";

const ItemDetail = ({ match }) =>{
    var pastPath=match.params.path;
    //var itemName=match.params.name;
    var idx=match.params.idx;

    var names=["Glitter Purse ","Ewha-Green Baseball Jumper","Teddy AirPod Case", "1886 Navy Baseball Jumper",
    "Ewha Night Sky Badge", "Ewha Blossom Smartphone Case", "Ewha White Bench Parka", "1886 Hoody"]

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    if(pastPath==="demandSurvey"){
        var btn = <Link to={`/submitForm/${idx}`}><Button>submit</Button></Link>
    }else if(pastPath==="ongoing"){
        btn = <Link to={`/submitForm/${idx}`}><Button>submit</Button></Link>
    }else{
        btn=null
    }
    
    var imgs=[];
    imgs.push(img1);
    imgs.push(img2);
    imgs.push(img3);
    imgs.push(img4);
    imgs.push(img5);
    imgs.push(img6);
    imgs.push(img7);
    imgs.push(img8);
    

    return(
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={`/${pastPath}`}>{pastPath}</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Item</BreadcrumbItem>
            </Breadcrumb>
            <Row>
                <Col me={4}>
                    <img src={imgs[idx-1]} style={{width:'100%', margin:'5%'}}/>
                </Col>
                <Col md={8}>
                    <Container className="itemNameBox">
                        {names[idx-1]}
                    </Container>
                    <Container className="briefInfoBox">
                        brief information
                    </Container>
                    <Container className="priceInfoBox">
                        price : 50,000
                    </Container>
                    <Container className="ButtonBox">
                        {btn}
                    </Container>
                </Col>
            </Row>
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}>
                            ItemDetail
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Notice
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            QnA
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <ItemInformation img={imgs[idx-1]}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Notices />
                    </TabPane>
                    <TabPane tabId="3">
                        <Editor />
                        <QnAs/>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default ItemDetail;