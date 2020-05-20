import React from "react"
import { Form, Input, Row, Col, InputGroup } from "reactstrap";
 
const SearchBar = ({type}) =>{

    if(type==="simple"){
        return(
            <Form style={{padding:'5px', margin:'10px'}}>
                <Row>
                <Col md={6} style={{float:'left'}}>
                    <Input type="search" name="search" id="searchInput" placeholder="검색어를 입력하슈" />
                </Col>
                </Row>
            </Form>
        )
    }

    else{
        return(
            <Form style={{padding:'5px'}}>
                <Row form>
                    <Col md={6} lg={6}>
                        <InputGroup>
                     <Input type="search" name="search" id="searchInput" placeholder="검색어를 입력하슈" /></InputGroup>
                     </Col>
                     <Col md={2}/>
                     <Col md={2}>
                         <Input type="select" name="firstSelect" id="firstSelect">
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                         </Input>
                     </Col>
                     <Col md={2}>
                         <Input type="select" name="secondSelect" id="secondSelect">
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                         </Input>
                     </Col>
                 </Row>
            </Form>
        )
    }
   
}

export default SearchBar;