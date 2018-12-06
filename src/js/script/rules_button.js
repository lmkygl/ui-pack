//버튼 클릭시 모달창
(function () {
    var $rules = $('[data-ui="rules_area"]');
    var $btn = $rules.find('button');
    var animating = false;
    var speed = 0.2;
    function rules_event(e) {
        var $target = $(e.target);
        var toggled = $target.data('toggle');
        var $rules_area = $target.parent('[data-ui="rules_area"]').find('.source_code');

        console.log($rules_area);
        if (!animating) {
            animating = true;

            if (!toggled) {
                $rules_area.slideDown(function(){
                    $target.data('toggle', true).attr('data-toggle', true);                   
                    animating = false;
                });
                $target.text("CLOSE");
            } else {
                $rules_area.slideUp(function(){
                    $target.data('toggle', false).attr('data-toggle', false);                   
                    animating = false;
                });
                $target.text("RULES");
            }   
        }
    }
    $btn.on('click', rules_event);

    // 비동기 init
    $(document).ajaxComplete(function () {
        var $rules = $('[data-ui="rules_area"]');
        var $btn = $rules.find('button');

        $btn.on('click', rules_event);
    });
}());

