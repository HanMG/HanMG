import React from 'react'
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AboutMePage() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 titles">About Me <FontAwesomeIcon icon={faAddressCard} size="1x" /></h1>
                </div>
            </div>
            <div className="container text-center mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="" alt="my Photo" width="100%" />
                    </div>
                    <div className="col-md-6">
                        <p><h4>NAME.</h4></p>
                        <p>한문구</p>
                        <p><h4>BIRTH.</h4></p>
                        <p>1989. 11</p>
                        <p><h4>SKILLS.</h4></p>
                        <div>                           
                            <p><span className="tag">HTML5</span><span className="tag">CSS3</span><span className="tag">Javascript</span></p>                           
                            <p><span className="tag">Jquery</span><span className="tag">BootStrap</span><span className="tag">React</span></p>                           
                            <p><span className="tag">Photoshop</span></p>
                        </div>
                    </div>                    
                </div>
                <hr />
                <div>
                    <p className="mt-4 p-3"><h4>EXPERIENCE.</h4></p>
                    <div className="row ex_company">
                        <div className="col-md-6 col-sm-12">
                            <p className="company">뷰모션 (2016.12 ~ 2018.01)</p>
                            <p className="company_job">직무 : WebPublisher</p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="company_work">업무 내용</p>
                            <p>1. 태블릿 App UI 퍼블리싱</p>
                            <p>2. 사이트 유지보수</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage
