import React from "react"
import { Media } from "reactstrap";

import img1 from "../image/mario.png";
import img2 from "../image/sample.jpg"

const ItemInformation = () => {

    const imageStyle={
        height:'100%', width:'100%',
    }

    return(
        <div>
            <p />
            <h2>Item Detail Information!</h2>
            <Media object src={img1} alt="image1" style={imageStyle}/>
            <Media object src={img2} alt="image2" style={imageStyle} />
        </div>
    )
}

export default ItemInformation;