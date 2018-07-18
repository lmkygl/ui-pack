//버튼 클릭시 모달창
(function () {
    var $page = $('[data-ui="page_wrap"]');
    var $btn = $page.find('button');
    var $modal_wrap = $('[data-ui="modal_wrap"]');
    var $close_btn = $modal_wrap.find('.trigger');

    function modal_event(e) {
        var $target = $(e.currentTarget);
        var $target_parent = $target.parent();
        var modal = $target_parent.siblings();
        modal.addClass('open');
        // return false;
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


    // 비동기 init
    $(document).ajaxComplete(function () {
        var $page = $('[data-ui="page_wrap"]');
        var $btn = $page.find('button');
        var $modal_wrap = $('[data-ui="modal_wrap"]');
        var $close_btn = $modal_wrap.find('.trigger');
        
        $btn.on('click', modal_event);
        $close_btn.on('click', modal_close);
        $modal_wrap.on('click', modal_close);

    });
}());