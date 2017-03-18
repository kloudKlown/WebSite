function showWork() {
    $("#contact").hide();
    var t = "." + $(this).children(".workButton").children("a").data("target");
    $("#popDownWrapper").css({
        height: $(".Volvo").outerHeight() + 180 + "px"
    }), isShowing && t != lastUsed ? ($(lastUsed).css({
            opacity: "0",
            "z-index": "-1"
        }), $(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            $(this).removeClass("slideOutRight")
        }).addClass("slideOutRight"), $(t).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            $(this).removeClass("slideInFromLeft")
        }).addClass("slideInFromLeft"), $(t).css({
            opacity: "1",
            "z-index": "3"
        })) : isShowing ? ($(lastUsed).css({
                opacity: "0",
                "z-index": "-1"
            }), $(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).removeClass("slideUp")
            }).addClass("slideUp"), $("#popDownWrapper").delay(100).queue(function(t) {
                $(this).css("height", "0"), t()
            }), isShowing = !1) : ($(t).css({
                opacity: "1",
                "z-index": "3"
            }), $(t).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).removeClass("slideDown")
            }).addClass("slideDown"), isShowing = !0, $(".experience").css({
                "border-bottom": "1px solid black"
            })), lastUsed = t
}

function scrollAnimations() {
    var t = $(window).scrollTop();
    whatBackground(t);
    $(".projects").offset().top + $(window).height();
    isPartlyScrolledIntoView("#timelineDotHeader") && $("#timelineDotHeader").addClass("rotate360").addClass("appearFromTopCentered"), isFullyScrolledIntoView(".slideDir") && $("#projImages").addClass("appearFromBottom");
    for (var e = $(".bigButton"), o = 0; o < e.length; o++) {
        var s = e[o];
        isFullyScrolledIntoView(s) && $(s).addClass("slideDownBig" + o)
    }
}

function whatBackground(t) {
    var e = $(window).scrollTop() + $(window).height(),
        o = $(".projects").offset().top + $(".projects").height() - 100;
    e > o ? ($("#contact").show(), $(".schoolImg").hide()) : ($("#contact").hide(), isPartlyScrolledIntoView("#popDownWrapper") ? $(".schoolImg").hide() : isPartlyScrolledIntoView(".education") ? $(".schoolImg").show() : $(".schoolImg").hide())
}

function isPartlyScrolledIntoView(t) {
    var e = $(t),
        o = $(window),
        s = o.scrollTop(),
        r = s + o.height(),
        n = e.offset().top,
        i = n + e.height(),
        a = i > r && r > n,
        c = i > s && s > n;
    return a || c || isFullyScrolledIntoView(t)
}

function isFullyScrolledIntoView(t) {
    var e = $(t),
        o = $(window),
        s = o.scrollTop(),
        r = s + o.height(),
        n = e.offset().top,
        i = n + e.height();
    return r >= i && n >= s
}


$(document).ready(function() {
    function t() {
        var t = $(window).scrollTop();
        $("#mountainHolder2").css("transform", "translateY(" + Math.round(.25 * t) + "px)"), $("#mountainHolder").css("transform", "translateY(" + Math.round(.5 * t) + "px)")
    }

    function e(t) {
        var e = ($(window).scrollTop(), t),
            o = ($(".about").offset().top, $(".education").offset().top),
            s = $("#eduTimelineWrapper").offset().top - 350,
            r = ($(".experience").offset().top, $(".projects").offset().top),
            n = $(".projects").offset().top + $(".projects").height() + 80;
        return o > e ? "rgb(200,200,200)" : s > e ? "white" : r > e ? "rgb(200,200,200)" : n > e ? "white" : "rgb(200,200,200)"
    }

    function o(t) {
        var e = ($(window).scrollTop(), t),
            o = ($(".about").offset().top, $(".education").offset().top),
            s = $("#eduTimelineWrapper").offset().top - 350,
            r = ($(".experience").offset().top, $(".projects").offset().top),
            n = $(".projects").offset().top + $(".projects").height() + 80;
        return o > e ? "black" : s > e ? "rgb(200,200,200)" : r > e ? "black" : n > e ? "rgb(200,200,200)" : "black"
    }

    function s() {
        var t = $(window).scrollTop();
        if (t > 550 && window.innerWidth > 1300) {
            var o = $("#scrollNavigationButtonWrapper a");
            setTimeout(function() {
                $(o[0]).css({
                    transform: "translateX(0)"
                })
            }, 0), setTimeout(function() {
                $(o[1]).css({
                    transform: "translateX(0)"
                })
            }, 100), setTimeout(function() {
                $(o[2]).css({
                    transform: "translateX(0)"
                })
            }, 200), setTimeout(function() {
                $(o[3]).css({
                    transform: "translateX(0)"
                })
            }, 300), setTimeout(function() {
                $(o[4]).css({
                    transform: "translateX(0)"
                })
            }, 400)
        } else {
            var o = $("#scrollNavigationButtonWrapper a");
            setTimeout(function() {
                $(o[0]).css({
                    transform: "translateX(200px)"
                })
            }, 0), setTimeout(function() {
                $(o[1]).css({
                    transform: "translateX(200px)"
                })
            }, 100), setTimeout(function() {
                $(o[2]).css({
                    transform: "translateX(200px)"
                })
            }, 200), setTimeout(function() {
                $(o[3]).css({
                    transform: "translateX(200px)"
                })
            }, 300), setTimeout(function() {
                $(o[4]).css({
                    transform: "translateX(200px)"
                })
            }, 400)
        }
        for (var s = 0; s < $(".scrollNavHeader").length; s++) {
            var r = $(".scrollNavHeader")[s],
                n = $(r).next(),
                i = $(r).offset().top,
                a = e(i);
            $(r).css({
                color: a
            }), $(n).css({
                "background-color": a
            })
        }
        var c = $("#scrollUp").offset().top,
            a = e(c);
        $("#scrollUp").css({
            "border-color": a
        }), $("#scrollUp > div > i").css({
            color: a
        }), $("#scrollUp > div > p").css({
            color: a
        }), t > 300 && window.innerWidth > 668 ? $("#scrollUp").css({
                transform: "translateY(0) translateX(0)",
                opacity: "1"
            }) : $("#scrollUp").css({
                transform: "translateY(150px) translateX(0)",
                opacity: "1"
            })
    }
    $(window).bind("scroll", function(e) {
        t()
    }), jQuery("img.svg").each(function() {
        var t = jQuery(this),
            e = t.attr("id"),
            o = t.attr("class"),
            s = t.attr("src");
        jQuery.get(s, function(s) {
            var r = jQuery(s).find("svg");
            "undefined" != typeof e && (r = r.attr("id", e)), "undefined" != typeof o && (r = r.attr("class", o + " replaced-svg")), r = r.removeAttr("xmlns:a"), t.replaceWith(r)
        }, "xml")
    });
    var r = !1;
    if (!r) {
        for (var n = Math.floor($("#edus").width() / 2) - 40, i = $(".courses"), a = 0; a < i.length; a++) {
            $(i[a]).css({
                width: n + "px"
            });
            var c = 0;
            $(i[a]).children(".listWrapper").children(".courseListWrapper").each(function() {
                var t = $(this).children(".courseList").height();
                t > c && (c = t)
            }), c += 85;
            var l = $(".edu").height();
            $(i[a]).css({
                height: c + "px",
                "min-height": l + "px"
            }), $(i[a]).parent().css({
                height: c + "px",
                "min-height": l + "px"
            });
            var d = $(i[a]).children(".listWrapper").children(".courseListWrapper").length;
            $(i[a]).children(".listWrapper").css({
                height: c + "px",
                width: d * n + "px",
                "min-height": l + "px"
            });
            for (var p = $(i[a]).children(".listWrapper").children(".courseListWrapper"), u = 0; u < p.length; u++) $(p[u]).css({
                width: n + "px",
                height: c + "px",
                "min-height": l + "px"
            })
        }
        r = !0
    }
    $(".showCourses").click(function() {
        var t = $(this).children("p").text();
        if ("Show Courses" == t) {
            $(".showCourses").children("p").text("Show Courses"), $(".courses").css({
                opacity: "0",
                left: "-100%"
            }), h = 1, $(this).children("p").text("Hide Courses");
            var e = $(this).parent().parent().siblings(".courseWrapper").children(".courses");
            e.children(".coursesUpper").children("p").text("Semester 1"), e.children(".listWrapper").addClass("noTransition"), e.children(".listWrapper").css({
                transform: "translateX(0)"
            }), e.children(".listWrapper")[0].offsetHeight, e.children(".listWrapper").removeClass("noTransition"), e.css({
                opacity: "1",
                left: "40px"
            })
        } else {
            $(this).children("p").text("Show Courses");
            var o = $(this).parent().parent().siblings(".courseWrapper").children(".courses");
            o.children(".coursesUpper").children("p").text("Semester 1"), o.children(".listWrapper").addClass("noTransition"), o.children(".listWrapper").css({
                transform: "translateX(0)"
            }), o.children(".listWrapper")[0].offsetHeight, o.children(".listWrapper").removeClass("noTransition"), o.css({
                opacity: "0",
                left: "-100%"
            }), coursesVisible = !1, h = 1
        }
    });
    var h = 1;
    $(".courseRight").click(function() {
        var t = $(this).parent().siblings(".listWrapper").children(".courseListWrapper").length;
        h == t ? h = 1 : h++;
        var e = $($(this).parent().siblings(".listWrapper").children(".courseListWrapper")[0]).width();
        $(this).parent().siblings(".listWrapper").css({
            transform: "translateX(" + (h - 1) * e * -1 + "px)"
        }), $(this).siblings("p").text("Semester " + h)
    }), $(".courseLeft").click(function() {
        var t = $(this).parent().siblings(".listWrapper").children(".courseListWrapper").length;
        1 == h ? h = t : h--;
        var e = $($(this).parent().siblings(".listWrapper").children(".courseListWrapper")[0]).width();
        $(this).parent().siblings(".listWrapper").css({
            transform: "translateX(" + (h - 1) * e * -1 + "px)"
        }), $(this).siblings("p").text("Semester " + h)
    });
    var m = !1;
    $("#hamburger").click(function() {
        if (m) {
            var t = $("#navigationButtonWrapper a");
            setTimeout(function() {
                $(t[0]).css({
                    transform: "translateY(-100px)"
                })
            }, 0), setTimeout(function() {
                $(t[1]).css({
                    transform: "translateY(-100px)"
                })
            }, 100), setTimeout(function() {
                $(t[2]).css({
                    transform: "translateY(-100px)"
                })
            }, 200), setTimeout(function() {
                $(t[3]).css({
                    transform: "translateY(-100px)"
                })
            }, 300), setTimeout(function() {
                $(t[4]).css({
                    transform: "translateY(-100px)"
                })
            }, 400), m = !1, $("#menuLine1").css({
                width: "16px",
                height: "16px",
                "border-radius": "50%",
                border: "2px solid rgb(250,250,250)",
                top: "30%",
                left: "0",
                right: "auto",
                transform: "translateY(-50%) rotateZ(0)"
            }), $("#menuLine2").hide(), $("#menuLine3").hide(), $("#menuLine4").css({
                width: "12px",
                bottom: "0",
                right: "5px",
                top: "auto",
                transform: "translateY(-50%) rotateZ(45deg)"
            })
        } else {
            var t = $("#navigationButtonWrapper a");
            setTimeout(function() {
                $(t[0]).css({
                    transform: "translateY(0)"
                })
            }, 0), setTimeout(function() {
                $(t[1]).css({
                    transform: "translateY(0)"
                })
            }, 100), setTimeout(function() {
                $(t[2]).css({
                    transform: "translateY(0)"
                })
            }, 200), setTimeout(function() {
                $(t[3]).css({
                    transform: "translateY(0)"
                })
            }, 300), setTimeout(function() {
                $(t[4]).css({
                    transform: "translateY(0)"
                })
            }, 400), m = !0, $("#menuLine1").css({
                width: "100%",
                height: "auto",
                "border-radius": "0",
                border: "none",
                "border-bottom": "2px solid rgb(250,250,250)",
                top: "50%",
                left: "auto",
                right: "0",
                transform: "translateY(-50%) rotateZ(45deg)"
            }), $("#menuLine4").css({
                width: "100%",
                bottom: "auto",
                top: "50%",
                right: "0",
                transform: "translateY(-50%) rotateZ(-45deg)"
            }), $("#menuLine2").hide(), $("#menuLine3").hide()
        }
    });
    var f = function() {
            $("#overResume .bulb").css({
                "border-color": "#F39C12",
                "background-color": "#FDE3A7",
                "box-shadow": "0px 0px 10px 0px #F39C12"
            }), $("#overResume .bulbShine").css({
                "border-color": "white"
            }), $("#pSquare1").css({
                "border-color": "#F64747",
                "background-color": "rgba(246,71,71,0.2)"
            }), $("#pSquare2").css({
                "border-color": "#03A678",
                "background-color": "rgba(3,166,120,0.2)"
            }), $("#pCircle1").css({
                "border-color": "#F39C12",
                "background-color": "rgba(243,156,18,0.2)"
            }), $("#pCircle2").css({
                "border-color": "#6BB9F0",
                "background-color": "rgba(107,185,240,0.2)"
            }), setTimeout(function() {
                $("#underResume .bulb").css({
                    "border-color": "#F39C12",
                    "background-color": "#FDE3A7",
                    "box-shadow": "0px 0px 10px 0px #F39C12"
                }), $("#underResume .bulbShine").css({
                    "border-color": "white"
                }), $("#screen").css({
                    "background-color": "rgb(250,250,250)"
                }), $(".computerLine").css({
                    "border-color": "rgb(160,160,160)"
                }), $(".hiddenCompLine").css({
                    visibility: "visible"
                })
            }, 100), setTimeout(function() {
                $(".coffeeSteam").css({
                    transform: "translateY(-50%) translateX(-50%)",
                    opacity: "1"
                }), $("#b9").css({
                    transform: "translateX(-50%) rotateZ(10deg) translateY(-2px)",
                    right: "50px",
                    bottom: "40%"
                })
            }, 400)
        },
        g = function() {
            $("#overResume .bulb").css({
                "border-color": "black",
                "background-color": "rgb(250,250,250)",
                "box-shadow": "none"
            }), $("#overResume .bulbShine").css({
                "border-color": "transparent"
            }), $("#screen").css({
                "background-color": "rgb(230,230,230)"
            }), $(".computerLine").css({
                "border-color": "white"
            }), $(".hiddenCompLine").css({
                visibility: "hidden"
            }), $("#underResume .bulb").css({
                "border-color": "black",
                "background-color": "rgb(250,250,250)",
                "box-shadow": "none"
            }), $("#underResume .bulbShine").css({
                "border-color": "transparent"
            }), $("#selfPortrait div").css({
                "border-color": "black",
                "background-color": "transparent"
            }), $(".coffeeSteam").css({
                transform: "translateY(23px) translateX(-50%)",
                opacity: "0"
            }), $("#b9").css({
                transform: "translateX(-50%) rotateZ(-90deg)",
                right: "76px",
                bottom: "15px"
            })
        };
    $("#resume").hover(f, g), $(document).on("click", ".navbuttons", function(t) {
        t.preventDefault();
        var e = "#" + this.getAttribute("data-target");
        "#aboutDown" == e && (e = "#about"), "#contact" == e ? ($("html, body").animate({
                scrollTop: $(document).height()
            }, 2e3, "easeInOutQuart"), setTimeout(function() {
                $(".schoolImg").hide()
            }, 2e3)) : $("html, body").animate({
                scrollTop: $(e).offset().top
            }, 1200, "easeInOutQuart")
    }), $("#navigationButtonWrapper .navbuttons").hover(function() {
        var t = this.getAttribute("data-target"),
            e = 0;
        "about" == t ? e = 1 : "education" == t ? e = 2 : "experience" == t ? e = 3 : "projects" == t ? e = 4 : "contact" == t && (e = 5), 0 != e && $("#span" + e).css({
            opacity: "1",
            transform: "translateX(-20px)"
        })
    }, function() {
        $("#message p").css({
            opacity: "0",
            transform: "translateX(0)"
        })
    }), $("#scrollNavigationButtonWrapper .navbuttons").hover(function() {
        var t = $(window).scrollTop();
        if (t > 550 && window.innerWidth > 1300) {
            var e = $(this).offset().top,
                s = o(e);
            $(this).children("p").css({
                color: s
            }), $(this).children(".navDot").css({
                width: "5px",
                height: "5px",
                "border-color": s,
                "border-width": "2px",
                "background-color": "transparent",
                transform: "translateY(-50%) translateX(50%) rotateZ(225deg)"
            })
        }
    }, function() {
        var t = $(this).offset().top,
            o = e(t);
        $(this).children("p").css({
            color: o
        }), $(this).children(".navDot").css({
            width: "3px",
            height: "11px",
            "border-width": "0px",
            "border-color": o,
            "background-color": o,
            transform: "translateY(-50%) translateX(50%) rotateZ(0)"
        })
    }), $(".imageDiv").hover(function() {
        $(this).children(".imgText").delay(150), $(this).children(".imgText").children("p").delay(150), $(this).children(".imgText").animate({
            height: "20%"
        }, 200, "linear"), $(this).children(".imgText").children("p").animate({
            opacity: "1"
        }, 100, "linear")
    }, function() {
        $(this).children(".imgText").animate({
            height: "0"
        }, 200, "linear"), $(this).children(".imgText").children("p").animate({
            opacity: "0"
        }, 100, "linear")
    }), $(window).scroll(scrollAnimations), scrollAnimations();
    var b = !0;
    $(".showNav").click(function() {
        b ? ($(".lowerMNavList > a").fadeIn(300), $(".lowerMNavList").slideDown(400, "linear"), b = !1) : ($(".lowerMNavList").slideUp(400, "linear"), $(".lowerMNavList > a").fadeOut(300), b = !0)
    }), $(".bigButton").on("click", showWork);
    var v = 4;
    $("#div4").css({
        opacity: "1",
        "z-index": "3"
    }), $(".slideDir").on("click", function() {
        var t = $(this).attr("id");
        console.log(t);
        if ("slideRight2" == t) {
            var e = v;
            v = parseInt(v) - 1, 3 == v && (v = 4);
            // console.log(v);
            var o = $("#div" + e),
                s = $("#div" + v);
            $(".projects");
            o.css({
                opacity: "0",
                "z-index": "-1"
            }), o.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).removeClass("slideOutBottom")
            }).addClass("slideOutBottom"), setTimeout(function() {
                s.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                    $(this).removeClass("slideInFromLeft")
                }).addClass("slideInFromLeft"), s.css({
                    opacity: "1",
                    "z-index": "3"
                })
            }, 200)
        } else {
            var e = v;
            v = parseInt(v) + 1, 5 == v && (v = 4);
            // console.log(v);
            var o = $("#div" + e),
                s = $("#div" + v);
            $(".projects");
            o.css({
                opacity: "0",
                "z-index": "-1"
            }), o.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).removeClass("slideOutLeft")
            }).addClass("slideOutLeft"), setTimeout(function() {
                s.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                    $(this).removeClass("slideInFromBottom")
                }).addClass("slideInFromBottom"), s.css({
                    opacity: "1",
                    "z-index": "3"
                })
            }, 200)
        }
    }), $("#projImages a").hover(function() {
        $(this).css({
            transform: "translateY(-20px)"
        });
        for (var t = parseInt($(this).css("z-index")), e = $("#projImages a").not(this), o = 0; o < e.length; o++) {
            var s = e[o];
            parseInt($(s).css("z-index")) > t && $(s).css({
                opacity: "0.1"
            })
        }
    }, function() {
        $("#projImages a").css({
            transform: "translateY(0)",
            opacity: "1"
        })
    }), $("#projImages a").on("click", function() {
        var t = this.getAttribute("data-target");
        if (v != t) {
            var e = v;
            v = t, $lastUsed = $("#div" + e), $this = $("#div" + v), $lastUsed.css({
                opacity: "0",
                "z-index": "-1"
            }), $lastUsed.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).removeClass("slideOutBottom")
            }).addClass("slideOutBottom"), setTimeout(function() {
                $this.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                    $(this).removeClass("slideInFromLeft")
                }).addClass("slideInFromLeft"), $this.css({
                    opacity: "1",
                    "z-index": "3"
                })
            }, 200)
        }
    });
    var w, x = function() {
        window.innerWidth > 668 && 668 >= w && whatBackground(), window.innerWidth <= 925 && w > 925 ? ($("#navbar").fadeOut(600), $("#mobileNav").fadeIn(600)) : window.innerWidth > 925 && 925 >= w && ($("#mobileNav").fadeOut(600), $("#navbar").fadeIn(600)), w = window.innerWidth
    };
    x(), $(window).resize(x);

    var T = function() {
        var t = navigator.userAgent.toLowerCase(); - 1 != t.indexOf("safari") && -1 == t.indexOf("chrome") && $("#resume").css({
            "border-radius": "2px"
        })
    };
    T(), $(document).scroll(s)
});
var lastUsed, isShowing = !1,
    projImagesLoaded = !1,
    penAnimationDone = !1;