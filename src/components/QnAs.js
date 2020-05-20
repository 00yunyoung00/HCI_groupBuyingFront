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
        질문이이써여<p/>
        이거 언제언제 나오나여
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