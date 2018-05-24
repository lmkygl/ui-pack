// hamburger 버튼 클릭시 모션 tweenMax 이용
(function () {
    var $btn_wrap = $('[data-ui="hamburger_wrap"]');
    var $btn = $btn_wrap.find('.hamburger');

    function hamburger_motion(e) {
        var $target = $(e.target);
        var $line_first = $target.find('span:nth-child(1)');
        var $line_sec = $target.find('span:nth-child(2)');
        var $line_last = $target.find('span:nth-child(3)');

        $(this).toggleClass('is-active');
        if ($target.hasClass('is-active')) {

            if ($target.hasClass('hamburger_1')) {
                TweenMax.to($line_first, 0.2, {
                    y: 13,
                    rotation: 45,
                });
                TweenMax.to($line_sec, 0.2, {
                    opacity: 0
                });
                TweenMax.to($line_last, 0.2, {
                    y: -13,
                    rotation: -45,
                });
            }
            else if ($target.hasClass('hamburger_2')) {
                TweenMax.to($line_first, 0.2, {
                    y: 13,
                });
                TweenMax.to($line_last, 0.2, {
                    y: -13,
                });
            }
            else if ($target.hasClass('hamburger_3')) {
                TweenMax.to($line_first, 0.2, {
                    width: 40,
                    x: -10,
                    rotation: -45
                });
                TweenMax.to($line_last, 0.2, {
                    width: 40,
                    x: -10,
                    rotation: 45
                });
            }
            else if ($target.hasClass('hamburger_4')) {
                TweenMax.to($line_first, 0.2, {
                    width: 40,
                    x: 10,
                    rotation: 45
                });
                TweenMax.to($line_last, 0.2, {
                    width: 40,
                    x: 10,
                    rotation: -45
                });
            }
            else if ($target.hasClass('hamburger_5')) {
                TweenMax.to(this, 0.2,{
                    rotation: 90
                });
                TweenMax.to($line_first, 0.2, {
                    width: 35,
                    y: 15,
                    rotation: 45,
                    transformOrigin : 'right'
                });
                TweenMax.to($line_sec, 0.2, {
                    opacity: 0
                });
                TweenMax.to($line_last, 0.2, {
                    width: 35,
                    y: -15,
                    rotation: -45,
                    transformOrigin : 'right'
                });
            }
            else if ($target.hasClass('hamburger_6')) {
                TweenMax.to(this, 0.6,{
                    rotation: 45
                });
                TweenMax.to($line_first, 0.3, {
                    y: 13,
                });
                TweenMax.to($line_sec, 0.2, {
                    width: 0
                });
                TweenMax.to($line_last, 0.3, {
                    y: -13,
                    rotation: -90,
                });
            }

        } else {
            TweenMax.to(this, 0.2,{
                rotation: 0
            });
            TweenMax.to($line_first, 0.2, {
                y: 0,
                rotation: 0,
                width: 50,
                x:0
            });
            TweenMax.to($line_sec, 0.2, {
                opacity: 1,
                width: 50
            });
            TweenMax.to($line_last, 0.2, {
                y: 0,
                rotation: 0,
                width: 50,
                x:0,
            });
        }
    }
    $btn.on('click', hamburger_motion);
}());