import React from "react"
import { Breadcrumb, BreadcrumbItem, Row, Col } from "reactstrap"

import titleimg from "../image/mario.png";


const ItemDetail = () =>{
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

        </div>
    )
}

export default ItemDetail;