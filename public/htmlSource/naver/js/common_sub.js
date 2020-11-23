 
  $(document).ready(function(){    
        
        $('#header .gnb ul li a').hover(function(){
            $(this).css({'color':'#67d052'});
        }, function(){
            $(this).css({'color':'#434449'});
        });
        
        $('.gnb > ul > li').hover(function(){           
            $(this).find('.sub').show();            
        }, function(){
            $(this).find('.sub').hide();            
        });   
        
        $('.etc_gnb > ul> .global').hover(function(){            
            $(this).find('.global_sub').show();
        }, function(){            
            $(this).find('.global_sub').hide();
        });
        
        $('.etc_gnb > ul> .lang').hover(function(){
            $(this).css({background:'#fafafa', border:0});
            $(this).find('.lang_sub').show();
            
        }, function(){
            $(this).css({background:'none', border:'1px solid #e4e4e4'});
            $(this).find('.lang_sub').hide();
        });    
        
        $('#footer_line > ul >li.family').hover(function(){            
            $(this).find('.family_sub').show();
            $(this).find('span').removeClass('ion-arrow-down-b').addClass('ion-arrow-up-b');            
        }, function(){            
            $(this).find('.family_sub').hide();
            $(this).find('span').removeClass('ion-arrow-up-b').addClass('ion-arrow-down-b');
        });
        
        $('.sec_bottom ul li').hover(function(){               
            $(this).css({borderBottomColor:'#67d052'});            
        },function(){
            $(this).css({borderBottomColor:'#333'});
        });
        
        
        /* 서브라인 감추기 / 보이기 */
        var stat = 1;
        $('#subline .subline_btn').click(function(){            
            if(stat == 1){
             $('#subline .subline_wrap').css({display: 'none'});
             $('#subline').css({height: 20});
             $(this).find('span').removeClass('ion-ios-arrow-up').addClass('ion-ios-arrow-down');  
             $(this).css({top:20});
             stat = 0;
            }
            else if(stat == 0){
              $('#subline .subline_wrap').css({display:'block'});
              $('#subline').css({height: 135});
              $(this).find('span').removeClass('ion-ios-arrow-down').addClass('ion-ios-arrow-up');      
               $(this).css({top:-20});
             stat = 1;   
            }
        });
        
        
        /*연혁 width조절*/
         var container_width = 255 * $("#subline .subline_wrap .col1 .scroll_wrap .scroll  div").length;
           $("#subline .subline_wrap .col1 .scroll_wrap .scroll").css("width", container_width);          
});