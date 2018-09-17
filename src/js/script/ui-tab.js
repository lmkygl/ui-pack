// tab 제작
(function () {
    function tab_button_effect(e) {
        var $target = $(e.target);
        var tab_id;
        var $pannel = $('[data-ui="pannel_area"]');
        var $pannnel_content = $('.tab_pannel');

        tab_id = $target.attr('data-id');
        tab_option = $target.attr('data-option');

        var $pannel_content = $pannel.children('[data-id="' + tab_id + '"]');

        $pannnel_content.hide();
        $pannel_content.show();

    }
    $(document).ajaxComplete(function () {
        var $button_area = $('[data-ui="tab_button_area"]');
        var $button = $button_area.find('button');

        $button.on('click', tab_button_effect);
    });
}());