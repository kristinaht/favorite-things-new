$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
  
    var car = $("#cars").val();
    var food = $("#food").val();
    var city = $("#cities").val();
    var arr = [car, food , city];

    console.log(arr)
    $("#carSelected").text(arr[0]);
    $("#foodSelected").text(arr[1]);
    $("#citySelected").text(arr[2]);
    $("#result").show();
  });
});