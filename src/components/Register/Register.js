import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>------------or-----------</div>
                <button className="btn-regular">Google Signin</button>
            </div>
        </div>
    );
};

export default Register;