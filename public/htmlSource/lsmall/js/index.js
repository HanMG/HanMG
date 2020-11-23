        $(function () {            

           var mySwiper1 = new Swiper ('.gallery1', {
             loop: true, //순환유무	 
             pagination: '.nav1', //네비게이션class명
             //grabCursor: true, //커서 손모양
             autoplay: 4000, //자동진행

             //이전 다음 버튼
             nextButton: '.swiper-button-next',
             prevButton: '.swiper-button-prev',
           })
        
            var mySwiper2 = new Swiper ('.gallery2', {
             loop: true, //순환유무	 
             pagination: '.nav2', //네비게이션class명
            /* grabCursor: true, //커서 손모양*/
             autoplay: 5000, //자동진행
             effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

             //이전 다음 버튼
             nextButton: '.swiper-button-next2',
             prevButton: '.swiper-button-prev2',
           })
           
            var mySwiper3 = new Swiper ('.gallery3', {
             loop: true, //순환유무	 
             pagination: '.nav3', //네비게이션class명
            /* grabCursor: true, //커서 손모양*/
             autoplay: 6000, //자동진행
             effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

             //이전 다음 버튼
             nextButton: '.swiper-button-next3',
             prevButton: '.swiper-button-prev3',
           })
           
           var mySwiper4 = new Swiper ('.gallery4', {
             loop: true, //순환유무	 
             pagination: '.nav3', //네비게이션class명
            /* grabCursor: true, //커서 손모양*/
             autoplay: 7000, //자동진행
             effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

             //이전 다음 버튼
             nextButton: '.swiper-button-next4',
             prevButton: '.swiper-button-prev4',
           })
           
           
           //미리보기                       
           $('.items li').mouseenter(function(){
                $(this).children('.preview').stop().slideToggle(150);
           });           
           $('.items li').mouseleave(function(){
                $(this).children('.preview').stop().slideToggle(500);
           });
           
         
           
            // 드롭다운메뉴
            var gnbA = $('#gnb>.gnb_list >li');
            var down_list = $('#gnb>.gnb_list > li > .list');
            gnbA.on("mouseenter",function(){
                    if(gnbA.target){
                        $(gnbA.target).children().children().hide();
                        $(this).children().children().show();            
                    }
                    else{
                        $(this).children().children().show();   
                    }                   
            });

            gnbA.mouseleave(function(){                                       
                        $(this).children().children().hide();                
            });
                    
            down_list.hover(function(){
                $(this).show();
            },function(){
                $(this).hide();
            });
           
           //주메뉴 호버css            
           gnbA.hover(function(){
                $(this).children().css({color:'darkred'});
           },function(){
                $(this).children().css({color:'#333'});
           });
           
          $('#gnb>.gnb_list>.list>li').hover(function(){
                $(this).css({background:'#eee'});            
          });
           
           
        });