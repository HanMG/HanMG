import React from 'react'
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactPage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Contact Me <FontAwesomeIcon icon={faPhoneSquareAlt} size="1x" /></h1>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
