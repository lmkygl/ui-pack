// //tab 버튼 클릭시 fade in out
// (function () {
//     var $data = $('[data-id]');
//     var $tab_wrap = $('[data-ui="tab__btn__area"]');
//     var $tab_btn = $tab_wrap.find('button');

//     function tab_button(e) {
//         var $target = $(e.currentTarget);
//         var tab_id;
//         var tab_container = $('.tab_pannel_content').find('div');
//         var $tab_con = $('.tab_pannel_content').find('[data-id="' + tab_id + '"]');
        
//         tab_id = $target.attr('data-id');
//         $tab_btn.removeClass('active');
//         $target.addClass('active');

//         tab_container.fadeOut();
//         $tab_con.fadeIn();
       
//     }
//     $tab_btn.on('click', tab_button);
// }
// ());