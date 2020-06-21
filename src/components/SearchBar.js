import React, { useState } from "react"
import { Form, Input, Row, Col, InputGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
 
const SearchBar = ({type, onChange, onDropChange}) =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    if(type==="no"){
        return null;
    }
    if(type==="simple"){
        return(
            <Form style={{padding:'5px', margin:'10px'}}>
                <Row>
                <Col md={6} style={{float:'left'}}>
                    <Input type="search" name="search" id="searchInput" placeholder="Search" onChange={onChange}/>
                </Col>
                </Row>
            </Form>
        )
    }

    else{
        return(
            
                <Row xs="2" style={{marginLeft: '10px', marginRight: '10px'}}>
                     <Col xs="6">
                        <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle} >
                        <DropdownToggle caret >Category</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem name="All" onClick={onDropChange}>All</DropdownItem>
                                <DropdownItem name="Clothes" onClick={onDropChange}>Clothes</DropdownItem>
                                <DropdownItem name="Accessory" onClick={onDropChange}>Accessory</DropdownItem>
                                <DropdownItem name="Badges" onClick={onDropChange}>Badges</DropdownItem>
                                <DropdownItem name="Stickers" onClick={onDropChange}>Stickers</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                     </Col>
                     <Col xs="6" style={{marginLeft: '0'}}>
                        <InputGroup>
                     <Input type="search" name="search" id="searchInput" placeholder="Search" onChange={onChange}/></InputGroup>
                     </Col>
                     
                    
                     
                 </Row>
            
          
        )
    }
   
}

export default SearchBar;