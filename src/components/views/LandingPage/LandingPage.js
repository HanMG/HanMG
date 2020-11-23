import React from 'react'
import GitHubCalendar from 'react-github-calendar'

function LandingPage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">HANMOONGOO's Portfolio</h1>
                    <p class="lead">Welcome to My Portfolio for WebPublisher / WebFrontEnd</p>
                    <p class="lead">REACT Version</p>
                    <div class="row">
                        <div class="col-lg-6">

                        </div>
                        <div class="col-lg-6">
                            <div class="container">
                                <p><b>Non React Version</b></p>
                                <a href="/htmlSource/portfolio/index.html">Single Page Portfolio</a>
                                <hr />

                                <p><b>GitHub Profile</b></p>
                                <a href="https://github.com/HanMG">https://github.com/HanMG</a>
                                <hr />
                                <p><b>Github Graph</b></p>
                                <GitHubCalendar username="HanMG" showTotalCount={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
