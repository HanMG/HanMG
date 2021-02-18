        $(function () {            
          var mySwiper1 = new Swiper('.swiper-container1', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 500,
            autoplay: {
                delay: 5000,
            },
    
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
    
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            })
    
            var mySwiper2 = new Swiper('.swiper-container2', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 500,
            autoplay: {
                delay: 3000,
            },
    
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
    
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            })
    
            var mySwiper3 = new Swiper('.swiper-container3', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 500,
            autoplay: {
                delay: 4000,
            },
    
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
    
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            })
    
            var mySwiper4 = new Swiper('.swiper-container4', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 500,
            autoplay: {
                delay: 6000,
            },
    
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
    
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            })
           
           
           //미리보기                       
           $('.items li').on("mouseenter",function(){
                $(this).children('.preview').stop().slideToggle(150);
           }).on("mouseleave", function(){
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

            gnbA.on("mouseleave",function(){                                       
              $(this).children().children().hide();                
            });
                    
            down_list.on("mouseenter",function(){
                $(this).show();
            },function(){
                $(this).hide();
            });
           
           //주메뉴 호버css            
           gnbA.on("mouseenter",function(){
                $(this).children().css({color:'darkred'});
           }).on("mouseleave",function(){
                $(this).children().css({color:'#333'});
           });

          $('#gnb>.gnb_list>.list>li').hover(function(){
                $(this).css({background:'#eee'});            
          });
           
           
        });