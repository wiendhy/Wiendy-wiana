function setCookie(e, o, i) {
    var n = new Date;
    n.setDate(n.getDate() + i);
    var a = escape(o) + (null == i ? "" : "; expires=" + n.toUTCString());
    document.cookie = e + "=" + a
}

function getCookie(e) {
    var o, i, n, a = document.cookie.split(";");
    for (o = 0; o < a.length; o++)
        if (i = a[o].substr(0, a[o].indexOf("=")), n = a[o].substr(a[o].indexOf("=") + 1), i = i.replace(/^\s+|\s+$/g, ""), i == e) return unescape(n)
}
var MS_Tamvan_COOKIE = "cookiemastamvans",
    hideMe = document.getElementById("myModal"),
    cookie = getCookie(MS_Tamvan_COOKIE),
    cookiemastamvans = cookie ? cookie : hideMe.style.display,
    hiding = document.getElementById("hiding");
hiding.onclick = function() {
    setCookie(MS_Tamvan_COOKIE, cookiemastamvans, 100), hideMe.style.display = "block" === cookiemastamvans ? "none" : "block", cookiemastamvans = hideMe.style.display
}, hiding.onclick();