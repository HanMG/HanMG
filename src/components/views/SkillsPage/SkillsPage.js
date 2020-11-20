import React from 'react'
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SkillsPage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-4 titles">Skills <FontAwesomeIcon icon={faCode} size="1x" /></h1>                    
                </div>
            </div>
        </div>
    )
}

export default SkillsPage
