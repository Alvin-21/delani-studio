$(document).ready(function(){
    $("div.design").click(function() {
        $("figure.hide").toggle();
        $("div.design").hide();
    });
    $("figure.hide").click(function() {
        $("div.design").toggle();
        $("figure.hide").hide();
    });
});