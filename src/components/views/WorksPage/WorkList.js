import React from 'react'

function WorksList(props) {
    return (

        <div class="col-lg-4 p-2">
            <div class="card">
                <img class="card-img-top" src={props.imgUrl} alt="Card image" style={{ width: "100%" }} />               
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <hr />
                    <p><b>SKILLS</b></p>
                    <p>{props.skills}</p>
                    <p><b>DESCRIBE</b></p>
                    <p class="card-text">{props.describe}</p>                    
                    <a href={props.url} class="btn btn-works stretched-link">VIEW</a>
                </div>
            </div>
        </div>

    )
}

export default WorksList
