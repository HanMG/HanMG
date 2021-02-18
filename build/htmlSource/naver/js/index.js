  $(document).ready(function(){
          $('.bxslider').bxSlider();
    });
  
  
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
                  
});