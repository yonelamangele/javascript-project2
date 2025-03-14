$(document).ready(function() {
    $(".menu-icon").click(function() {
        $("#side-nav").slideDown(1000);
        $(".menu-icon").hide();
        $("#ex").show();
    });

    $("#ex").click(function() {
        $("#side-nav").slideUp(1000);
        $(".menu-icon").show();
        $("#ex").hide()
    });
});