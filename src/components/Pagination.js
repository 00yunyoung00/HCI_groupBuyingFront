import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./css/pagination.css";
const Paginations = ({ type }) => {

    if(type==="small"){
        return(
            <div style={{marginLeft:'40%', display:'inline-block'}} color="black">
        <Pagination aria-label="Page navigation example" style={{marginLeft: 'auto', marginRight: 'auto', marginBottom:'10px', textDecoration: 'none'}}>
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
        </Pagination>
        </div>
        )
    }

    return(
        <div style={{marginLeft:'30%', marginRight:'auto', display:'inline-block'}} color="black">
        <Pagination aria-label="Page navigation example" style={{marginLeft: 'auto', marginRight: 'auto', marginBottom:'10px', textDecoration: 'none'}}>
            <PaginationItem>
                <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                5
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
        </div>
    )
}

export default Paginations;