angular.module("app").directive("uiNav",["$timeout",function(a){return{restrict:"AC",link:function(a,b,c){var d,e=$(window),f=768,g=$(".app-aside"),h=".dropdown-backdrop";b.on("click","a",function(a){d&&d.trigger("mouseleave.nav");var b=$(this);b.parent().siblings(".active").toggleClass("active"),b.next().is("ul")&&b.parent().toggleClass("active")&&a.preventDefault(),b.next().is("ul")||e.width()<f&&$(".app-aside").removeClass("show off-screen")}),b.on("mouseenter","a",function(a){if(d&&d.trigger("mouseleave.nav"),$("> .nav",g).remove(),!(!$(".app-aside-fixed.app-aside-folded").length||e.width()<f||$(".app-aside-dock").length)){var b,c=$(a.target),i=$(window).height(),j=50,k=150;!c.is("a")&&(c=c.closest("a")),c.next().is("ul")&&(d=c.next(),c.parent().addClass("active"),b=c.parent().position().top+j,d.css("top",b),b+d.height()>i&&d.css("bottom",0),b+k>i&&d.css("bottom",i-b-j).css("top","auto"),d.appendTo(g),d.on("mouseleave.nav",function(a){$(h).remove(),d.appendTo(c.parent()),d.off("mouseleave.nav").css("top","auto").css("bottom","auto"),c.parent().removeClass("active")}),$(".smart").length&&$('<div class="dropdown-backdrop"/>').insertAfter(".app-aside").on("click",function(a){a&&a.trigger("mouseleave.nav")}))}}),g.on("mouseleave",function(a){d&&d.trigger("mouseleave.nav"),$("> .nav",g).remove()})}}}]);