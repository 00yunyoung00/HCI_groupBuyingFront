import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col, Nav, NavItem, TabContent, TabPane, NavLink, Button, Container } from "reactstrap"
import classnames from "classnames";

import {Line} from 'rc-progress';


import { changePath } from '../modules/path'

import ItemInformation from "./ItemInformation";
import Notices from "./Notice";
import Editor from "./Editor";
import QnAs from "./QnAs";

import './css/ItemDetail.css'

const ItemDetail = ({ match }) =>{

    const dispatch=useDispatch();
    
    var pastPath=match.params.path;
    //var itemName=match.params.name;
    var idx=match.params.idx;
    
    
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const items=useSelector(items=>items.items.items);

    useEffect(()=>{
        dispatch(changePath(pastPath));
    }, [dispatch, pastPath]);


    var item=null;
    for(var i=0; i<items.length; i++){
        if(items[i].idx===idx){
            item=items[i];
            break;
        }
    }
    var percents=0;   //기본 디폴트 몇 명 찼는지
    percents=(item.currentNumber/item.minimumNumber)*100;
    if(pastPath==="demandSurvey"){
        var btn = <div><Link to={`/submitForm/${idx}`}><Button >submit</Button></Link>  current:{item.currentNumber}/minimum:{item.minimumNumber}</div>
    }else if(pastPath==="ongoing"){
        btn = <Link to={`/submitForm/${idx}`}><Button style={{backgroundColor: '#e65e55', borderColor: '#e65e55'}} block>Join</Button></Link>
        
    
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
                <Container><Line percent={percents} strokeWidth="1" trailWidth="1" strokeColor="#e65e55" />
                
                    <span style={{fontSize: '3rem', color: '#e65e55', fontWeight: 'bold'}}>{item.currentNumber}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; people joined : {percents}%</span>
                   <br/>
                   <span style={{fontSize: '3rem', color: '#404040', fontWeight: 'bold'}}>{item.price}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; Korean won</span>
                   
                    </Container>
                    <Container className="briefInfoBox">
                        This is simple item design. But,  4th OFFICIAL BASEBALL JUMPER RARE [EWHA SELLER].

MINT CONDITION NEVER WORN

ORIGINAL TAG

TAKEN OUT OF BAG FOR PHOTOS ONLY

One size fits like a unisex Medium <p/>
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