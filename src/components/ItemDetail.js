import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col, Nav, NavItem, TabContent, TabPane, NavLink, Button, Container } from "reactstrap"
import classnames from "classnames";
import {Line} from 'rc-progress';
import ItemInformation from "./ItemInformation";
import Notices from "./Notice";
import Editor from "./Editor";
import QnAs from "./QnAs";

import "animate.css-react"
import "react-notifications-component/dist/theme.css";
import './css/ItemDetail.css'
import Notif from "./Notification";
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
    var percents=0;   //기본 디폴트 몇 명 찼는지
    percents=(item.currentNumber/item.minimumNumber)*100;
    if(pastPath==="demandSurvey"){
        var btn = <Link to={`/submitForm/${idx}`}><Button >submit</Button></Link>
    }else if(pastPath==="ongoing"){
        btn = <Row xs="2"><Col xs="9"><Link to={`/submitForm/${idx}`}><Button style={{backgroundColor: '#e65e55', borderColor: '#e65e55', textDecorationColor: 'none'}} block>Join</Button></Link>
                </Col>
                <Col xs="3"><Notif/></Col>
        </Row>
    
    }else{
        btn=null
    }

    return(
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={`/${pastPath}`}>{pastPath}</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Item</BreadcrumbItem>
    </Breadcrumb> <Col style={{fontSize: '2rem', fontWeight: 'bold', textAlign: 'center'}}>{item.name}<br/></Col>
            
            <Row>
               
                <Col me={4}>
                    <img src={item.img} style={{width:'100%', margin:'5%'}}/>
                </Col>
                <Col md={8}>

                <Container><Line percent={percents} strokeWidth="1" trailWidth="1" strokeColor="#e65e55" />
      
                    <span style={{fontSize: '2rem', color: '#e65e55', fontWeight: 'bold'}}>{item.currentNumber}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; people joined : {percents}%</span>
                    </Container>
                    <Container>
                    <span style={{fontSize: '2rem', color: '#666666', fontWeight: 'bold'}}>{item.leftDate}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; days to go</span>
                   </Container>
                   <Container>
                    <span style={{fontSize: '2rem', color: '#666666', fontWeight: 'bold'}}>{item.price}</span>
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