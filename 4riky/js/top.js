var upTop = document.getElementById("toTop");

window.onscroll = function () {
    "use strict";
    if (window.pageYOffset >= 40) {
        upTop.style.display = 'block';
    } else {
        upTop.style.display = 'none';
    }
};