import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from '../components/ItemList';
import { initialize } from '../modules/search';

const ItemListContainer = ({ location }) =>{

    const dispatch=useDispatch();

    var path=location.pathname;
    path = path.replace("/","");
/*
    useEffect(()=>{
        dispatch(initialize());
    })*/

    const { items, searchWord, searchCategory } = useSelector(({ items, search })=>({
        items:items.items,
        searchWord:search.searchWord,
        searchCategory:search.category,
    }));  
    console.log(items) 

    return <ItemList items={items} searchWord={searchWord} searchCategory={searchCategory} path={path}/>
}

export default ItemListContainer;