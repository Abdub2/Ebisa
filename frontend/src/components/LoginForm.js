import React, {useState} from "react";
import { Link } from "react-router-dom";
// import './css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin }){
    const nav = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessages, setErrorMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok){
                r.json().then((user) => onLogin(user));
            } else{
                r.json().then((err) => setErrorMessages(err.errorMessages))
            }
        })
        nav("/home")
    }

    return(
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100" >
            <div className="login">
                <form className="needs-validation" onSubmit={handleSubmit} >
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="email" className="form-label">Full Name</label>
                        <input required type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                        <div className="invalid-feedback">
                            Please Enter your username

                        </div>
                    </div>
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="pass"
                        className="form-control"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Please enter your password

                        </div>
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="form-group mb-2">
                        <input type="checkbox" className="form-check-input"></input>
                        <label htmlFor="check" className="form-check-label" > Remember me</label>
                    </div>
                    {/* <div > */}
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                        {/* {isLoading ? "Loading..." : "Login"} */}
                    {/* </div> */}
                    <a >
                        Don't have an account?
                        <Link to= "/">
                            <button className="btn btn-secondary mt-2 w-100" color="secondary" >
                                Sign Up
                            </button>
                        </Link>


                        </a>
                </form>
            </div>
        </div>

    )
}

export default LoginForm;