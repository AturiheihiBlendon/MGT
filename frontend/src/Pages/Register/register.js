import React from "react";
import './register.css'

const Register = () => {
    return (
        <div className="register">
            <h1 className="text-center">REGISTER ADMIN</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" required/>
                </div>
      
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="password2" required/>
                
                    <input className="btn btn-success w-100" type="submit" value="SIGN UP"/>
                </div>
            </form>
        </div>
    );
}
export default Register