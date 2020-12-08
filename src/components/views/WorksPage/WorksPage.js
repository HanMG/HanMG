import React from 'react'
import { faDiceD6} from "@fortawesome/free-solid-svg-icons"
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
            <div class="container mb-5">
                <div class="row">
                    <WorkList imgUrl="/image/potenit.jpg" title="POTENIT" skills="Bootstrap4 HTML5 CSS3" describe="POTENIT 전체사이트" url="/htmlSource/potenit/index.html" />
                    <WorkList imgUrl="/image/skhynix.jpg" title="SK이노베이션" skills="HTML5 CSS3" describe="SK INOVATION 첫화면" url="/htmlSource/skhynix/index.html" />
                    <WorkList imgUrl="/image/lsmall.jpg" title="LSMALL" skills="HTML5 CSS3" describe="lsmall 첫화면 " url="/htmlSource/lsmall/index.html" />
                    <WorkList imgUrl="/image/naver.jpg" title="NAVER" skills="HTML5 CSS3" describe="네이버회사 첫화면, 소개페이지" url="/htmlSource/naver/index.html" />
                    <WorkList imgUrl="/image/lottelab.jpg" title="롯데연구소" skills="HTML5 CSS3" describe="롯데연구소 첫화면" url="/htmlSource/lottelab/index.html" />
                    <WorkList imgUrl="/image/take.jpg" title="TAKE" skills="HTML5 CSS3" describe="KT M&amp;S 첫화면" url="/htmlSource/takelte/index.html"/>                    
                    <WorkList imgUrl="/image/orion.jpg" title="ORION" skills="HTML5 CSS3" describe="오리온 모바일, 회사소개, CEO페이지" url="/htmlSource/m/orion/index.html" m="1"/>
                </div>
            </div>
        </div>
    )
}

export default WorksPage
