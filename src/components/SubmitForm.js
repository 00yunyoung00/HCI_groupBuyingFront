import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {Alert, Breadcrumb, BreadcrumbItem, Row, Col, Container, Form, 
            FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from "reactstrap";
        
import { changeItems } from '../modules/items'
import {Line} from 'rc-progress';
import './css/ItemDetail.css'
import { Redirect } from "react-router-dom";


const SubmitForm = ({ history, match }) =>{

    const dispatch=useDispatch();
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => {
          if(formvalue.phone===""||formvalue.amount===""){
            alert("Incorrect Input type: Please fill phone number and quantity");
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
      const user = useSelector(user=>user.user.user);

      console.log(pastpath)
      if(user===''){
          return <Redirect to='/login'/>
      }

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
      var percents=0;   //기본 디폴트 몇 명 찼는지
    percents=(item.currentNumber/item.minimumNumber)*100;
    
    return(
        <div>
            <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
            <BreadcrumbItem tag="a" href={`${pastpath}`}>{pastpath}</BreadcrumbItem>
            <BreadcrumbItem tag="a" href={`/itemDetail/${pastpath}/${idx}`}>Item</BreadcrumbItem>
            <BreadcrumbItem active tag="span">SubmitForm</BreadcrumbItem>
            </Breadcrumb>
            <Col style={{fontSize: '2rem', fontWeight: 'bold', textAlign: 'center'}}>{item.name}</Col>
            
            <Row>
                <Col md={6}>
                    <img src={item.img} style={{width:'400px',height:'350px', margin:'5%'}}/>
                </Col>
                <Col md={6}>
<br/>


                <Container><Line percent={percents} strokeWidth="1" trailWidth="1" strokeColor="#e65e55" />
                    
                    <span style={{fontSize: '2rem', color: '#e65e55', fontWeight: 'bold'}}>{item.currentNumber}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; people joined : {percents}%</span>
                    </Container>
                    <Container>
                    <span style={{fontSize: '2rem', color: '#666666', fontWeight: 'bold'}}>{item.leftDate}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; days to go</span>
                   </Container>
                   <Container>
                    <span style={{fontSize: '2rem', color: '#666666', fontWeight: 'bold'}}>{item.price}</span>
                    <span style={{fontSize: '1rem'}}>&nbsp; Korean won</span> 
                    
                   
                    </Container>
                    <Container className="briefInfoBox">
                        This is simple item design. But,  4th OFFICIAL BASEBALL JUMPER RARE [EWHA SELLER].

MINT CONDITION NEVER WORN

ORIGINAL TAG

TAKEN OUT OF BAG FOR PHOTOS ONLY

One size fits like a unisex Medium <p/><p/>
                    </Container>
                    <br/>
    <Container><Alert color="info" style={{textAlign: 'center'}}>Welcome! You are the {++item.currentNumber}th Joiner!</Alert></Container>
                    
                   
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