import React from "react";
import './login.css'
const Login = () => {
    return (
        <div className="login">
        <h1 className="text-center">SIGN IN</h1>
        
        <form className="needs-validation">
            <div className="form-group">
                <label className="form-label" htmlFor="text">Username</label>
                <input className="form-control" type="text" id="Username" required/>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" required/>
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="check"/>
                <label className="form-check-label" htmlFor="check">Remember me</label>
            </div>
            
            <input className="btn btn-success w-100" type="submit" value="SIGN IN"/>
        </form>

    </div>
        
    );
}
export default Login