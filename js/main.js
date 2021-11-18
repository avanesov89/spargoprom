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
});
//# sourceMappingURL=main.js.map
