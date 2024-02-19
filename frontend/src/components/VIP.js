import React from "react";
import Vip from "../images/vip-side.jpg"
import Image from "../images/Room.jpg"


function VIP(){

    return(
        <div>
        <div className="card">
            <img src={Vip} className="card-img-top" height="500"  alt="..."/>
            {/* <img src={Dining} className="image" height="500"  alt="..."/> */}
            <div className="card-body">
                <h5 className="card-title">VIP</h5>
                <p className="card-text"> Contact us at 0111852106 to book your room</p>
            </div>
        </div>
        <div className="form-container">
      <form >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
        //   value={formData.name}
        //   onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        //   value={formData.email}
        //   onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
        //   value={formData.message}
        //   onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
        </form>
        </div>
    </div>


    )
}

export default VIP