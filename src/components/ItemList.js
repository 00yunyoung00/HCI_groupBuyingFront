import React from "react"
import { useSelector } from "react-redux"
import SearchBar from "./SearchBar";
import Item from "./Item";
import Paginations from "./Pagination";
import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import CarouselPage from './CarouselPage.js';
import "./css/breadcrumble.css"
import {FaChevronRight} from "react-icons/fa";
const ItemList = ({ location }) =>{
    var path=location.pathname;
    path = path.replace("/","");
    const carouselStyle={
    width:"40vh"
}
    const items = useSelector(items=>items.items);

    var Items=[];
    const ItemList=[];

    console.log(path)
    var k=0;
    if(!path){
        for(var i=0; i<4; i++){
            for(var j=0; j<4; j++){
                const temp=items.items[k];
                Items.push(<Col><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
                k++;
                if(k>=9) k=0;
            }
            ItemList.push(<div><h4 style={{margin: '30px'}}>Spring Collections {i+1} <FaChevronRight color="gray"/></h4>
            <Row style={{margin:'10px'}}>{Items}</Row></div>)
            Items=[];
        }
    }else{
        for(var i=0; i<4; i++){
            for(var j=0; j<4; j++){
                const temp=items.items[k];
                Items.push(<Col><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
                k++;
                if(k>=9) k=0;
            }
            ItemList.push(<div><Row style={{margin:'10px'}}>{Items}</Row></div>)
            Items=[];
        }
    }
    

    return(
        <div>
            {
                !path && <CarouselPage className={carouselStyle}/>
            }
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

