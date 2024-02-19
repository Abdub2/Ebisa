import React from "react";
import NavBar from "./NavBar";
import Logo from "../images/Ebisa.jpeg"
import Image from "../images/Room.jpg"
import Dining from "../images/dining-side.jpg"
import { Link } from "react-router-dom";
import Other from "../images/other-room.jpg"

function Home(){
return(
    // <h1>THis is home</h1>
    <div>

        <div className="card">
            <img src={Image} className="card-img-top" height="500"  alt="..."/>
            {/* <img src={Dining} className="image" height="500"  alt="..."/> */}
            <div className="card-body">
                <h5 className="card-title">VIP</h5>
                <p className="card-text"> 5000 ksh per night</p>
                <p className="card-text"> Contact us at 0111852106 to book your room</p>
                <Link to="/vip">
                <button  className="btn btn-primary">Book this room</button>
                </Link>
            </div>
        </div>
        <div className="card">
            <img src={Other} height="500" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Deluxe</h5>
                <p className="card-text"> 2500ksh per night</p>
                <p className="card-text"> Contact us at 0111852106 to book your room</p>
                <Link to="/classic">
                <button  className="btn btn-primary">Book this room</button>
                </Link>
            </div>
        </div>

    </div>


)
}

export default Home