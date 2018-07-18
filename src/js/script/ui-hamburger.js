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

    }

    $btn.on('click', hamburger_motion);


    $(document).ajaxComplete(function () {
        $('.hamburger').on('click', hamburger_motion);

    });
}());