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
$(function () {
  var btn = $(".header__search"),
      block = $(".search__fixed");
  $(document).click(function (event) {
    var target = $(event.target),
        cur;

    if (target.is(".header__search")) {
      event.preventDefault();
      var index = btn.index(target);
      cur = block.eq(index).slideToggle();
      target.toggleClass("open");
    }

    if (target.closest(".search__fixed").length) return;
    block.not(cur).slideUp("slow");
    btn.not(target).removeClass("open");
  });
}); // Accordeon

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
$('.clients__list').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4
});
var fileInput = document.querySelector('.custom-file input');

function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
}

fileInput.addEventListener('change', function (e) {
  console.log(e.currentTarget.files);
  var filesLength = e.currentTarget.files.length;

  if (filesLength) {
    e.currentTarget.closest('.custom-file').querySelector('span').textContent = "".concat(filesLength, " ").concat(declOfNum(filesLength, ['файл', 'файла', 'файлов']));
  }
});
//# sourceMappingURL=main.js.map
