// hamburger 버튼 클릭시 모션 tweenMax 이용
(function(){
    var $btn_wrap = $('[data-ui="hamburger_wrap"]');
    var $btn = $btn_wrap.find('.hamburger');

    function hamburger_motion(e){
        var $target = $(e.target);
        var $line_first = $target.find('span:nth-child(1)');
        var $line_last = $target.find('span:nth-child(3)');

        $(this).toggleClass('is-active');
        console.log($line_first);
        if ($target.hasClass('is-active')) {
            
            TweenMax.to($line_first, 0.2, {
                y:13,
                rotation: 45,
            });
            TweenMax.to($line_last, 0.2, {
                y:-13,
                rotation: -45,
            });
        }else{
            TweenMax.to($line_first, 0.2, {
                y: 0,
                rotation:0,
            });
            TweenMax.to($line_last, 0.2, {
                y:0,
                rotation: 0,
            });
        }
    }
    $btn.on('click',hamburger_motion);
}());