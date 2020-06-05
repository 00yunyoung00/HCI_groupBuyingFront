import React from "react"
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import {Line} from 'rc-progress';
import thumbnailImg from "../image/mario.png";

const Item = ({ path, img, name, idx }) => {

    return(
            <Link to={`/itemDetail/${path}/${idx}`}>
                <Card style={{height:'100%'}}>
                    <CardImg top width="100px" height="160px" src={img} alt="thumbnail image"/>
                    <CardBody>
                        <Line percent="20" strokeWidth="1" trailWidth="1" strokeColor="red"/>
                        <CardTitle>{name}</CardTitle>
                    </CardBody>
                </Card>
            </Link>
    )
}

export default Item;