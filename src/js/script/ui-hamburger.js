// hamburger button 클릭시 네비게이션 보임 
(function () {
    var $hamburger_wrap = $('[data-ui="hamburger_wrap"]');
    var $hamburger = $hamburger_wrap.find('[data-ui="hamburger__btn"]');
    var $span_before = $('.span__before');
    var $span_after = $('.span__after');

    function navigation__click(e) {
        var target = $(e.currentTarget);
        target.toggleClass('m_hamburgercloseactive');
        console.log(target);

        if (target.hasClass('m_hamburgercloseactive')) {
            TweenMax.to($span_before, 0.2, {
                rotation: -45,
                top: 40
            });
            TweenMax.to($span_after, 0.2, {
                rotation: 45,
                bottom: 47
            });
        } else {
            TweenMax.to($span_before, 0.2, {
                rotation: 0,
                top: 35
            });
            TweenMax.to($span_after, 0.2, {
                rotation: 0,
                bottom: 33
            });
        }
    }

    $hamburger.on('click', navigation__click);
}());