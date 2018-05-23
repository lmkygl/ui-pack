//버튼 클릭시 모달창
(function () {
    var $page = $('[data-ui="page_wrap"]');
    var $btn = $page.find('button');
    var $modal_wrap = $('[data-ui="modal_wrap"]');
    var $close_btn = $modal_wrap.find('.trigger');

    function modal_event(e) {
        var $target = $(e.target);
        var $bg = $('.modal__wrap');
        $bg.addClass('open');
    }

    function modal_close(e) {
        var target = $(e.target);
        $modal_wrap.removeClass('open');
    }

    function modal_close2(e) {
        var target = $(e.target);
        $(this).removeClass('open');
    }


    $btn.on('click', modal_event);
    $close_btn.on('click', modal_close);
    $modal_wrap.on('click', modal_close);
}());