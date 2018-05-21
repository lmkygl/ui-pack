// 버튼 클릭시 하단의 내용을 보여줌
(function () {
    var $button = $('[data-ui="toggle_box"]').find('button');
    var animating = false;

    function toggle_effect(e) {
        var $target = $(e.target);
        var toggled =  $target.data('toggle');
        var $toggle_box = $(e.target).parents('[data-ui="toggle_box"]');
        var $product_area = $toggle_box.find('[data-ui="toggle_box_content"]');
        console.log($product_area);

        if (!animating) {
            animating = true;

            if (!toggled) {
                $product_area.slideDown(function(){
                    $target.data('toggle', true).attr('data-toggle', true);                   
                    animating = false;
                });
                $target.text("닫기");
            } else {
                $product_area.slideUp(function(){
                    $target.data('toggle', false).attr('data-toggle', false);                   
                    animating = false;
                });
                $target.text("내용 더보기");
            }
        }
    }

    $button.on('click', toggle_effect);
}());