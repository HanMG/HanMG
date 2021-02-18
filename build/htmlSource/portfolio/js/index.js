    //gnb
   $(function(){  // gnb 메뉴에 마우스별 옵션 
       $('.gnb a').mouseenter(function(){
            $(this).css({color:"#E74C3C"});            
       })
       $('.gnb a').mouseout(function(){
            $(this).css({color:"#ECF0F1"});          
       })
       
       $(window).scroll(function(){ // 스크롤 위치별 opacity 변경
            var h = $(document).scrollTop(); // 스크롤의 위치 변수 h
            
            if(h <= 101){
                $('#header').css({background: "rgba(44,62,80,0)"});                
            }           
            else{
                $('#header').css({background: "rgba(44,62,80,1)"});
            }
       })
       
      // home 의 typo
      $('#home h2').fadeIn(3000);      
      $('#home p').fadeIn(3500);
      
      // logo 클릭시 상단으로 이동      
      $('#header h1 a').click(function(){
            $('html,body').stop().animate({scrollTop:0},700);
            return false;
      })
      
      // gnb 메뉴 클릭시 스크롤이동      
      $('.gnb li:eq(0) a').click(function(){
            $('html,body').stop().animate({scrollTop:0},700);
            return false; //이동시 깜박이는 것, a태그에서 충돌나는 것을 방지
      })
      $('.gnb li:eq(1) a').click(function(){
            $('html,body').stop().animate({scrollTop:1000},700);
            return false;
      })
      $('.gnb li:eq(2) a').click(function(){
            $('html,body').stop().animate({scrollTop:2200},700);
            return false;
      })
      $('.gnb li:eq(3) a').click(function(){
            if($(window).width() < 768) {
                $('html,body').stop().animate({scrollTop:4500},700);
                return false;
            }
            else if($(window).width() > 768 && $(window).width() < 1300){
                 $('html,body').stop().animate({scrollTop:5000},700);
                return false;
            }
            else{
                $('html,body').stop().animate({scrollTop:3980},700);
                return false;
            }
      })     
      
      
      // #home 다운에로우모션
      $('.down_arrow').click(function(){
            $('html, body').stop().animate({scrollTop:960},700);
            return false;
        })
        
      $('#header>.inner>.menu_btn').click(function(){            
            $('#header>.inner>.gnb').slideToggle(500);                     
      });
        
        
      // 미디어 쿼리 gnb show, hide
      $(window).resize(function(){
   
      if ( $(this).width() > 767 ) {
             $(".gnb").show();
      } else {
              $(".gnb").hide();
      }
   
      });
      
      
      //fancybox   #works의 zoom기능 
      $('.fancybox').fancybox({
            padding : 0,
            openEffect  : 'elastic',
            closeBtn: true
      });
      
      // fixed된 배경의 속도를 조절 
      $(window).scroll(function(){
        var sc = $(this).scrollTop(); // 스크롤 범위값을 sc에 저장
        $('.inbox').css({top:-sc*0.5});
      });
        
        
        
});