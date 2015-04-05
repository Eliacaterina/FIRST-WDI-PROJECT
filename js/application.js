$(document).ready(function(){

  $(".pagetwo").hide();
  $("#start-reading").hide();
  $("#afterChoosing").hide();
  
  $(".button").click(function (){
  	$(".pageOne").hide(1000);
  	$(".pagetwo").show(1000);
    $("#pageExtract").hide();
  });


  var secondsPassed=0;

  function addOneSecond() {
    secondsPassed++;
    console.log(secondsPassed)
    $('#clock').text(secondsPassed);
  }

  var timer;

  $(".buttonStartReading").click(function(){
    console.log("clicked")
    $("#afterChoosing").show();
    $("#pageExtract").show();
  	timer = setInterval(addOneSecond, 1000); 

  });
    
  $(".buttonStopReading").click(function(){
    clearInterval(timer);
  	console.log("stop");
    $(".howLong").show();
    timeItTakes();
    oneHour();
  });

  var totalAmountOfWordsinPassage= 286;
  var speed;

  function timeItTakes() {
    speed=totalAmountOfWordsinPassage/parseInt($('#clock').text()) * 60;
    // console.log(speed); 
    $('.speedTesting').text(Math.ceil(speed));
  }

   var speed2;
   var totalAmountOfWordsInBook = 560000;


  function oneHour() {
    speed2= totalAmountOfWordsInBook/ (parseInt($('#clock').text()) * 60 *60);
    $('#result').text(Math.ceil(speed2));

  }

});