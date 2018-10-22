! function (a) {
    function b() {
        var Length = document.documentElement.clientWidth;
		var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 720 : '';
		document.documentElement.style.fontSize = baseWidth / 720 * 100 + 'px';
    }
    window.addEventListener("DOMContentLoaded", function () {
        b()
    }, !1), window.addEventListener("resize", function () {
        b()
    }), b()
}(window);
