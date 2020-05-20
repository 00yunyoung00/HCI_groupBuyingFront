import React from "react"
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import thumbnailImg from "../image/mario.png";

const Item = () => {

    return(
            <Link to='/itemDetail'>
                <Card>
                    <CardImg top width="100%" src={thumbnailImg} alt="thumbnail image"/>
                    <CardBody>
                        <CardTitle>Item Name</CardTitle>
                        <CardSubtitle>Simple description</CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
    )
}

export default Item;