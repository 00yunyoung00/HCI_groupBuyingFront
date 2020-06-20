import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarPage from '../hamburger/BurgerNavbar';

import { logout } from '../modules/user'

const UserConatiner = () =>{
    const dispatch = useDispatch();

    const { user } = useSelector(({user})=>({
        user:user.user,
    }));

    const onLogout = () =>{
        localStorage.removeItem('user');
        dispatch(logout());
    }

    return <NavbarPage user={user} onLogout={onLogout}/>
}

export default UserConatiner;