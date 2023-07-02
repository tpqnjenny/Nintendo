$(function(){
  // balloon 효과 및 cursor 움직임
  $("#page2").on("mouseenter", function(){
    $(".balloon2").addClass("balloon2_ani");
    $(".cursor").animate({right : '22.5%'}, 1500, function(){
      $(this).attr("src", "img/page2/cursor_click.png").css("top" , "44%").css("width", "150px");
    });
  });
  $("#page3").on("mouseenter", function(){
    $(".balloon3").addClass("balloon3_ani");
  });
  $("#page4").on("mouseenter", function(){
    $(".balloon4").addClass("balloon4_ani");
    $(".ycursor").animate({right : '51%'}, 1500, function(){
      $(this).attr("src", "img/page4/cursor_click.png").css("top" , "46%").css("width", "140px");
    });
  });
  $("#page5").on("mouseenter", function(){
    $(".balloon5").addClass("balloon5_ani");
  });
  
  // PAGE 5 - ENDING 글
  $("#page5").on("mouseenter", function(){
    $(".eng").addClass("ani_fadeIn delay_2s");
    $(".kor").addClass("ani_fadeIn delay_5s");
    $(".mds").addClass("ani_fadeIn delay_7s");
    $(".mds span").addClass("ani_txtup");
  });
})