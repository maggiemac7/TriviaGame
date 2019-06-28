// 30 Second Countdown

var timeLeft = 30;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);
var totalQuestions = 4 //this must be updated to match actual number of questions
function countdown() {
    if (timeLeft == -1) {
        clearInterval(timerId);
        submitData();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function submitData(){
  clearInterval(timerId); //prevents data from being submitted twice
  var inputs = $('input:checked');
  var answersRight = 0;
  
  for(var i = 0; i < inputs.length; i++){
    var inputCorrect = $(inputs[i]).attr('data-corr');
  
    if(inputCorrect){
      //inside here we have a valid answer
      answersRight++;
    }
  }
  //inputs.length (all questions answered) - answersRight
  var wrongAnswers = inputs.length - answersRight;
 
//totalQuestions  - inputs.length(all questions answerd by user) == quesiotns user did not answer
  var unanswered = totalQuestions - inputs.length; //total unanswered
  $('.main-container').empty();
  $('.main-container').append('<p>Right:' + answersRight + '</p>')
  $('.main-container').append('<p>Wrong:' +wrongAnswers  + '</p>')
  $('.main-container').append('<p>Unanswered:' + unanswered + '</p>')
  
}


$("#submit").click(submitData);
 