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
    <div className="wrap">
        <form className="login-form">
        <Button color="primary" size="lg" block style={{fontSize: '1rem'}}><GrFacebookOption color="white" size="24"/> Login with Facebook</Button>
            <br/><div className="form-group">
                <input type="text" className="form-input" id="id" placeholder="email@example.com" />
            </div>
            <div className="form-group">
                <input type="password" className="form-input" id="passwd" placeholder="password" />
            </div>
            <div className="form-group">
                <Button size="lg" classname="custom-btn" block  type="submit" onClick={onSignIn}>Login</Button>
            </div>
            <div className="form-footer">
            Don't have an account? <Link to='/'>Sign Up</Link>
            </div>
        </form>
    </div>

    )
}

export default Login;