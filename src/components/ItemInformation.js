import React from "react"
import { Media } from "reactstrap";

import img1 from "../image/mario.png";
import img2 from "../image/sample.jpg"

const ItemInformation = ({ img }) => {

    const imageStyle={
        height:'100%', width:'100%',
    }

    return(
        <div>
            <p />
            <h2 style={{textAlign: 'center'}}><br/>Item Detail Information</h2>
            <Media object src={img} alt="image1" style={imageStyle}/>
            <Media object src={img} alt="image2" style={imageStyle} />
        </div>
    )
}

export default ItemInformation;