// tab 제작
(function () {
    function tab_button_effect(e) {
        var $target = $(e.target);
        var tab_id;
        var tab_option;
        var $pannel = $('[data-ui="pannel_area"]');


        tab_id = $target.attr('data-id');
        tab_option = $target.attr('data-option');

        var $pannel_content = $pannel.children('[data-id="' + tab_id + '"]');
     //   var $pannel_option_content = $pannel.children('[data-option="' + tab_option + '"]');

       // var $tab_pannel = $('.tab_pannel');
        //console.log($pannel_option_content);

        $('.tab_pannel').hide();
        $pannel_content.show();
    //    $pannel_option_content.fadeIn();
        if( tab_id >= 4){
            $pannel_content.fadeIn();
        }

    }
    $(document).ajaxComplete(function () {
        var $button_area = $('[data-ui="tab_button_area"]');
        var $button = $button_area.find('button');

        $button.on('click', tab_button_effect);
    });
}());