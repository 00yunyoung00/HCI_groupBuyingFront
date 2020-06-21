import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import "./css/CardList.css";
import Paginations from "./Pagination";
import SearchBar from "./SearchBar";

const Notice = <Card>
<CardHeader>Notice Title!</CardHeader>
<CardBody>
    <CardTitle>datetime / writer</CardTitle>
    <CardBody>
        Please Read this Notice<p/>
        In July 27th, all the items will be distributed in ECC hall.<p/>
        
    </CardBody>
</CardBody>
</Card>

const notices = [];

for(var i=0; i<5; i++){
    notices.push(<div>{Notice}</div>);
}

const Notices = () =>{
    return(
        <div className="noticesBox">
            <SearchBar type="simple"/>
            {notices}
            <Paginations/>
        </div>
    )
}

export default Notices;