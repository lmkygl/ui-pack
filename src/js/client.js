!function(e){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],e):"object"==typeof exports?e(require("jquery"),require("hammerjs")):e(jQuery,Hammer)}(function(a,i){var n;a.fn.hammer=function(n){return this.each(function(){var e,t;e=n,(t=a(this)).data("hammer")||t.data("hammer",new i(t[0],e))})},i.Manager.prototype.emit=(n=i.Manager.prototype.emit,function(e,t){n.call(this,e,t),a(this.element).trigger({type:e,gesture:t})})}),function(){var e=$('[data-ui="rules_area"]').find("button"),i=!1;function t(e){var t=$(e.target),n=t.data("toggle"),a=t.parent('[data-ui="rules_area"]').find(".source_code");console.log(a),i||(i=!0,n?(a.slideUp(function(){t.data("toggle",!1).attr("data-toggle",!1),i=!1}),t.text("RULES")):(a.slideDown(function(){t.data("toggle",!0).attr("data-toggle",!0),i=!1}),t.text("CLOSE")))}e.on("click",t),$(document).ajaxComplete(function(){$('[data-ui="rules_area"]').find("button").on("click",t)})}(),$(".bxslider").bxSlider({auto:!0,mode:"horizontal"}),function(){function e(e){var t=$(e.target);t.find("span:nth-child(1)"),t.find("span:nth-child(2)"),t.find("span:nth-child(3)");$(this).toggleClass("is-active")}$('[data-ui="hamburger_wrap"]').find(".hamburger").on("click",e),$(document).ajaxComplete(function(){$(".hamburger").on("click",e)})}(),function(){var e=$('[data-ui="page_wrap"]').find("button"),t=$('[data-ui="modal_wrap"]');function n(e){$(e.currentTarget).parent().siblings().toggleClass("open")}function a(e){$(e.target).removeClass("open")}e.on("click",n),t.on("click",a),$(document).ajaxComplete(function(){var e=$('[data-ui="page_wrap"]').find("button"),t=$('[data-ui="modal_wrap"]');e.on("click",n),t.on("click",a)})}(),$(".owl-carousel").owlCarousel({loop:!0,margin:5,nav:!0,autoplay:!0,autoplayTimeout:3500,dots:!1,responsive:{0:{items:1},600:{items:3},1000:{items:4}}}),function(){var t,e=$('[data-ui="slider__area"]'),n=e.find(".btn"),l=!1,s=500;function a(e){var t,n,a,i,r,o,u,c,d=$(e.target);d.hasClass("next_btn")?l||(l=!0,r=$(e.target).parents('[data-ui="slider__area"]'),o=r.find('[data-ui="inner__frames"]'),u=r.find('[data-ui="out__frame"]').width(),c=o.find(".scene"),o.animate({marginLeft:-u},s,"swing",function(){c.eq(0).insertAfter(c.eq(-1)),o.css("marginLeft",0),l=!1})):d.hasClass("prve_btn")&&(l||(l=!0,t=$(e.target).parents('[data-ui="slider__area"]'),n=t.find('[data-ui="inner__frames"]'),a=t.find('[data-ui="out__frame"]').width(),i=n.find(".scene"),n.css("marginLeft",-a),i.eq(-1).insertBefore(i.eq(0)),n.animate({marginLeft:0},s,"swing",function(){l=!1})))}function i(){clearInterval(t),t=setInterval(function(){$(".interval__next").trigger("click")},2e3)}n.on("click",a),e.hammer().on("swipe",function(e){var t=e.gesture.offsetDirection,n=$(e.currentTarget);2===t?n.find(".next_btn").trigger("click"):n.find(".prve_btn").trigger("click")}),$(window).on("load blur focus",function(e){"blur"===e.type?clearInterval(t):i()}),e.on("mouseenter mouseleave",function(e){"mouseenter"===e.type?clearInterval(t):i()}),$(document).ajaxComplete(function(){var e=$('[data-ui="slider__area"]');e.find(".btn").on("click",a),$(window).on("load blur focus",function(e){"blur"===e.type?clearInterval(void 0):i()}),e.on("mouseenter mouseleave",function(e){"mouseenter"===e.type?clearInterval(void 0):i()})})}(),function(){function e(e){var t,n=$(e.target),a=$('[data-ui="pannel_area"]'),i=$(".tab_pannel");t=n.attr("data-id"),tab_option=n.attr("data-option");var r=a.children('[data-id="'+t+'"]');i.hide(),r.show()}$(document).ajaxComplete(function(){$('[data-ui="tab_button_area"]').find("button").on("click",e)})}(),function(){var e=$('[data-ui="navi_underline"]');function t(e){var t=$(e.target),n=e.type,a=t.find(".underline");"mouseenter"===n?TweenMax.to(a,.3,{width:"100%"}):"mouseleave"===n&&TweenMax.to(a,.3,{width:0})}e.length&&e.on("mouseenter mouseleave",t),$(document).ajaxComplete(function(){$('[data-ui="navi_underline"]').length&&$('[data-ui="navi_underline"]').on("mouseenter mouseleave",t)})}();
//# sourceMappingURL=client.js.map
