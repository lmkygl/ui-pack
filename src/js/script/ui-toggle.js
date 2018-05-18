// 버튼 클릭시 하단의 내용을 보여줌
(function () {
    var $button = $('[data-ui="toggle_box"]').find('button');
    var animating = false;
    var speed = 0.2;

    function toggle_effect(e) {
        var $target = $(e.target);
        var toggled =  $target.data('toggle');
        var $sponsorship_box = $(e.target).parents('[data-ui="toggle_box"]');
        var $product_area = $sponsorship_box.sibling('[data-ui="toggle_box_content"]');
        console.log($target);

        if (!animating) {
            animating = true;

            if (!toggled) {
                $product_area.slideDown(function(){
                    $target.data('toggle', true).attr('data-toggle', true);                   
                    animating = false;
                });
                $target.text("▲");
            } else {
                $product_area.slideUp(function(){
                    $target.data('toggle', false).attr('data-toggle', false);                   
                    animating = false;
                });
                $target.text("▼");
            }
        }
    }

    $button.on('click', toggle_effect);
}());