import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./css/pagination.css";
const Paginations = () => {

    return(
        <div style={{marginLeft:'auto', marginRight:'auto', display:'inline-block'}} color="black">
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