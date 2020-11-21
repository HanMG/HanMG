import React from 'react'

function WorksList(props) {
    return (
        <div>
            <div class="card">
                <img class="card-img-top" src="img_avatar1.png" alt="Card image" style={{ width: "100%" }} />
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary stretched-link">VIEW</a>
                </div>
            </div>
        </div>
    )
}

export default WorksList
