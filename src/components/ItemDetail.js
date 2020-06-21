import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col, Nav, NavItem, TabContent, TabPane, NavLink, Button, Container } from "reactstrap"
import { FcSpeaker } from "react-icons/fc";
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
import { changePath } from "../modules/path";

import { useSpeechSynthesis } from 'react-speech-kit';

const ItemDetail = ({ match }) =>{
    var pastPath=match.params.path;
    //var itemName=match.params.name;
    var idx=match.params.idx;

    const { speak } = useSpeechSynthesis();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changePath(pastPath));
    }, [dispatch, pastPath])

    
    
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
        var btn = <Link to={`/submitForm/${idx}`}><Button color="info" block>Answer to Survey</Button></Link>
    }else if(pastPath==="ongoing"){
        btn = <Row xs="2">
            <Col xs="8">
            <Link to={`/submitForm/${idx}`}><Button style={{backgroundColor: '#e65e55', borderColor: '#e65e55', textDecorationColor: 'none', marginLeft: '0', marginRight: '0'}} block>Join</Button></Link>
              </Col>
             <Col xs="4">   <Notif/> </Col>
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
         </Breadcrumb> 
    
            <Col style={{fontSize: '2rem', fontWeight: 'bold', textAlign: 'center'}}>{item.name}&nbsp;&nbsp;<FcSpeaker onClick={()=>speak({text:item.name})}/></Col>
            <Row>
                <Col md={6}>
                    <img src={item.img} style={{width:'400px',height:'350px', margin:'5%'}}/>
                </Col>
                <Col md={6}>
<br/>

                
               
                    {pastPath==="ongoing" ?  <Container> <Line percent={percents} strokeWidth="1" trailWidth="1"strokeColor= "#e65e55" />  <span style={{fontSize: '2rem', color: '#e65e55', fontWeight: 'bold'}}>{item.currentNumber}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; people joined : {percents}%</span> </Container>
                    :
                   <Container> <Line percent={percents} strokeWidth="1" trailWidth="1"strokeColor="#60b5d6" /> <span style={{fontSize: '2rem', color: '#60b5d6', fontWeight: 'bold'}}>{item.currentNumber}</span>
                   <span style={{fontSize: '1rem'}}>&nbsp; people joined : {percents}%</span> </Container>
                    
                    }
                    
                    
                   
                   
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

One size fits like a unisex Medium <p/><p/>
                    </Container>
                    <br/>
                    <br/>
                    
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