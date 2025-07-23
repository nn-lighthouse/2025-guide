//スクロールバー幅を計算する////////////////////////////////////////////
const setScrollbarWidth = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    // カスタムプロパティの値を更新する
    document.documentElement.style.setProperty('--scrollbar', `${scrollbarWidth}px`);
};

// 表示されたとき
window.addEventListener('load', setScrollbarWidth);
// リサイズしたとき
window.addEventListener('resize', setScrollbarWidth);

//nav/////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-btn');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
});

//plus/minus-btn///////////////////////////////////////////////////////
$(function() {
  $('.plus-btn').click(function() {
    $('.plus-btn').animate({
      opacity: 0
    }, 500, function() {
      $('.plus-btn').css('display', 'none');
      $('.minus-btn').css('display', 'block');
      $('.minus-btn').animate({
        opacity: 1
      }, 500);
    });
  });

  $('.minus-btn').click(function() {
    $('.minus-btn').animate({
      opacity: 0
    }, 500, function() {
      $('.minus-btn').css('display', 'none');
      $('.plus-btn').css('display', 'block');
      $('.plus-btn').animate({
        opacity: 1
      }, 500);
    });
  });

});

//logo///////////////////////////////////////////////////////
$(function() {
  $('.plus-btn').click(function() {
    $('.logo_df').animate({
      opacity: 0
    }, 500, function() {
      $('.logo_df').css('display', 'none');
      $('.logo_menu').css('display', 'block');
      $('.logo_menu').animate({
        opacity: 1
      }, 500);
    });
  });

  $('.minus-btn').click(function() {
    $('.logo_menu').animate({
      opacity: 0
    }, 500, function() {
      $('.logo_menu').css('display', 'none');
      $('.logo_df').css('display', 'block');
      $('.logo_df').animate({
        opacity: 1
      }, 500);
    });
  });

});

//slick////////////////////////////////////////////////////////////////
$(document).ready(function () {
    const $carousel = $(".slider");
    $carousel.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
        $carousel.find(".slick-slide").each((index, el) => {
            const $this = $(el),
                slickindex = $this.attr("data-slick-index");
            if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
                if (slickindex == "-1") {
                    $this.addClass("is-active-next");
                } else {
                    $this.removeClass("is-active-next");
                }
            } else if (nextSlide == 0) {
                if (slickindex == slick.slideCount) {
                    $this.addClass("is-active-next");
                } else {
                    $this.removeClass("is-active-next");
                }
            } else {
                $this.removeClass("is-active-next");
            }
        });
    });

    $('.slider').slick({
        dots: false,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
    });
});
