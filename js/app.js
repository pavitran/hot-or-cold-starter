
$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    $("a.new").click(function(){
      newGame();
    });
    newGame();
});

function newGame() {
  count = 0;
  $("span#count").text(count);
  $("h2#feedback").text("Make Your Guess!");
  $("#userGuess").val("");
  $("ul#guessList").empty();
	var secret_number = win_number();
  $( "#guesses" ).submit(function( event ) {
        count ++;
        $("span#count").text(count);
        var guessed_number = parseInt($("#userGuess").val());
        if (guessed_number < 1 || guessed_number > 100) {
          $("h2#feedback").text("Invalid Guess need number between 1 and 100");
        }else{
          $("ul#guessList").append("<li>" + guessed_number + "</li>");
          $("h2#feedback").text(user_guess(guessed_number,secret_number));
        }
      event.preventDefault();
      $("#userGuess").val("");
  });
}

function win_number() {
  return Math.floor((Math.random() * 100) + 1);
}

function user_guess(guess,secret) {
  var x = 0;
  var y = 0;
  if (guess > secret) { x = guess; y = secret;} else {y = guess;x=secret;}
  if (x-y > 50) {
    return "Ice cold";
  } else if (x-y < 50 &&  (x-y > 30)){
    return "cold";
  }else if (x-y < 30 &&  (x-y) > 20){
    return "warm";
  }else if (x-y < 20 &&  (x-y) > 10){
    return "hot";
  }else if (x-y < 10 &&  (x-y) > 5){
    return "very hot";
  }else if (x-y < 5 &&  (x-y) > 1){
    return "very very hot";
  }else if (x-y == 0){
    return "won";
  }
}


