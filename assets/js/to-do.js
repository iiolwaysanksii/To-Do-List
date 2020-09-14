// $("li").click(function(){
//     $(this).toggleClass("completed");
// });
//This only adds listener to current li's for newly added li we need to mosify
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});


//clicking on X also fires the event of parent elements-->bubble
//to prevent this, do this
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(function(){    //to get parent element and apply fadeOut effect
        $(this).remove();                   //remove that parent
    });
    event.stopPropagation();    //to prevent bubble effct
});


$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){  //code for enter key
        var todoText = $(this).val();
        $(this).val("");
        //add input value to ul
        $("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> "+todoText+"</li>");    
    } 
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
});