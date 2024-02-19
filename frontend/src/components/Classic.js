import React from "react";
import Image1 from "../images/other-room.jpg"
import Image2 from "../images/Classic-otherside.jpg"
import Image3 from "../images/Classic-3.jpg"

function Classic(){
    return(
        <div>
            <h2>Deluxe</h2>
            <div className="card">
                <img src={Image1} className="card-img-top" height="500"  alt="..."/>
                {/* <img src={Dining} className="image" height="500"  alt="..."/> */}
                <div className="card-body">
                    <h5 className="card-title">Classic</h5>
                    <p className="card-text"> Contact us at 0111852106 to book your room</p>
                </div>
            </div>

            <div className="card">
                <img src={Image2} className="card-img-top" height="500"  alt="..."/>
                {/* <img src={Dining} className="image" height="500"  alt="..."/> */}
                <div className="card-body">
                    <h5 className="card-title">Classic</h5>
                    <p className="card-text"> Contact us at 0111852106 to book your room</p>
                </div>
            </div>

            <div className="card">
                <img src={Image3} className="card-img-top" height="500"  alt="..."/>
                {/* <img src={Dining} className="image" height="500"  alt="..."/> */}
                <div className="card-body">
                    <h5 className="card-title">Classic</h5>
                    <p className="card-text"> Contact us at 0111852106 to book your room</p>
                </div>
            </div>
        </div>

    )
}
export default Classic