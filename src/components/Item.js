import React from "react"
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Item = ({ path, img, name, idx }) => {

    return(
            <Link to={`/itemDetail/${path}/${idx}`}>
                <Card style={{height:'100%'}}>
                    <CardImg top width="100px" height="160px" src={img} alt="thumbnail image"/>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                    </CardBody>
                </Card>
            </Link>
    )
}

export default Item;