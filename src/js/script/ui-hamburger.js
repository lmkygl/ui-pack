// hamburger button 클릭시 네비게이션 보임 
(function () {
    var $hamburger_wrap = $('[data-ui="hamburger_wrap"]');
    var $hamburger = $hamburger_wrap.find('[data-ui="hamburger__btn"]');
    var $span_before = $('.span__before');
    var $span_after = $('.span__after');

    function navigation__click(e) {
        var target = $(e.currentTarget);
        target.toggleClass('is-active');
    }

    $hamburger.on('click', navigation__click);
}());