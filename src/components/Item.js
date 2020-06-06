import React from "react"
import { Row, Card, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import {Line} from 'rc-progress';


const FontSize={
    fontSize: "0.8rem"
};
const Item = ({ path, img, name, idx, price, currentNumber, minimumNumber, leftDate }) => {
    var percents=0;   //기본 디폴트 몇 명 찼는지
    if(minimumNumber>currentNumber) {
            percents=(currentNumber/minimumNumber)*100;
    }
    else{percents=100;}
        
            
    
    return(
            
                <Card style={{height:'100%'}}>
                    <CardImg top width="100px" height="160px" src={img} alt="thumbnail image"/>
                    <CardBody>
                        <div style={FontSize}> {leftDate} days left</div><Line percent={percents} strokeWidth="1" trailWidth="1" strokeColor="red" />  {/*상태바는 최소 인원에서 몇 명 모였는지?를 나타내고 싶다.  */}
    <br/><Link to={`/itemDetail/${path}/${idx}`} style={{ color: 'black'}}> <CardTitle>{name}  </CardTitle><br/>
                        </Link> 
                        
                    </CardBody>
                   
                </Card>
           
    )
}

export default Item;


