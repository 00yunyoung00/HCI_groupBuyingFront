import React from "react"
import { useSelector } from "react-redux"
import Item from "./Item";
import Paginations from "./Pagination";
import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import CarouselPage from './CarouselPage.js';
import "./css/breadcrumble.css"
import {FaChevronRight} from "react-icons/fa";

import SearchBar from "../container/searchContainer";

const MyList = ({ location }) =>{

    var path=location.pathname;
    path = path.replace("/","");

    const carouselStyle={
    width:"40vh"
    }

    const { items } = useSelector(({ items })=>({
        items:items.items,
    }));  

    if(!items) return null;

    var Items=[];
    const ItemList=[];

    var k=0;

    for(var j=0; j<4; j++){
        const temp=items[k];
        Items.push(<Col style={{width:'20%'}}><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
        k++;
        if(k>=9) k=0;
    }
    ItemList.push(<div><h4 style={{margin: '30px'}}>My GB List <FaChevronRight color="gray"/></h4><Row style={{margin:'10px'}}>{Items}</Row></div>)
    Items=[];

    for(var j=0; j<4; j++){
        const temp=items[k];
        Items.push(<Col style={{width:'20%'}}><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
        k++;
        if(k>=9) k=0;
    }
    ItemList.push(<div><h4 style={{margin: '30px'}}>My Hosting List <FaChevronRight color="gray"/></h4><Row style={{margin:'10px'}}>{Items}</Row></div>)
    Items=[];
 
    return(
        <div>
            <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                <BreadcrumbItem active tag="span">{path}</BreadcrumbItem>
            </Breadcrumb>
            </div>
            {ItemList}
        </div>
    )
}

export default MyList;