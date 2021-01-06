import React from 'react'
import GitHubCalendar from 'react-github-calendar'

function LandingPage() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">HANMOONGOO's Portfolio</h1>
                    <p className="lead">Welcome to My Portfolio for WebPublisher / WebFrontEnd</p>
                    <p className="lead">REACT Version</p>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="container">
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
