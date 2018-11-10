//버튼 클릭시 모달창
(function () {
    var $page = $('[data-ui="page_wrap"]');
    var $btn = $page.find('button');
    var $modal_wrap = $('[data-ui="modal_wrap"]');
    
    function modal_event(e) {
        var $target = $(e.currentTarget);
        var $target_parent = $target.parent();
        var modal = $target_parent.siblings();
        modal.toggleClass('open');
    }

    function modal_close(e) {
        var $target = $(e.target);
        $target.removeClass('open');
    }


    $btn.on('click', modal_event);
    $modal_wrap.on('click', modal_close);


    // 비동기 init
    $(document).ajaxComplete(function () {
        var $page = $('[data-ui="page_wrap"]');
        var $btn = $page.find('button');
        var $modal_wrap = $('[data-ui="modal_wrap"]');
       
        $btn.on('click', modal_event);
        $modal_wrap.on('click', modal_close);

    });
}());