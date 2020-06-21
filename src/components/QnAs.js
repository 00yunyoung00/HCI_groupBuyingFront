import React from "react"
import { Card, CardBody, CardHeader, CardTitle} from "reactstrap";

import Paginations from "./Pagination";
import SearchBar from "./SearchBar";
import "./css/CardList.css";

const qna = <Card>
<CardHeader>QnA Title!</CardHeader>
<CardBody>
    <CardTitle>datetime / writer</CardTitle>
    <CardBody>
        I have a question.<p/>
        I wonder when this project ends.
    </CardBody>
</CardBody>
</Card>

const qnas=[];
for(var i=0; i<5; i++){
    qnas.push(<div>{qna}</div>);
}

const QnAs = () =>{

    return(
        <div className="qnaListBox">
            <SearchBar type="simple"/>
            {qnas}
            <Paginations/>
        </div>
    )
}

export default QnAs;