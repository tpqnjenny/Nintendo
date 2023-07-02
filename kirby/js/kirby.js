$(function(){
    const swiper=new Swiper('.swiper-container',{
        pagination:'.swiper-pagination',
        nextButton:'.swiper-button-next',
        prevButton:'.swiper-button-prev',
        paginationClickable:true,
        spaceBetween:30,
        autoplay:3500,
        autoplayDisableOnInteraction:false
    });

    // 커비 머리 애니메이션
    $(".kirby-head").animate({"margin-bottom":"200px"},2000)
                    .animate({"margin-bottom":"250px"},1100)

    
    // 커비 각 캐릭터 선택 시 이미지 전환
    $(".character-box a").click(function(){
        $(".character-big img").attr("src",$(this).attr("href"));
        return false;
       });

    // 커비 각 캐릭터 선택 시 텍스트 전환
    $(".kirby-intro ul li:not("+$(".character-box ul li a.selected").attr("data-tab")+")").hide();

    $('.character-box ul li a').click(function(){
        $('.character-box ul li a').removeClass('selected');
        $(this).addClass('selected');
        $(".kirby-intro ul li").hide();
        $($(this).attr("data-tab")).show();
        return false;
    })

    // 커비 게임 이미지 페이드 인
    $(document).ready(function() {
        $(window).scroll( function(){
                
            $('.games-img1').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','top':'0','left':'3%','width':'400px'},2000)
                           

                }
                
            }); 
        });
    });

    $(document).ready(function() {
        $(window).scroll( function(){
                
            $('.games-img2').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','top':'0','left':'36%','width':'400px'},3000);
                }
                
            }); 
        });
    });

    $(document).ready(function() {
        $(window).scroll( function(){
                
            $('.games-img3').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','top':'0','left':'69%','width':'400px'},4000);
                }
                
            }); 
        });
    });

        // 커비 게임 타이틀 페이드 인
        $(document).ready(function() {
            $(window).scroll( function(){
                    
                $('.title1').each( function(i){
                    
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    if( bottom_of_window > bottom_of_element ){
                        $(this).animate({'opacity':'1'},3000)
                               
    
                    }
                    
                }); 
            });
        });
    
        $(document).ready(function() {
            $(window).scroll( function(){
                    
                $('.title2').each( function(i){
                    
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    if( bottom_of_window > bottom_of_element ){
                        $(this).animate({'opacity':'1'},4000);
                    }
                    
                }); 
            });
        });
    
        $(document).ready(function() {
            $(window).scroll( function(){
                    
                $('.title3').each( function(i){
                    
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    if( bottom_of_window > bottom_of_element ){
                        $(this).animate({'opacity':'1'},5000);
                    }
                    
                }); 
            });
        });

    //스크롤 탑
    $(".scrolltop").click(function(){
		$("html,body").animate({scrollTop:0},'slow');
		return false;
	});
                    
})

