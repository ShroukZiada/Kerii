/////////////////////////animation start//////////////////////////////////
$(function () {
  $(".typed").typed({
    strings: [" Kerri Deo.", "A Graphic Designer.", "A Photographer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { },
  });
});
/////////////////////////animation end//////////////////////////////////



/////////////////////////boxColor start//////////////////////////////////

let Lis = $(".boxColor li");

Lis.eq(0).css("background-color", "#e65f78");
Lis.eq(1).css("background-color", "#37b8df");
Lis.eq(2).css("background-color", "#31b164");
Lis.eq(3).css("background-color", "#5d69f6");
Lis.eq(4).css("background-color", "#87ceeb");
Lis.eq(5).css("background-color", "#f2b31a");

$(".boxColor li").click(function () {
  var x = $(this).css("backgroundColor");
  $(".changed").css("backgroundColor", x);
  $('.change').css("color", x);

});




$(".coloreContainer").ready(function () {
  let left = $(".coloreContainer").css({ left: -190 }, 8000);
});


$(".coloreContainer  a").click(function () {

  let left = $(".coloreContainer").css("left");
  if (left < "0px") {
    $(".coloreContainer").animate({ left: 0 }, 1000);   //show
  }
  else {
    $(".coloreContainer").animate({ left: -190 }, 1000);  //hide
  }
});

/////////////////////////boxColor end//////////////////////////////////

/////////////////////////spinner//////////////////////////////////

$(document).ready(function () {
  $(".ForLoad").fadeOut(3000, function () {
    $("body").css("overflow", "auto")
  })
})
/////////////////////////spinner end////////////////////////////////// */

/////////////////////////navbat start//////////////////////////////////


let aboutSection = $("#About").offset().top;
$(".up").fadeOut(0)


$(window).scroll(function () {

  var scrollValue = $(window).scrollTop()

  if (scrollValue >= aboutSection) {
    $(".navbar").addClass("NavBg");
    $(".nav-item a , .headertitle a").addClass("coloritem");
    $(".imgcolor a").addClass("coloritem");
    $(".up").fadeIn(1000)

  }
  else {
    $(".navbar").removeClass("NavBg");
    $(".nav-item a , .headertitle a").removeClass("coloritem");
    $(".imgcolor a").removeClass("coloritem");
    $(".up").fadeOut(1000)


  }

})
/////////////////////////navbat end//////////////////////////////////


$(".up").click(function () {



  $("body").animate({ scrollTop: "0" }, 300)



})
