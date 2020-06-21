import React from "react"
import { Row, Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import {Line} from 'rc-progress';


const FontSize={
    fontSize: "0.8rem"
};

const Item = ({ path, img, name, idx, price, currentNumber, minimumNumber, leftDate }) => {
    var percents=0;   //기본 디폴트 몇 명 찼는지
    percents=(currentNumber/minimumNumber)*100;

    return(
            
                <Card style={{height:'100%'}}><Link to={`/itemDetail/${path}/${idx}`} style={{ color: 'black', textDecoration: 'none'}}>
                    <CardImg top width="100px" height="160px" src={img} alt="thumbnail image"/>
                    <CardBody>
                        <div style={FontSize}> {leftDate} days left</div>
                        {path==="ongoing"? <Line percent={percents} strokeWidth="1" trailWidth="1" strokeColor="red" />  
   :
   <Line percent={percents} strokeWidth="1" trailWidth="1" strokeColor="#60b5d6" />  
}
                       <br/> <CardTitle>{name}  </CardTitle><br/>
                        
    <CardText className="text-right">
    <small className="text-muted">{percents}%</small>
          </CardText>
                    </CardBody>
                   </Link>
                </Card>
           
    )
}

export default Item;


