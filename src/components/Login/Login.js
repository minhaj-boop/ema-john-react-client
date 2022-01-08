import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {

    const { signinUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signinUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema john? <Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                <button className="btn-regular" onClick={handleGoogleLogin}>Google Signin</button>
            </div>
        </div>
    );
};

export default Login;