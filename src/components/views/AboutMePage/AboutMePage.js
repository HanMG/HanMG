import React from 'react'
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AboutMePage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">About Me <FontAwesomeIcon icon={faAddressCard} size="1x" /></h1>                    
                </div>
            </div>
        </div>
    )
}

export default AboutMePage
