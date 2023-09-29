import { useState } from "react";
// import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
// import styled from "styled-components";

function Login({ onLogin }){
    const [showLogin, setShowLogin] = useState(true)

    return(
        // <Wrapper>
        <div>
            {showLogin ? (
                <>
                <div>
                {/* <img src="./WhatsApp Image 2023-09-10 at 4.10.24 PM (1).jpeg" class="img-thumbnail" alt="Ebisa hotel"></img> */}

                    <div className="wrapper d-flex justify-content-center w-100">
                    <LoginForm onLogin={onLogin}/>
                        {/* <a >
                            Don't have an account? &nbsp;
                            <button className="btn btn-secondary mt-2" color="secondary" onClick={() => setShowLogin(false)}>
                                Sign Up
                            </button>
                        </a> */}
                    </div>
                </div>
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

const Wrapper = section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login