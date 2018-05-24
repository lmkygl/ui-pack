(function () {
    var btn = $('[data-ui="submit_btn"]');
    var input = $('input').val();

    function test(){
        //var check_dummy = true;
        $('.tip').each(function(){
            if ( !$(this).prop('checked') ) {
                alert('필수항목을체크해주세요');
              //  check_dummy = false;
                return false;
            }else{
                confirm('입력하신 내용이 맞습니까?');
            }
        });
        
    }
    btn.on('click', test);
}());