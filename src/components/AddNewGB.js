import React, { useState } from "react"
import { Redirect, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Form, FormGroup, Label, Col, Input, Button, FormText } from "reactstrap"

const AddNewGB = () => {

    const { user } = useSelector(({user})=>({
        user:user.user,
    }))

    if(user===''){
        return <Redirect to='/login' />
    }


    return (
        <div>
            <legend style={{margin:'5%', textAlign:'center'}}>Add New Group Buying!</legend>
            
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Item name</Label>
                    <Col sm={10}>
                    <Input type="text" name="email" id="exampleEmail" placeholder="name here" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Price</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" id="examplePassword" placeholder="price here" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Due Date</Label>
                    <Col sm={10}>
                    <Input type="date" name="duedate" id="examplePassword" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Category</Label>
                    <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Clothes</option>
                        <option>Accessory</option>
                        <option>Badge</option>
                        <option>Sticker</option>
                        <option>etc</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                    <legend className="col-form-label col-sm-2">Type</legend>
                    <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        demand survey
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        ongoing
                        </Label>
                    </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 10 }}>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Are you sure?
                        </Label>
                    </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Link to='/myGBList'><Button>Submit</Button></Link>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddNewGB;