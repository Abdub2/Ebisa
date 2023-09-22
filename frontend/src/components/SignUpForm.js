import React, {useState} from "react";

function SignUpForm({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [number, setNumber] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text"
                        name="uname"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input
                    type="password"
                    name="pass"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password Confirmation</label>
                    <input
                    type="password"
                    name="pass"
                    required
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Phone number</label>
                    <input
                    type="number"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="button-container">
                    <input type="submit"/>
                    {isLoading ? "Loading..." : "Sign Up"}
                </div>

            </form>
        </div>
    )
}

export default SignUpForm;