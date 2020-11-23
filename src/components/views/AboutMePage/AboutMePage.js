import React from 'react'
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AboutMePage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-4 titles">About Me <FontAwesomeIcon icon={faAddressCard} size="1x" /></h1>
                </div>
            </div>
            <div class="container text-center mb-5">
                <div class="row">
                    <div class="col-md-6">
                        <p><h4>NAME.</h4></p>
                        <p>한문구</p>
                        <p><h4>BIRTH.</h4></p>
                        <p>1989. 11</p>
                        <p><h4>SKILLS.</h4></p>
                        <div>                           
                            <p><span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">Javascript</span></p>                           
                            <p><span class="tag">Jquery</span><span class="tag">BootStrap</span><span class="tag">React</span></p>                           
                            <p><span class="tag">Photoshop</span></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="" alt="my Photo" width="100%" />
                    </div>
                </div>
                <div>
                    <p class="mt-4 p-3"><h4>EXPERIENCE.</h4></p>
                    <div class="row ex_company">
                        <div class="col-md-6 col-sm-12">
                            <p class="company">뷰모션 (2016.12 ~ 2018.01)</p>
                            <p class="company_job">직무 : WebPublisher</p>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <p class="company_work">업무 내용</p>
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
