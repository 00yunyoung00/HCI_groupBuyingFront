import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeField, changeOrder, initialize } from '../modules/search';
import SearchBar from '../components/SearchBar';

const SearchContainer = ({ type }) => {
    const dispatch = useDispatch();
    const { searchWord, possible } = useSelector(({search})=>({
        searchWord:search.searchWord,
        category:search.category,
    }));

    useEffect(()=>{
        dispatch(initialize());
    }, [dispatch]);

    const onChange = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        dispatch(changeField(value));
    }

    const onDropChange = e => {
        e.preventDefault();
        const { value, name } = e.target;
        dispatch(changeOrder(name));
    }

    return  <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <SearchBar onChange={onChange} onDropChange={onDropChange} type={type}/></div>
}

export default SearchContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;

