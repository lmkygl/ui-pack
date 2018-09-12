(function () {
    var $a_underline = $('[data-ui="navi_underline"]');
    

    function navi_effect(e) {
        var $target = $(e.target);
        var naviEvnet_type = e.type;
        var $target_underline = $target.find('.underline');
        if (naviEvnet_type === 'mouseenter') {
            TweenMax.to($target_underline, 0.3, {
                width: '100%'
            });
        } else if (naviEvnet_type === 'mouseleave') {
            TweenMax.to($target_underline, 0.3, {
                width: 0
            });
        }
    }

    // 동기
    if ($a_underline.length) {
        $a_underline.on('mouseenter mouseleave', navi_effect);
    }


    // 비동기 init
    $(document).ajaxComplete(function(){
        if ($('[data-ui="navi_underline"]').length) {
            $('[data-ui="navi_underline"]').on('mouseenter mouseleave', navi_effect);
        }
        
        
    });

    // both
    // $(document).on('mouseenter mouseleave', '[data-ui="navi_underline"]', navi_effect);
}());