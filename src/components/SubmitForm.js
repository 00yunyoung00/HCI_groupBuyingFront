import React, { useState } from "react"
import { Breadcrumb, BreadcrumbItem, Row, Col, Container, Form, 
            FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import titleimg from "../image/mario.png";

import './css/ItemDetail.css'

import img1 from "../image/1_GlitterPurse1.png";
import img2 from "../image/2_GreenJumper.png";
import img3 from "../image/3_Airpod1.jpg";
import img4 from "../image/4_NabyJumper.jpg";
import img5 from "../image/5_Badge.jpg";
import img6 from "../image/6_PhoneCase.jpg";
import img7 from "../image/7_WhiteDopper2.jpg";
import img8 from "../image/8_Hoody1.jpg";


const SubmitForm = ({ history, match }) =>{
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

      const idx=match.params.idx;

      var imgs=[];
      imgs.push(img1);
      imgs.push(img2);
      imgs.push(img3);
      imgs.push(img4);
      imgs.push(img5);
      imgs.push(img6);
      imgs.push(img7);
      imgs.push(img8);

      var names=["Glitter Purse ","Ewha-Green Baseball Jumper","Teddy AirPod Case", "1886 Navy Baseball Jumper",
    "Ewha Night Sky Badge", "Ewha Blossom Smartphone Case", "Ewha White Bench Parka", "1886 Hoody"]

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
                    <img src={imgs[idx-1]} style={{width:'100%'}}/>
                </Col>
                <Col md={8}>
                    <Container className="itemNameBox">
                        {names[idx-1]}
                    </Container>
                    <Container className="briefInfoBox">
                        brief information
                    </Container>
                    <Container className="priceInfoBox">
                        price : 50,000
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