
$("#hide").click(function(){
    $("img").hide();
});

$('button').click(function() {
    var name = $(".inputOne").val();
    var age = parseInt($(".inputTwo").val());
    var team = $(".inputThree").val();
    
    var rando = Math.floor(Math.random() * 10);

    var win = age + rando;
    
    $(".results").append(name + ", the " + team + " will win the World Series in " + win + " years! " );
    
    $(".results").show();

});