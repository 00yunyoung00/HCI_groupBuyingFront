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
        공지~~~<p/>
        언제언제 여기여기에서 배부할겨~~<p/>
        -쥔장드림-
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