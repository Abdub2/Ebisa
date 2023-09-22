import React, {useState} from "react";

function LoginForm({ onLogin }){
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
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" name="uname"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="pass" required/>
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="button-container">
                    <input type="submit"/>
                    {isLoading ? "Loading..." : "Login"}
                </div>
            </form>
        </div>

    )
}

export default LoginForm;