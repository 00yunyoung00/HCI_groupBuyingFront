import React from "react"
import SearchBar from "./SearchBar";
import Item from "./Item";
import Paginations from "./Pagination";
import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./css/breadcrumble.css"

const ItemList = ({ location }) =>{
    var path=location.pathname;
    path = path.replace("/","");

    const Items=[];
    const ItemList=[];

    for(var i=0; i<4; i++){
        Items.push(<Col><Item path={path}/></Col>);
    }

    for(var j=0; j<5;j++){
        ItemList.push(<Row style={{margin:'10px'}}>{Items}</Row>)
    }

    return(
        <div>
            <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                <BreadcrumbItem active tag="span">{path}</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <SearchBar style={{marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}}/>
            {ItemList}
            <Paginations/>
        </div>
    )
}

export default ItemList;