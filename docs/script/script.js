console.clear();

function nav__hover() {
  $(".top-bar__nav > ul > li").mouseenter(function () {
    $(".top-bar").css("backgroundColor", "white");
    $(".top-bar__nav > ul > li > a").addClass("hover");
  });
}

function nav__remv() {
  $(".top-bar__nav > ul > li").mouseleave(function () {
    $(".top-bar").css("backgroundColor", "");
    $(".top-bar__nav > ul > li > a").removeClass("hover");
  });
}

nav__hover();
nav__remv();
