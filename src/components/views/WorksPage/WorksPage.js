import React from 'react'
import { faDiceD6 } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function WorksPage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Works <FontAwesomeIcon icon={faDiceD6} size="1x" /></h1>                    
                </div>
            </div>
        </div>
    )
}

export default WorksPage
