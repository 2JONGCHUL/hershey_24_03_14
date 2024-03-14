console.clear();

// nav bar hover
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

ScrollTrigger;
ScrollTrigger.create({
  trigger: ".hersheys-menu__banner",
  start: "top 40%",
  end: "bottom 50%",
  // endTrigger: "",
  markers: true,
  // toggleClass: "active",
  onEnter: function () {
    // 위에서 아래로 내려오다가 트리거 엘리먼트의 정수리를 발견했을 때
    $(".hersheys-menu__banner").addClass("on");
  },
  onLeave: function () {
    $(".choco1").addClass("on");
  },
});

function SwiperSlide1__init() {
  const swiper = new Swiper(".swiper-slide-box-1 .swiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
  });
}

SwiperSlide1__init();
