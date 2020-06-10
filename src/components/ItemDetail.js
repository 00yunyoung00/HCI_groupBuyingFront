import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {  Breadcrumb, BreadcrumbItem, Row, Col, Nav, NavItem, TabContent, TabPane, NavLink, Button, Container } from "reactstrap"
import classnames from "classnames";

import ItemInformation from "./ItemInformation";
import Notices from "./Notice";
import Editor from "./Editor";
import QnAs from "./QnAs";

import './css/ItemDetail.css'

const ItemDetail = ({ match }) =>{
    var pastPath=match.params.path;
    //var itemName=match.params.name;
    var idx=match.params.idx;

    
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const items=useSelector(items=>items.items.items);

    var item=null;
    for(var i=0; i<items.length; i++){
        if(items[i].idx===idx){
            item=items[i];
            break;
        }
    }

    if(pastPath==="demandSurvey"){
        var btn = <Link to={`/submitForm/${idx}`}><Button >submit</Button></Link>
    }else if(pastPath==="ongoing"){
        btn = <Link to={`/submitForm/${idx}`}><Button>Join</Button></Link>
    }else{
        btn=null
    }

    return(
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={`/${pastPath}`}>{pastPath}</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Item</BreadcrumbItem>
    </Breadcrumb>
            <Row>
                <Col me={4}>
                    <img src={item.img} style={{width:'100%', margin:'5%'}}/>
                </Col>
                <Col md={8}>
                    <Container className="itemNameBox">
                        {item.name}
                    </Container>
                    <Container className="briefInfoBox">
                        brief information
                    </Container>
                    <Container className="priceInfoBox">
                        price : {item.price}
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
                        <ItemInformation img={item.img}/>
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