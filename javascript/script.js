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

    $("div.product").click(function() {
        $("figure#product").toggle();
        $("div.product").hide();
    });
    $("figure#product").click(function() {
        $("div.product").toggle();
        $("figure#product").hide();
    });

    $("#blank").mouseover(function() {
        $("#blank .image").show();
    });
    $("#blank").mouseout(function() {
        $("#blank .image").hide();
    });

    $("#ontario").mouseover(function() {
        $("#ontario .image").show();
    });
    $("#ontario").mouseout(function() {
        $("#ontario .image").hide();
    });

    $("#pyramid").mouseover(function() {
        $("#pyramid .image").show();
    });
    $("#pyramid").mouseout(function() {
        $("#pyramid .image").hide();
    });

    $("#widget").mouseover(function() {
        $("#widget .image").show();
    });
    $("#widget").mouseout(function() {
        $("#widget .image").hide();
    });

    $("#webpage").mouseover(function() {
        $("#webpage .image").show();
    });
    $("#webpage").mouseout(function() {
        $("#webpage .image").hide();
    });

    $("#editor").mouseover(function() {
        $("#editor .image").show();
    });
    $("#editor").mouseout(function() {
        $("#editor .image").hide();
    });

    $("#burned").mouseover(function() {
        $("#burned .image").show();
    });
    $("#burned").mouseout(function() {
        $("#burned .image").hide();
    });

    $("#logo").mouseover(function() {
        $("#logo .image").show();
    });
    $("#logo").mouseout(function() {
        $("#logo .image").hide();
    });

    $("form").submit(function(e){
        let name = $("#name").val();
        alert('Hello, ' + name + ' your message has been received.\nThanks for the response. 😄');
        document.forms[0].reset();
        e.preventDefault();
    });
});