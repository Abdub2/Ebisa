import React from "react";
import { Link } from "react-dom"

function NavBar({ user, setUser }){
    function handleLogoutClick(){
        fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
            if(r.ok){
                setUser(null);
            }
        });
    }

    return (
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Ebisa</a>
            <button onClick={handleLogoutClick}>
                Logout
            </button>
        </div>
        </nav>
    )
}

export default NavBar