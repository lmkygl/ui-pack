//tab 버튼 클릭시 fade in out
(function () {
    var $data = $('[data-id-value]');
    var $tab_wrap = $('[data-ui="tab__btn__area"]');
    var $tab_btn = $tab_wrap.find('.tab__btn');
    var speed = 200;

    function tab_button(e) {
        var $target = $(e.target);
        var tab_id;
        // var tab_content;
        var $tab_con = $('.btn_content').find('li');
        var $tab_img = $('.img_content').find('li');

        tab_id = $target.attr('data-id');
        $tab_btn.removeClass('select__tab');
        $tab_btn.eq(tab_id).addClass('select__tab');

        if (tab_id == 0) {
            $tab_con.fadeOut();
            $tab_con.eq(0).fadeIn();
            $tab_img.fadeOut();
            $tab_img.eq(0).fadeIn();
        } else if (tab_id == 1) {
            $tab_con.fadeOut();
            $tab_con.eq(1).fadeIn();
            $tab_img.fadeOut();
            $tab_img.eq(1).fadeIn();
        } else if (tab_id == 2) {
            $tab_con.fadeOut();
            $tab_con.eq(2).fadeIn();
            $tab_img.fadeOut();
            $tab_img.eq(2).fadeIn();
        }
    }
    $tab_btn.on('click', tab_button);
}
());