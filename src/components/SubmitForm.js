import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Breadcrumb, BreadcrumbItem, Row, Col, Container, Form, 
            FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from "reactstrap";


import './css/ItemDetail.css'


const SubmitForm = ({ history, match }) =>{
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

      const idx=match.params.idx;
      const items=useSelector(items=>items.items.items)

      var item=null;
      for(var i=0; i<items.length; i++){
          if(items[i].idx===idx){
              item=items[i];
              break;
          }
      }
      
    return(
        <div>
            <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/ongoing">ongoing</BreadcrumbItem>
            <BreadcrumbItem tag="a" href={`/itemDetail/ongoing/${idx}`}>Item</BreadcrumbItem>
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
                    <Input type="email" name="email" id="exampleEmail" placeholder="000-0000-0000" required invalid/>
                    
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Quantity</Label>
                    <Input type="number" step="1" min={1} max={100} name="select" id="exampleSelect" placeholder="Amount"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                
                
                <Button onClick={toggle}>Submit</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Submit Completed!</ModalHeader>
                    <ModalBody>
                        submit completed!!! :-)
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={()=>{history.push('/ongoing')}}>OK</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Form>
            </div>
        </div>
    )
}

export default SubmitForm;