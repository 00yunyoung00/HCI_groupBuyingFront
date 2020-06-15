import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Breadcrumb, BreadcrumbItem, Row, Col, Container, Form, 
            FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from "reactstrap";
        
import { changeItems } from '../modules/items'

import './css/ItemDetail.css'


const SubmitForm = ({ history, match }) =>{

    const dispatch=useDispatch();
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => {
          if(formvalue.phone===""||formvalue.amount===""){
            alert("입력 똑디 하슈");
          }else {
            if(pastpath==="demandSurvey"){
                for(var i=0; i<items.length; i++){
                    if(items[i].idx===idx){
                        items[i].currentNumber++;
                        console.log(items[i].currentNumber);
                        break;
                    }
                }                
            }
              setModal(!modal);
            }
        }

      const idx=match.params.idx;
      const items =useSelector(items=>items.items.items);
      const pastpath=useSelector(path=>path.path.pastpath);

      var formvalue={phone:"", amount:"", text:null}

      var item=null;


      for(var i=0; i<items.length; i++){
          if(items[i].idx===idx){
              item=items[i];
              break;
          }
      }

      const onChange = e =>{
        const { value, name } = e.target;
        formvalue[name]=value;
      }

      const onSubmit = () => {
        if(dispatch) dispatch(changeItems(items));
        history.push(`/itemDetail/${pastpath}/${idx}`)
      }

    return(
        <div>
            <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
            <BreadcrumbItem tag="a" href={`${pastpath}`}>{pastpath}</BreadcrumbItem>
            <BreadcrumbItem tag="a" href={`/itemDetail/${pastpath}/${idx}`}>Item</BreadcrumbItem>
            <BreadcrumbItem active tag="span">SubmitForm</BreadcrumbItem>
            </Breadcrumb>
            <Row>
                <Col me={4}>
                    <img src={item.img} style={{width:'100%'}}/>
                </Col>
                <Col md={8}>
                    <Container className="itemNameBox">
                        {item.name}
                    </Container>
                    <Container className="briefInfoBox">
                        brief information
                    </Container>
                    <Container className="priceInfoBox">
                        price : {item.price}
                    </Container>
                </Col>
            </Row>
            <div>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Phone Number</Label><FormFeedback>Necessary</FormFeedback>
                    <Input type="email" name="phone" id="exampleEmail" placeholder="000-0000-0000" onChange={onChange} required invalid/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Quantity</Label>
                    <Input type="number" step="1" min={1} max={100} name="amount" id="exampleSelect" placeholder="Amount" onChange={onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" onChange={onChange}/>
                </FormGroup>
                
                
                <Button onClick={toggle}>Submit</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Submit Completed!</ModalHeader>
                    <ModalBody>
                        submit completed!!! :-)
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={onSubmit}>OK</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Form>
            </div>
        </div>
    )
}

export default SubmitForm;