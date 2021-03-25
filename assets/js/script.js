var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var pEl = document.getElementById('instructions');
var luckEl = document.getElementById('luck');

var questions = [
    { q: 'The sky is blue.', a: 't' },
    { q: 'There are 365 days in a year.', a: 't' },
    { q: 'There are 42 ounces in a pound.', a: 'f' },
    { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { q: 'Bananas are vegetables.', a: 'f' }
  ];

//Timer that counts down from 60
function countDown(){
    var timeLeft=60;

    //use the 'setInterval()' method to call a function to be executed every 1 second
    var timeInterval = setInterval(function(){
        if(timeLeft > 0){
        timerEl.textContent = "Time Remaining: "+timeLeft 
        timeLeft--;
        }
        else if (timeLeft===0){
            timerEl.textContent = "Time Remaining: 0"
            clearInterval(timeInterval);
        }
    },1000);

}


//replace p text with question 
function questionGenerator(){
    //remove good luck and start button 
    luckEl.parentNode.removeChild(luckEl);
    startBtn.parentNode.removeChild(startBtn);

    //randomly select question and answer from questions array
    pEl.textContent="Test question 1"
    
};


startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", questionGenerator);
// startBtn.onclick = questionGenerator; countDown;
