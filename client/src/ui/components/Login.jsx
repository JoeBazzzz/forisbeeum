import React from "react";

const Login = () => {
    return <>
        <form className="Login">
            <label className="Logintext"> Login</label>
            <br></br>
            <label className="logintext">Username </label>
            <input type = "text" className="logintext"></input>
            <br></br>
            <label className="logintext"> Password </label>
            <input type = "password" className="logintext"></input>
            <br></br>
            <input type="checkbox" className="rememberbox"></input>
            <label className="rememberme">Remember me?</label>
            <br></br>
            <input type = "submit" className="Submit"></input>

        </form>

    </>
}

export default Login
