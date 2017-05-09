/*
* 以流动布局和rem以及CSS3媒体查询来布局，如果单纯适配手机端的话，
* 一般一套设计图就可以了，使用rem，字体大小和图片都可以根据屏幕进行缩放，
* 以下是Javascript代码：
* */

(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
