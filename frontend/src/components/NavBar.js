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
        <nav className="navbar navbar-expan-lg bg-primary-subtle">
        <div className=" container-fluid">
            <a className="navbar-brand" href="/home">Ebisa</a>
            <ul className="navbar-nav">
                {/* <li>
                    <button className = "btn btn-outline-success me-2" onClick={handleLogoutClick}>
                    Logout
                    </button>
                </li> */}
            </ul>


        </div>
        </nav>
    )
}

export default NavBar