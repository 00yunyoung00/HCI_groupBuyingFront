import React from "react"
import { Link } from "react-router-dom";
import {Button} from "reactstrap";
import "./css/Login.css";
import {GrFacebookOption} from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setUser } from "../modules/user";

const Login = ({ history }) =>{

    const dispatch = useDispatch();

    const onSignIn = () =>{
        console.log("in signin")
        localStorage.setItem('user', 'ok')
        dispatch(setUser('ok'));
        history.push('/')
    }

    return(
    <div>
        <form className="login-form">
        <div className="form-group">
                <input type="text" className="form-input" id="id" placeholder="email@example.com" />
            </div>
            <div className="form-group">
                <input type="password" className="form-input" id="passwd" placeholder="password" />
            </div>
            <div className="form-group">
                <Button size="lg" classname="custom-btn" block  type="submit" onClick={onSignIn}>Login</Button>
            </div>
            
        </form>
    </div>

    )
}

export default Login;