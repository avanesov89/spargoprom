"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
var details = Array.from(document.querySelectorAll("details")); // Add the onclick listeners.

details.forEach(function (targetDetail) {
  targetDetail.addEventListener("click", function () {
    // Close all the details that are not targetDetail.
    details.forEach(function (detail) {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
}); // MENU OPEN
//Открыть меню по клику на триггер

$('.menu-trigger').on('click', function (event) {
  event.preventDefault();
  toggleMenu(true);
}); //Закрыть меню

$('.close-trigger, .body-overlay').on('click', function (event) {
  event.preventDefault();
  toggleMenu(false);
}); //Добавить или убрать класс

function toggleMenu(bool) {
  $('body, .body-overlay, .a-menu').toggleClass('menu-open', bool);
}

; // SUBMENU

$('.menu__item-drop').on('click', function () {
  if ($('.menu__item-drop').hasClass('open')) {
    $('.menu__item-drop, .sub-menu').removeClass('open');
  } else {
    $('.menu__item-drop, .sub-menu').addClass('open');
  }

  ;
});
$('.show-right').on('click', function (event) {
  $('.side-left').addClass('shifted');
  $('.side-right').removeClass('shifted');
});
$('.show-left').on('click', function (event) {
  $('.side-right').addClass('shifted');
  $('.side-left').removeClass('shifted');
});
$(".header__search").click(function () {
  $(".search__fixed").css({
    "display": "block"
  });
});
$(document).mouseup(function (e) {
  var div = $(".search__fixed");

  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.hide();
  }
});
$('.clients__list').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4
});
var myModal = new HystModal({
  linkAttributeName: "data-hystmodal"
});
//# sourceMappingURL=main.js.map
