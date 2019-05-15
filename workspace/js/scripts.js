/*
Scroll top - Code by Zsolt Király
v1.0.1 - 2018-04-05
*/

'use scrict'
var scrollTop = function() {

    function signatura() {
        if (window['console']) {
            const text = {
                black: '%c     ',
                blue: '%c   ',
                author: '%c  Zsolt Király  ',
                github: '%c  https://zsoltkiraly.com/'
            }

            const style = {
                black: 'background: #282c34',
                blue: 'background: #61dafb',
                author: 'background: black; color: white',
                github: ''
            }

            console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
        }
    }

    signatura();

    function scrolling(duration) {

        var startingY = window.pageYOffset;

        function easing(t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }

        var start;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) {
                start = timestamp;
            }

            var time = timestamp - start;
            var percent = Math.min(time / duration, 1);

            percent = easing(percent);

            window.scrollTo(0, startingY + (startingY * -1 ) * percent);

            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        });
    }

    function click(t, c) {
        t.addEventListener('click', function() {
            scrolling(c.durationTime);
        }, false);
    }

    function topIcon(t, c) {

        window.addEventListener('scroll', function() {

            var body = document.body,
                html = document.documentElement;

            if (body.scrollTop > c.scrollDistance || html.scrollTop > c.scrollDistance) {
                t.classList.add('active');

            } else {
                t.classList.remove('active');
            }
            
        }, false);
    }

    function app(config) {
        var top = document.querySelector('.top');

        if(top) {
            click(top, config);
            topIcon(top, config);
        }
    }

    return {
        app:app
    }

}();