import React from "react"
import SearchBar from "./SearchBar";
import Item from "./Item";
import Paginations from "./Pagination";
import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./css/breadcrumble.css"

import img1 from "../image/1_GlitterPurse1.png";
import img2 from "../image/2_GreenJumper.png";
import img3 from "../image/3_Airpod1.jpg";
import img4 from "../image/4_NabyJumper.jpg";
import img5 from "../image/5_Badge.jpg";
import img6 from "../image/6_PhoneCase.jpg";
import img7 from "../image/7_WhiteDopper2.jpg";
import img8 from "../image/8_Hoody1.jpg";
import img9 from "../image/9_MTM1.jpg";


const ItemList = ({ location }) =>{
    var path=location.pathname;
    path = path.replace("/","");

    var Items=[];
    const ItemList=[];

    var names=["Glitter Purse ","Ewha-Green Baseball Jumper","Teddy AirPod Case", "1886 Navy Baseball Jumper",
                "Ewha Night Sky Badge", "Ewha Blossom Smartphone Case", "Ewha White Bench Parka", "1886 Hoody"]

    Items.push(<Col><Item idx={1} path={path} img={img1} name={names[0]} /></Col>)
    Items.push(<Col><Item idx={2} path={path} img={img2} name={names[1]}/></Col>)
    Items.push(<Col><Item idx={3} path={path} img={img3} name={names[2]}/></Col>)
    Items.push(<Col><Item idx={4} path={path} img={img4} name={names[3]}/></Col>)
    ItemList.push(<Row style={{margin:'10px'}}>{Items}</Row>)
    Items=[];
    Items.push(<Col><Item idx={5} path={path} img={img5} name={names[4]}/></Col>)
    Items.push(<Col><Item idx={6} path={path} img={img6} name={names[5]}/></Col>)
    Items.push(<Col><Item idx={7} path={path} img={img7} name={names[6]}/></Col>)
    Items.push(<Col><Item idx={8} path={path} img={img8} name={names[7]}/></Col>)
    ItemList.push(<Row style={{margin:'10px'}}>{Items}</Row>)    
    Items=[];
    Items.push(<Col><Item idx={1} path={path} img={img1} name={names[0]} /></Col>)
    Items.push(<Col><Item idx={2} path={path} img={img2} name={names[1]}/></Col>)
    Items.push(<Col><Item idx={3} path={path} img={img3} name={names[2]}/></Col>)
    Items.push(<Col><Item idx={4} path={path} img={img4} name={names[3]}/></Col>)
    ItemList.push(<Row style={{margin:'10px'}}>{Items}</Row>)
    Items=[];
    Items.push(<Col><Item idx={5} path={path} img={img5} name={names[4]}/></Col>)
    Items.push(<Col><Item idx={6} path={path} img={img6} name={names[5]}/></Col>)
    Items.push(<Col><Item idx={7} path={path} img={img7} name={names[6]}/></Col>)
    Items.push(<Col><Item idx={8} path={path} img={img8} name={names[7]}/></Col>)
    ItemList.push(<Row style={{margin:'10px'}}>{Items}</Row>)  
/*
    for(var j=0; j<5;j++){
        ItemList.push(<Row style={{margin:'10px'}}>{Items}</Row>)
    }*/

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