// tab 제작
(function () {
    var $tab_btn_wrap = $('[data-ui="tab_button_wrap"]');
    var $this_tab_btn = $tab_btn_wrap.find('.icon__sort__wrap');
    var $pannel = $('.pannel__list__wrap').find('.pannel__list');

    

    function tab_button(e) {
        var $target = $(e.currentTarget);
        var tab_id = $target.attr('data-id');
        var $tab_con = $('.pannel__list__wrap').find('[data-id="' + tab_id + '"]');

        $this_tab_btn.removeClass('active');
        $target.addClass('active');
        $pannel.hide();
        $tab_con.show();

    }

    $this_tab_btn.on('click', tab_button);


    var $data = $('[data-id]');
    var $tab_wrap = $('[data-ui="tab__btn__area"]');
    var $tab_btn = $tab_wrap.find('button');

    function tab_button(e) {
        var $target = $(e.currentTarget);
        var tab_id;
        var tab_container = $('.tab_pannel_content').find('div');
        var $tab_con = $('.tab_pannel_content').find('[data-id="' + tab_id + '"]');
        
        tab_id = $target.attr('data-id');
        $tab_btn.removeClass('active');
        $target.addClass('active');

        tab_container.fadeOut();
        $tab_con.fadeIn();
       
    }
    $tab_btn.on('click', tab_button);
}());