// 풀 페이지 가로 스크롤
$(function(){
  let d_width = 0;
  let d_height = 0;

  function tmp() {
    let con_width = $(window).outerWidth() * $(".page").length; 

    $("section").css({
        width: con_width,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0
    });

    let w_width = $(window).width();
    let w_height = $(window).height();

    d_width = con_width - w_width;
    d_height = $('body').height() - w_height
  }

  tmp();

  let array = [];
  for(let i=0; i<$('.page').length; i++) {
    array[i] = $('.page').eq(i).offset().left
  }

  let chk = true;
  $('.page').on('mousewheel DOMMouseScroll', function(){
    if(chk) {
      chk = false;
      setTimeout(function(){
        chk = true;
      }, 500)

      let w_delta = event.wheelDelta / 120;
      
      if(w_delta < 0 && $(this).next().length > 0) {
        $('section').animate({left: -array[$(this).index()+1]
        }, 500)
      }
      else if(w_delta > 0 && $(this).prev().length > 0) {
        $('section').animate({left: -array[$(this).index()-1]
        }, 500)
      }
    }
  });

  $(window).resize(function(){
    for(let i=0; i<$('.page').length; i++) {
      array[i] = $('.page').eq(i).offset().left
    }
    tmp();
  })
});
