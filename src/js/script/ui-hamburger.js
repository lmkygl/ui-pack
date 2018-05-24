// hamburger 버튼 클릭시 모션 tweenMax 이용
(function(){
    var $btn_wrap = $('[data-ui="hamburger_wrap"]');
    var $btn = $btn_wrap.find('.hamburger');

    function hamburger_motion(e){
        var target = $(e.target);
        
    }
    $btn.on('click',hamburger_motion);
}());