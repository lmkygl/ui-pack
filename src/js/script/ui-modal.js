// 버튼 클릭시 modal창 띄우기
(function(){
    var $page = $('[data-ui="page_wrap"]');
    var $btn = $page.find('button');
    
    function modal_evente(e){
        var $target = (e.target);
        
    }
    $btn.on('click', modal_event);
}());