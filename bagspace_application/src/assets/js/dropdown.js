$( ".item1" ).click(function() {
    if($(".item1").hasClass("on")){
        $(".item1").removeClass("on");
        $(".contents_test").css("margin-top","0");
         $("#a1").attr('class','glyphicon glyphicon-circle-arrow-down');
    }
    else {
        $(".item1").addClass("on").siblings().removeClass("on");
        $(".contents_test").css({"margin-top":+"0px"});
        $("#a1").attr('class','glyphicon glyphicon-circle-arrow-up');
        $("#a2").attr('class','glyphicon glyphicon-circle-arrow-down');
        $("#a3").attr('class','glyphicon glyphicon-circle-arrow-down');

    }
    return false;
});
$( ".item2" ).click(function() {
    if($(".item2").hasClass("on")){
        $(".item2").removeClass("on");
          $("#a2").attr('class','glyphicon glyphicon-circle-arrow-down');
    }
    else {
        $(".item2").addClass("on").siblings().removeClass("on");
          $("#a2").attr('class','glyphicon glyphicon-circle-arrow-up');
          $("#a1").attr('class','glyphicon glyphicon-circle-arrow-down');
          $("#a3").attr('class','glyphicon glyphicon-circle-arrow-down');

     }
    return false;
});
$( ".item3" ).click(function() {
    if($(".item3").hasClass("on")){
        $(".item3").removeClass("on");
          $("#a3").attr('class','glyphicon glyphicon-circle-arrow-down');
     }
    else {
        $(".item3").addClass("on").siblings().removeClass("on");
          $("#a3").attr('class','glyphicon glyphicon-circle-arrow-up');
          $("#a1").attr('class','glyphicon glyphicon-circle-arrow-down');
          $("#a2").attr('class','glyphicon glyphicon-circle-arrow-down');

    }
    return false;
});