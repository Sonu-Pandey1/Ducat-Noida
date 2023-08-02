
// import React from 'react'
import {} from "react-icons"
export default function ContactInfoCards({title,phone,address}) {
    return (
        <div>
            
                    <div className="cardd ccc">
                        <div className="carddbody">
                            <h5 className="carddtitle">{title}</h5>
                            <p className="carddtext">{`Phone : ${phone}`}</p>
                            <p className="carddtext">{`Email : info@ducatindia.com`}</p>
                            <p className="carddtext">{address}</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
               
        </div>
    )
}
