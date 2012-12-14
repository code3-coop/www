function et_cycle_integration() {
    function u(e) {
        n.find("a.active").removeClass("active");
        e.addClass("active");
        o = e.attr("rel");
        t.cycle(o - 1);
        if (typeof interval != "undefined") {
            clearInterval(interval);
            l()
        }
    }
    function l() {
        interval = setInterval(function () {
            if (!s) a.click()
        }, 7e3)
    }
    var e = jQuery("#featured"),
        t = jQuery("#slides"),
        n = jQuery("#controllers"),
        r = n.find("a.switch");
    if (t.length) {
        jQuery("div.slide:visible .description").css("visibility", "visible").stop().animate({
            opacity: 1,
            top: 43
        }, 500);
        t.cycle({
            fx: "fade",
            timeout: 0,
            speed: 700,
            cleartypeNoBg: true
        });
        var i = parseFloat(e.width() - e.find("#controllers-wrapper").outerWidth(true)) / 2;
        e.find("#controllers-wrapper").css({
            left: i
        });
        var s = false;
        jQuery("#featured .slide").hover(function () {
            s = true
        }, function () {
            s = false
        })
    }
    r.hover(function () {
        jQuery(this).find("img").stop().animate({
            opacity: 1
        }, 300)
    }).mouseleave(function () {
        if (!jQuery(this).hasClass("active")) jQuery(this).find("img").stop().animate({
            opacity: .7
        }, 300)
    });
    var o;
    r.click(function () {
        u(jQuery(this));
        return false
    });
    var a = e.find("a#right-arrow"),
        f = e.find("a#left-arrow");
    a.click(function () {
        var e = n.find("a.active").attr("rel"),
            t = n.find("a.switch:eq(" + e + ")");
        if (t.length) u(t);
        else u(n.find("a.switch:eq(0)"));
        return false
    });
    f.click(function () {
        var e = n.find("a.active").attr("rel") - 2,
            t = n.find("a.switch:eq(" + e + ")");
        if (t.length) u(t);
        else {
            var i = r.length - 1;
            u(n.find("a.switch:eq(" + i + ")"))
        }
        return false
    });
    l()
}
function et_search_bar() {
    var e = jQuery("#menu div#search-form"),
        t = e.find("input#searchinput"),
        n = t.val();
    t.focus(function () {
        if (jQuery(this).val() === n) jQuery(this).val("")
    }).blur(function () {
        if (jQuery(this).val() === "") jQuery(this).val(n)
    })
}
jQuery.noConflict();
Cufon.replace("ul.nav a", {
    textShadow: "1px 1px 0px #fff",
    hover: {
        textShadow: "1px 1px 0px #fff"
    }
})("#featured h2.title")("#tagline,h3.hometitle,.entry h2.title,.entry h1.title,.comment-author,h3#comments,#reply-title span,.entry h1, entry h2, .entry h3, .entry h4, .entry h5, .entry h6", {
    textShadow: "2px 2px 2px rgba(0,0,0,0.2)"
})("div.service a.readmore", {
    textShadow: "1px 1px 0px #fff"
})("#portfolio-items a.readmore", {
    textShadow: "1px 1px 0px #fff"
})(".entry a.readmore", {
    textShadow: "1px 1px 0px #fff"
})(".reply-container a", {
    textShadow: "1px 1px 0px #fff"
})("#blog-content h4.widgettitle", {
    textShadow: "1px 1px 0px #fff"
})("h4.widgettitle", {
    textShadow: "1px 1px 0px rgba(255,255,255,0.3)"
})(".wp-pagenavi", {
    textShadow: "1px 1px 1px #fff"
});
jQuery("ul.nav").superfish({
    delay: 300,
    animation: {
        opacity: "show",
        height: "show"
    },
    speed: "fast",
    autoArrows: true,
    dropShadows: false
});
jQuery("ul.nav > li > a.sf-with-ul").parent("li").addClass("sf-ul");
et_search_bar();
et_cycle_integration();
if (jQuery("#blog").length) {
    jQuery("#blog").serialScroll({
        target: ".recentscroll",
        items: "li",
        prev: "#controllers2 a#cright-arrow",
        next: "#controllers2 a#cleft-arrow",
        axis: "y",
        duration: 200,
        force: true
    })
}
var $portfolioItem = jQuery(".item");
$portfolioItem.find(".item-image");
jQuery(".zoom-icon, .more-icon").css("opacity", "0");
$portfolioItem.hover(function () {
    jQuery(this).find(".item-image").stop(true, true).animate({
        top: -10
    }, 500).find("img.portfolio").stop(true, true).animate({
        opacity: .7
    }, 500);
    jQuery(this).find(".zoom-icon").stop(true, true).animate({
        opacity: 1,
        left: 75
    }, 400);
    jQuery(this).find(".more-icon").stop(true, true).animate({
        opacity: 1,
        left: 110
    }, 400)
}, function () {
    jQuery(this).find(".zoom-icon").stop(true, true).animate({
        opacity: 0,
        left: 31
    }, 400);
    jQuery(this).find(".more-icon").stop(true, true).animate({
        opacity: 0,
        left: 128
    }, 400);
    jQuery(this).find(".item-image").stop(true, true).animate({
        top: 0
    }, 500).find("img.portfolio").stop(true, true).animate({
        opacity: 1
    }, 500)
});
var $footer_widget = jQuery("#footer .widget");
if ($footer_widget.length) {
    $footer_widget.each(function (e, t) {
        if ((e + 1) % 3 == 0) jQuery(t).addClass("last").after("<div class='clear'></div>")
    })
}
jQuery(window).load(function () {
    var e = jQuery(".gallery-thumb");
    if (e.length) {
        var t = e.width(),
            n = t - 434;
        if (n < 0) {
            jQuery(".gallery-thumb-bottom").css({
                width: "auto",
                padding: "0 " + t / 2 + "px"
            })
        } else jQuery(".gallery-thumb-bottom").css("width", n)
    }
});
jQuery(".js ul.nav a, .js ul.nav ul li a, .js #tagline p, .js a.readmore, .js a.readmore span, .js .reply-container, .js .reply-container a").css("text-indent", "0px");
Cufon.now()
