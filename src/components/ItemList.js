import React from "react"
import { useSelector } from "react-redux"
import Item from "./Item";
import Paginations from "./Pagination";
import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import CarouselPage from './CarouselPage.js';
import "./css/breadcrumble.css"
import {FaChevronRight} from "react-icons/fa";

import SearchBar from "../container/searchContainer";

const ItemList = ({ items, searchWord, searchCategory, path }) =>{
    //var path=location.pathname;
    //path = path.replace("/","");
    const carouselStyle={
    width:"40vh"
    }
    //var items = useSelector(items=>items.items);
    //items=JSON.parse(items);
    //const searchword = useSelector(search=>search.search.searchWord);
    //const searchcategory = useSelector(search=>search.search.category);
    var searchcategory=null

    if(!items) return null;

    if(items && path){
        if(searchWord){
            items=items.filter((items)=>{
            return items.name.indexOf(searchWord)>-1;
            })
          }
        if(searchCategory){
            if(searchCategory==="All"){

            }
            else{
                items=items.filter((items)=>{
                    return items.category===searchCategory
                })
            }    
        }
    }
    
    var Items=[];
    const ItemList=[];

    const isCategory = searchCategory && !(searchCategory==="All")
    console.log(path)
    var k=0;
    if(!path){
        for(var i=0; i<4; i++){
            for(var j=0; j<4; j++){
               const temp=items[k];
                Items.push(<Col style={{width:'20%'}}><Item idx={temp.idx} path={'ongoing'} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
                k++;
                if(k>=9) k=0;
            }
            ItemList.push(<div><h4 style={{margin: '30px'}}>Spring Collections {i+1} <FaChevronRight color="gray"/></h4>
            <Row style={{margin:'10px'}}>{Items}</Row></div>)
            Items=[];
        }
        
    }else{
        if(searchWord || isCategory){
            if(items.length>=4){
                for(var i=0; i<items.length/4; i++){
                    for(var j=0; j<4; j++){
                        const temp=items[k];
                        console.log(temp)
                        Items.push(<Col style={{maxWidth:'25%'}}><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
                        k++;
                        if(k===items.length) break;
                    }
                    ItemList.push(<div><Row style={{margin:'10px'}}>{Items}</Row></div>)
                    Items=[];
                }
            }else{
                for(var j=0; j<items.length; j++){
                    const temp=items[j];
                    Items.push(<Col style={{maxWidth:'25%'}}><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
                }
                ItemList.push(<div><Row style={{margin:'10px'}}>{Items}</Row></div>)
            }
        }
        else{
            for(var i=0; i<4; i++){
                for(var j=0; j<4; j++){
                    const temp=items[k];
                    Items.push(<Col><Item idx={temp.idx} path={path} img={temp.img} name={temp.name} price={temp.price} minimumNumber={temp.minimumNumber} currentNumber={temp.currentNumber} leftDate={temp.leftDate}/></Col>)
                    k++;
                    if(k>=9) k=0;
                }
                ItemList.push(<div><Row style={{margin:'10px'}}>{Items}</Row></div>)
                Items=[];
            }
        }
    }
    if(items.length===0){
        ItemList.push(<div><Row style={{minHeight:'20%', margin:'5%', height:'40%'}}>Sorry, No Item</Row>
                            <Row style={{minHeight:'20%', margin:'5%', height:'40%'}}>Please search again</Row>
                            <Row style={{minHeight:'20%', margin:'5%', height:'40%'}}></Row></div>)
    }
    
    const presentPage = searchWord || isCategory

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
            {
                !path?
                    <SearchBar style={{marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} type="no"/>
                     : <SearchBar style={{marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}}/>
            }
            {ItemList}
            {
                !presentPage && <Paginations/>
            }
        </div>
    )
}

export default ItemList;

