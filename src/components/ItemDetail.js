import React, { useState } from "react"
import { Breadcrumb, BreadcrumbItem, Row, Col, Nav, NavItem, TabContent, TabPane, NavLink } from "reactstrap"

import titleimg from "../image/mario.png";
import classnames from "classnames";


const ItemDetail = () =>{

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  

    return(
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">Ongoing</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Item</BreadcrumbItem>
            </Breadcrumb>
            <Row>
                <Col me={4}>
                    <img src={titleimg} style={{width:'100%'}}/>
                </Col>
                <Col md={8}>
                    item name
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
                        item detail information
                    </TabPane>
                    <TabPane tabId="2">
                        notice
                    </TabPane>
                    <TabPane tabId="3">
                        qna
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default ItemDetail;