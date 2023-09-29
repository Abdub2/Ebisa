import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUpForm({ onLogin }){
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [number, setNumber] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showLogin, setShowLogin] = useState(true)

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);

        fetch("http://127.0.0.1:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                number,
              }),
        }).then((r) => {
            setIsLoading(false)
            if(r.ok){
                r.json().then((user) => onLogin(user))
            } else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
        nav("/home")
    }

    return(
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <form className="needs-validation" onSubmit={handleSubmit}>
                    <div className="form-group was-validated mb-2">
                        <label className="form-label">Full Name</label>
                        <input className="form-control"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Please enter your username
                        </div>
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="form-group was-validated mb-2">
                        <label className="form-label">Password</label>
                        <input className="form-control"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="form-group was-validated mb-2">
                        <label className="form-label">Password Confirmation</label>
                        <input className="form-control"
                        type="password"
                        required
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Phone number</label>
                        <input className="form-control"
                        type="number"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    {/* <div className="button-container"> */}
                        <button className="btn btn-primary w-100" type="submit">
                            Sign up
                        </button>
                    {/* </div> */}

                    </form>
                    {/* <a > */}

                    Already have an account?
                    <Link to= "/login">
                        <button className="btn btn-secondary mt-2 w-100" color="secondary" >
                             Log in
                        </button>
                    </Link>

                        {/* </a> */}


            </div>
        </div>
    )
}

export default SignUpForm;