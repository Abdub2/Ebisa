import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
// import styled from "styled-components";

function Login({ onLogin }){
    const [showLogin, setShowLogin] = useState(true)

    return(
        // <Wrapper>
        <div>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin}/>
                    {/* <Divider/> */}
                    <p>
                        Don't have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin}/>
                    {/* <Divider/> */}
                    <p>
                        Already have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </p>
                </>
            )}
            </div>
        // </Wrapper>
    )
}

// const Wrapper = section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default Login