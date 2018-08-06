


$(function(){

    $("#title").load("../title.html")
    $("#dynamic").load("../dynamic.html")



    //切换
    $(".menu-item").click(function() {
        console.log($(this).data("page"))

        $("#dynamic").load($(this).data("page"))


    })


})