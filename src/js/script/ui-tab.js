// tab 제작
(function () {
    var $tab_btn_area = $('[data-ui="tab__btn__area"]');
    var $btn = $tab_btn_area.find('button');

    function tab_effect(e) {
        var $target = $(e.currentTarget);
        var $parent = $target.parent();
        var $button = $parent.find('button');
        var $pannel_parent = $parent.siblings('.basic__pannel__area');
        var $pannel = $pannel_parent.find('.pannel_con');
        var $pannel_parent2 = $parent.parent();
        var $pannel2 = $pannel_parent2.find('.tab_pannel_content');
        var $pannel2_1 = $pannel_parent2.find('.tab_pannel_content').children();
        var tab_id;

        $button.removeClass('active');
        $target.addClass('active');

        tab_id = $target.attr('data-id');

        var $basic_tab_con = $pannel_parent.find('[data-id="' + tab_id + '"]');
        var $fade_tab_con = $pannel2.find('[data-id="' + tab_id + '"]');
       
        $pannel.hide();
        $basic_tab_con.show();

        $pannel2_1.fadeOut();
        $fade_tab_con.fadeIn();
    }

    $btn.on('click', tab_effect);
}());