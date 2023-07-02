$(document).ready(function () {
  $("#box").click(function () {
    $("#chara").animate(
      {
        top: "41.5%",
      },
      2000
    );
  });
  $(window).scroll(function () {
    $("#one").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
  7;
  $(window).scroll(function () {
    $("#button1").each(function (i) {
      var bottom_of_object1 = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window1 = $(window).scrollTop() + $(window).height();

      if (bottom_of_window1 > bottom_of_object1) {
        setTimeout(function () {
          $("#button1").animate({ opacity: "1" });
        }, 1000);
      }
    });
  });

  $(window).scroll(function () {
    /* 2 */
    $("#two").each(function (i) {
      var bottom_of_object3 = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window3 = $(window).scrollTop() + $(window).height();

      if (bottom_of_window3 > bottom_of_object3) {
        setTimeout(function () {
          $("#two").animate({ opacity: "1" });
        }, 2500);
      }
    });
  });

  $(window).scroll(function () {
    $("#button2").each(function (i) {
      var bottom_of_object4 = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window4 = $(window).scrollTop() + $(window).height();

      if (bottom_of_window4 > bottom_of_object4) {
        setTimeout(function () {
          $("#button2").animate({ opacity: "1" });
        }, 3500);
      }
    });
  });

  $(window).scroll(function () {
    $("#three").each(function (i) {
      var bottom_of_object5 = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window5 = $(window).scrollTop() + $(window).height();

      if (bottom_of_window5 > bottom_of_object5) {
        setTimeout(function () {
          $("#three").animate({ opacity: "1" });
        }, 4500);
      }
    });
  });

  $(window).scroll(function () {
    $("#story").each(function (i) {
      var bottom_of_object6 = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window6 = $(window).scrollTop() + $(window).height();

      if (bottom_of_window6 > bottom_of_object6) {
        setTimeout(function () {
          $("#story").animate({ opacity: "1", "margin-top": "0" });
        }, 5500);
      }
    });
  });

  $("#slick01").slick({
    centerMode: true,
    slide: "li",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    /*arrows:true,*/
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    pauseOnHover: true,
    dots: false,
  });

  /*비디오*/
  $("#slick01 li a").on("click", function () {
    $(".modalbox").show();
    $(".modalbox video").attr("src", $(this).attr("href"));
    return false;
  });

  $("body").on("click", function () {
    $(".modalbox").hide();
  });

  // $(window).scroll(function () {
  //   $("#ric").each(function (i) {
  //     var bottom_of_object7 = $(this).offset().top + $(this).outerHeight();
  //     var bottom_of_window7 = $(window).scrollTop() + $(window).height();

  //     if (bottom_of_window7 >= bottom_of_object7) {
  //       $(this).animate({ opacity: "1" }, 50);
  //     }
  //   });
  // });
  $(window).scroll(function () {
    $("#ric").each(function (i) {
      var bottom_of_object7 = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window7 = $(window).scrollTop() + $(window).height();

      if (bottom_of_window7 > bottom_of_object7 / 2) {
        $(this).animate({ opacity: "1" }, 4500);
      }
    });
  });

  const content = "Wanna Play?\n CHECK THIS OUT !";
  const text = document.querySelector("#text");
  let i = 0;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
      text.textContent = "";
      i = 0;
    }
  }
  setInterval(typing, 200);

  const A = $("html,body").scrollTop();

  console.log(A);
  $("#article4-1").position().top;

  $(window).scroll(function () {
    $(".wp1").waypoint(
      function () {
        $(".wp1").addClass("animated fadeInLeft");
      },
      { offset: "100%" }
    );
  });

  $(".wp2").waypoint(
    function () {
      $(".wp2").addClass("animated1 marginLeft");
    },
    { offset: "100%" }
  );

  // 스크롤창
  $(".custom-btn").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

// 창
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");
var page = 1;
var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });

});
