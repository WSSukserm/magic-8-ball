$(document).ready(function(){

var magic8Ball = {};
var question;
$("#answer").hide();

//Array
magic8Ball.listOfAnswers = ["Signs point to yes!", "Better not tell you now…", "Don't count on it."];

// method
magic8Ball.askQuestion = function(question)
  {
    $("#8ball").effect("shake", 700);
    $("#answer").fadeIn(4000);
    var randomNumber = Math.random();
  	var randomNumberArray = randomNumber * this.listOfAnswers.length;
  	var randomIndex = Math.floor(randomNumberArray);
  	var randomAnswer = this.listOfAnswers[randomIndex];

  	console.log(question);
  	console.log(randomAnswer);

    $("#answer").text(randomAnswer);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  };

  var onClick = function() {
    $("#answer").hide();

    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

      setTimeout (
        function(){
          var question = prompt("ASK A YES/NO QUESTION");
              if (question === null) {
                return;
              }
          magic8Ball.askQuestion(question);
        }, 500);
  };

	$("#questionButton").click(onClick);

});
