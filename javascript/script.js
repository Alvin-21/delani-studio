$(document).ready(function(){
    $("div.design").click(function() {
        $("figure#design").toggle();
        $("div.design").hide();
    });
    $("figure#design").click(function() {
        $("div.design").toggle();
        $("figure#design").hide();
    });

    $("div.dev").click(function() {
        $("figure#dev").toggle();
        $("div.dev").hide();
    });
    $("figure#dev").click(function() {
        $("div.dev").toggle();
        $("figure#dev").hide();
    });
});