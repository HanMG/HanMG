import React from 'react'
import { faDiceD6 } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import WorkList from "./WorkList"

function WorksPage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-4 titles">Works <FontAwesomeIcon icon={faDiceD6} size="1x" /></h1>                    
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 p-2">
                        <WorkList title="SK이노베이션" />
                    </div>
                    <div class="col-lg-4 p-2">
                        <WorkList />
                    </div>
                    <div class="col-lg-4 p-2">
                        <WorkList />   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksPage
