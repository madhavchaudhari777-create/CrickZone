$(document).ready(function () {

    $(".match-card").hover(
        function () {
            $(this).css({
                "transform": "translateY(-8px)",
                "transition": "0.3s"
            });
        },
        function () {
            $(this).css({
                "transform": "translateY(0px)"
            });
        }
    );

});

$(document).ready(function () {

    $(".quick-btn").click(function () {

        $(".quick-btn").removeClass("active-btn");

        $(this).addClass("active-btn");

    });

});

$(document).ready(function () {

    $(".team-card").hide();

    $(".team-card").fadeIn(1500);

});

$(document).ready(function () {

    $(".news-box").hover(

        function () {
            $(this).css("transform", "scale(1.03)");
        },

        function () {
            $(this).css("transform", "scale(1)");
        }

    );

});

$(document).ready(function () {

    $(".poll-card button").click(function () {

        $(".poll-card button").removeClass("active-btn");

        $(this).addClass("active-btn");

    });

});