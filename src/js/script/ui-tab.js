// tab 제작
(function () {
    var $tab_btn_wrap = $('[data-ui="tab_button_wrap"]');
    var $this_tab_btn = $tab_btn_wrap.find('button');
    var $pannel = $('.pannel').find('.pannel__list');

    

    function tab_button(e) {
        var $target = $(e.currentTarget);
        var tab_id = $target.attr('data-id');
        var $tab_con = $('.pannel').find('[data-id="' + tab_id + '"]');
        
        $this_tab_btn.removeClass('active');
        $target.addClass('active');
        $pannel.hide();
        $tab_con.show();

    }

    $this_tab_btn.on('click', tab_button);
}());