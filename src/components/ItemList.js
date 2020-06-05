import React from "react"
import { useSelector } from "react-redux"
import SearchBar from "./SearchBar";
import Item from "./Item";
import Paginations from "./Pagination";
import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./css/breadcrumble.css"

const ItemList = ({ location }) =>{
    var path=location.pathname;
    path = path.replace("/","");

    const items = useSelector(items=>items.items);

    var Items=[];
    const ItemList=[];

    var k=0;
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            const temp=items.items[k];
            console.log(temp);
            Items.push(<Col><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} /></Col>)
            k++;
            if(k>=9) k=0;
        }
        ItemList.push(<Row style={{margin:'10px'}}>{Items}</Row>)
        Items=[];
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