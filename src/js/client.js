!function(e){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],e):"object"==typeof exports?e(require("jquery"),require("hammerjs")):e(jQuery,Hammer)}(function(a,i){var t;a.fn.hammer=function(t){return this.each(function(){var e,n;e=t,(n=a(this)).data("hammer")||n.data("hammer",new i(n[0],e))})},i.Manager.prototype.emit=(t=i.Manager.prototype.emit,function(e,n){t.call(this,e,n),a(this.element).trigger({type:e,gesture:n})})}),$(".bxslider").bxSlider({auto:!0,mode:"horizontal"}),$('[data-ui="hamburger_wrap"]').find(".hamburger").on("click",function(e){var n=$(e.target);n.find("span:nth-child(1)"),n.find("span:nth-child(2)"),n.find("span:nth-child(3)"),$(this).toggleClass("is-active")}),function(){var e=$('[data-ui="page_wrap"]').find("button"),n=$('[data-ui="modal_wrap"]'),t=n.find(".trigger");function a(e){$(e.target);n.removeClass("open")}e.on("click",function(e){$(e.currentTarget).parent().siblings().addClass("open")}),t.on("click",a),n.on("click",a)}(),$(".owl-carousel").owlCarousel({loop:!0,margin:5,nav:!0,autoplay:!0,autoplayTimeout:3500,dots:!1,responsive:{0:{items:1},600:{items:3},1000:{items:4}}}),function(){var n,e=$('[data-ui="slider__area"]'),t=e.find(".btn"),c=!1,l=500;function a(){clearInterval(n),n=setInterval(function(){$(".interval__next").trigger("click")},2e3)}t.on("click",function(e){var n,t,a,i,r,o,d,u,s=$(e.target);s.hasClass("next_btn")?c||(c=!0,r=$(e.target).parents('[data-ui="slider__area"]'),o=r.find('[data-ui="inner__frames"]'),d=r.find('[data-ui="out__frame"]').width(),u=o.find(".scene"),o.animate({marginLeft:-d},l,"swing",function(){u.eq(0).insertAfter(u.eq(-1)),o.css("marginLeft",0),c=!1})):s.hasClass("prve_btn")&&(c||(c=!0,n=$(e.target).parents('[data-ui="slider__area"]'),t=n.find('[data-ui="inner__frames"]'),a=n.find('[data-ui="out__frame"]').width(),i=t.find(".scene"),t.css("marginLeft",-a),i.eq(-1).insertBefore(i.eq(0)),t.animate({marginLeft:0},l,"swing",function(){c=!1})))}),e.hammer().on("swipe",function(e){var n=e.gesture.offsetDirection,t=$(e.currentTarget);2===n?t.find(".next_btn").trigger("click"):t.find(".prve_btn").trigger("click")}),$(window).on("load blur focus",function(e){"blur"===e.type?clearInterval(n):a()}),e.on("mouseenter mouseleave",function(e){"mouseenter"===e.type?clearInterval(n):a()})}(),$('[data-ui="tab__btn__area"]').find("button").on("click",function(e){var n,t=$(e.currentTarget),a=t.parent(),i=a.find("button"),r=a.siblings(".basic__pannel__area"),o=r.find(".pannel_con"),d=a.parent(),u=d.find(".tab_pannel_content"),s=d.find(".tab_pannel_content").children();i.removeClass("active"),t.addClass("active"),n=t.attr("data-id");var c=r.find('[data-id="'+n+'"]'),l=u.find('[data-id="'+n+'"]');o.hide(),c.show(),s.fadeOut(),l.fadeIn()}),function(){var e=$('[data-ui="navi_underline"]');function n(e){var n=$(e.target),t=e.type,a=n.find(".underline");"mouseenter"===t?TweenMax.to(a,.3,{width:"100%"}):"mouseleave"===t&&TweenMax.to(a,.3,{width:0})}console.log(e.length),e.length&&e.on("mouseenter mouseleave",n),$(document).ajaxComplete(function(){$('[data-ui="navi_underline"]').length&&$('[data-ui="navi_underline"]').on("mouseenter mouseleave",n)})}();
//# sourceMappingURL=client.js.map
