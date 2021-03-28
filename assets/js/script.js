// var initialInputEl=document.getElementById('initialsInput').style.display='none'; 
// var initialLabelEl=document.getElementById('initialsLabel').style.display='none'; 

var initialInputEl;
var initialLabelEl;
var initialInputContainer=document.getElementById("initialInputContainer");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var containerEl = document.getElementById("container");
var pEl = document.getElementById("instructions");
var luckEl = document.getElementById("luck");
var btnContainer = document.getElementById("btnContainer");
var body= document.body;
var decreaseTime = 2;
var indexPlace = 0;
var currentScore = 0;
var timeLeft = 59;
var scoreLocalStorage = localStorage.getItem("highScore");
//var scoreEl = document.getElementById("highScore");
//scoreEl.textContent="high score: "+ scoreLocalStorage;
 var correctWrongDisplayEl = document.getElementById("correctWrongDisplay");
var questionEl = document.getElementById("question");
// document.get
var btnSubmitScore;



var answerBtn1
var answerBtn2
var answerBtn3
var answerBtn4
var questions = [
  { q: "What does console.log do?", a1: "Logs the value in the webs console" , a2: "Logs your favorite food", a3:"Trick question - it's not a thing.", a4:"Provides the current sports scores", answer:"Logs the value in the webs console"},
  { q: "What is a DOM?", a1: "Due On Monday" , a2: "Don't Ommit Messages", a3:"Donuts On Mirrors", a4:"Document Object Model", answer:"Document Object Model"},
  { q: "What javascript code allows you to select an element by it's id?", a1: "getElementByName" , a2: "getElementByClass", a3:"getElementById", a4:"This isn't possible through javascript", answer:"getElementById" },
  { q: "What is pseudocode?", a1: "Comments within the program to detail what's happening in the backend" , a2: "Fake code to confuse hackers", a3:"An ancient coding language", a4:"Fake code for added security", answer:"Comments within the program to detail what's happening in the backend" }
];




function initialGame(){
    
}

function startQuiz(){
//remove good luck and start button
luckEl.parentNode.removeChild(luckEl);
startBtn.parentNode.removeChild(startBtn);
pEl.parentNode.removeChild(pEl);

var answerBtn1 = document.createElement('button');
answerBtn1.id='answerBtn1';
btn1Container.appendChild(answerBtn1)

var answerBtn2 = document.createElement('button');
answerBtn2.id='answerBtn2';
btn2Container.appendChild(answerBtn2)

var answerBtn3 = document.createElement('button');
answerBtn3.id='answerBtn3';
btn3Container.appendChild(answerBtn3)

var answerBtn4 = document.createElement('button');
answerBtn4.id='answerBtn4';
btn4Container.appendChild(answerBtn4)


countDown();
questionGenerator();
}

//Timer that counts down from 60
function countDown() {
  

  //use the 'setInterval()' method to call a function to be executed every 1 second
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time Remaining: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 0) {
      timerEl.textContent = "Time Remaining: 0";
      clearInterval(timeInterval);
      rematch();
    }
  }, 1000);
}


//replace p text with question
function questionGenerator() {
    
    questionEl.textContent = questions[indexPlace].q;
  questionEl.setAttribute('style', 'margin-top:125px; width:100%;');

  // create buttons for selecting answers
  var answerBtn1 = document.getElementById("answerBtn1")
  answerBtn1.onclick=function(){correctAnswerCheck()};
  answerBtn1.textContent = questions[indexPlace].a1;
  answerBtn1.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
  

    var answerBtn2 = document.getElementById("answerBtn2")
  answerBtn2.onclick=function(){correctAnswerCheck()};
  answerBtn2.textContent=questions[indexPlace].a2;
  answerBtn2.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');

var answerBtn3= document.getElementById("answerBtn3")
  answerBtn3.onclick=function(){correctAnswerCheck()};
  answerBtn3.textContent=questions[indexPlace].a3;
  answerBtn3.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');

var answerBtn4= document.getElementById("answerBtn4")
  answerBtn4.onclick=function(){correctAnswerCheck()};
  answerBtn4.textContent=questions[indexPlace].a4;
  answerBtn4.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
}


// functions for checking the correct answer 
function correctAnswerCheck(){
    if(event.target.textContent===questions[indexPlace].answer){
        correctWrongDisplayEl.textContent=""
        indexPlace++;
        if (indexPlace<=(questions.length-1)){
        correctWrongDisplayEl.textContent=""
        questionGenerator();
        }else {
            rematch();
        }
    }else{
        timeLeft=timeLeft-decreaseTime;
        correctWrongDisplayEl.textContent="Wrong!"
    }
}

//function for starting game over
function rematch(){
    btn1Container.parentNode.removeChild(btn1Container);
    btn2Container.parentNode.removeChild(btn2Container);
    btn3Container.parentNode.removeChild(btn3Container);
    btn4Container.parentNode.removeChild(btn4Container);

    currentScore=(timeLeft+1);
    if(localStorage.getItem("highScore")===null){
        localStorage.setItem("highScore",currentScore);
        var scoreLocalStorage = localStorage.getItem("highScore");
        //scoreEl.textContent="high score: "+ scoreLocalStorage;
        questionEl.textContent = "Your score: "+ currentScore + ". You set a new high score! Would you like to play again?";
        logHighScore();
        // initialLabelEl
    }
    else if(currentScore>localStorage.getItem("highScore")){
        localStorage.setItem("highScore", currentScore);
        var scoreLocalStorage = localStorage.getItem("highScore");
        //scoreEl.textContent="high score: "+ scoreLocalStorage;
        questionEl.textContent = "Your score: "+ currentScore + ". You set a new high score! Would you like to play again?";
        logHighScore();
    }else{
        questionEl.textContent = "Your score: "+ currentScore + ". You didn't set a new high score, but you might next time! Would you like to play again?";
        logHighScore();
    }
    timerEl=0;


    
    
    var playAgainBtn = document.createElement('button');
    playAgainBtn.id='playAgain';
    playAgainBtn.textContent = "Play Again"
    playAgainBtn.onclick=function(){location.reload()};
    playAgainBtn.setAttribute('style', 'background-color: darkgreen; width: 100px; height: 70px; color: cornsilk; font-size: larger; margin-top: 25px;');
    btnContainer.appendChild(playAgainBtn)

}

function logHighScore(){
    var initialLabelEl=document.createElement("Label");
        initialLabelEl.htmlFor='initialInput';
        initialLabelEl.id="initialLabel";
        initialLabelEl.innerHTML="Enter your initials: ";
        initialInputContainer.appendChild(initialLabelEl);

        var initialInputEl=document.createElement('input');
        initialInputEl.id='initialInput';
        initialInputContainer.appendChild(initialInputEl);

        var btnSubmitScore = document.createElement('button');
        btnSubmitScore.id='submitscore';
        btnSubmitScore.textContent="Submit Score"
        btnSubmitScore.setAttribute('style', 'margin-left:10px')
        initialInputContainer.appendChild(btnSubmitScore);

        

        btnSubmitScore.addEventListener("click",function(){
            initialsValue=document.getElementById('initialInput').value;
            if (scoreLocalStorage!==null){
            localStorage.setItem("highScore", scoreLocalStorage + " | " + initialsValue+"-"+currentScore);
            console.log(initialsValue);}
            else {
                localStorage.setItem("highScore", initialsValue+"-"+currentScore);
            }
        });
        
}


startBtn.addEventListener("click", startQuiz);


