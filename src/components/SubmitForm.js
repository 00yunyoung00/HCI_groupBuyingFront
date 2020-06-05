import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Breadcrumb, BreadcrumbItem, Row, Col, Container, Form, 
            FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


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
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option one is this and that—be sure to include why it's great
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option two can be something else and selecting it will deselect option one
                    </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
                        Option three is disabled
                    </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                    Check me out
                    </Label>
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