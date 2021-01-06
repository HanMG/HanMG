import React from 'react'
import { faPhoneAlt, faMobileAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactPage() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center">
                    <h1 className="display-4 titles">Contact Me <FontAwesomeIcon icon={faPhoneAlt} size="1x" /></h1>
                </div>
            </div>
            <div className="container pt-lg-5 pb-lg-5">
                <div className="row text-center">
                    <div className="col-lg-4 p-1"> 
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="4x" />
                        <p>GURO, SEOUL</p>
                    </div>
                    <div className="col-lg-4 p-1">
                        <FontAwesomeIcon icon={faMobileAlt} size="4x" />
                        <p>010 . 9220 . 8169</p>
                    </div>
                    <div className="col-lg-4 p-1">
                        <FontAwesomeIcon icon={faEnvelope} size="4x" />
                        <p>HANMOONGOO @ gmail.com</p>
                    </div>
                </div>    
            </div>
            
        </div>
    )
}

export default ContactPage
