import React from "react"
import { Row, Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import {Line} from 'rc-progress';
import thumbnailImg from "../image/mario.png";
import styled from 'styled-components';
const FontSize={
    fontSize: "0.8rem"
};
const Item = ({ path, img, name, idx }) => {

    return(
            
                <Card style={{height:'100%'}}>
                    <CardImg top width="100px" height="160px" src={img} alt="thumbnail image"/>
                    <CardBody>
                        <Line percent="20" strokeWidth="1" trailWidth="1" strokeColor="red" /> <div style={FontSize}>9 days left</div> {/*상태바는 최소 인원에서 몇 명 모였는지?를 나타내고 싶다.  */}
                       <br/><Link to={`/itemDetail/${path}/${idx}`} style={{ color: 'black'}}> <CardTitle>{name}</CardTitle><br/>
                        </Link> 
                        
                    </CardBody>
                   
                </Card>
           
    )
}

export default Item;


