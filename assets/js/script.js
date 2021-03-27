var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var containerEl = document.getElementById("container");
var pEl = document.getElementById("instructions");
var luckEl = document.getElementById("luck");
var btnContainer = document.getElementById("btnContainer");
// var h2El = document.createElement("h2");
var body= document.body;
var decreaseTime = 2;
var indexPlace = 0;

var questionEl = document.getElementById("question");
document.get

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


var highScore = 0;
var timeLeft = 59;


function startQuiz(){
//remove good luck and start button
luckEl.parentNode.removeChild(luckEl);
startBtn.parentNode.removeChild(startBtn);
pEl.parentNode.removeChild(pEl);

// var questionEl = document.createElement('h2');
//   body.appendChild(questionEl);

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
    }
  }, 1000);
}


//replace p text with question
function questionGenerator() {
    
    questionEl.textContent = questions[indexPlace].q;
  questionEl.setAttribute('style', 'margin-top:125px; width:100%;');
  //body.appendChild(questionEl);

//create div container for holding answer buttons
  //var buttonContainer = document.createElement('div')
  //buttonContainer.id='btnContainer';
  //var buttonContainer
  //buttonContainer.setAttribute('style', 'background-color:yellow; display:flex; width:100px; flex-wrap:wrap; height:200px; align-items:center; margin:auto;')
  //body.appendChild(buttonContainer);


  // create buttons for selecting answers
  //var answerBtn1 = document.createElement('button');
  //answerBtn1.id='answerBtn1';
  var answerBtn1 = document.getElementById("answerBtn1")
  answerBtn1.onclick=function(){correctAnswerCheck()};
  answerBtn1.textContent = questions[indexPlace].a1;
  answerBtn1.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
  //buttonContainer.appendChild(answerBtn1);


  //var answerBtn2 = document.createElement('button');
//   answerBtn2.id='answerBtn2';
    var answerBtn2 = document.getElementById("answerBtn2")
  answerBtn2.onclick=function(){correctAnswerCheck()};
  answerBtn2.textContent=questions[indexPlace].a2;
  answerBtn2.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
//   buttonContainer.appendChild(answerBtn2);

//   var answerBtn3 = document.createElement('button');
  
//   answerBtn3.id='answerBtn3';
var answerBtn3= document.getElementById("answerBtn3")
  answerBtn3.onclick=function(){correctAnswerCheck()};
  answerBtn3.textContent=questions[indexPlace].a3;
  answerBtn3.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
//   buttonContainer.appendChild(answerBtn3);

//   var answerBtn4 = document.createElement('button');
//   answerBtn4.id='answerBtn4';
var answerBtn4= document.getElementById("answerBtn4")
  answerBtn4.onclick=function(){correctAnswerCheck()};
  answerBtn4.textContent=questions[indexPlace].a4;
  answerBtn4.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
  //buttonContainer.appendChild(answerBtn4);

}

// functions for checking the correct answer 
function correctAnswerCheck(){
    if(event.target.textContent===questions[indexPlace].answer){
        indexPlace++;
        if (indexPlace<=(questions.length-1)){
        questionGenerator();
        }else {
            alert("end of game");
            highScore=(timeLeft+1);
            console.log(highScore);
            if(localStorage.getItem("highScore")===null){
                localStorage.setItem("highScore",highScore);
            }
            else if(highScore>localStorage.getItem("highScore")){
                localStorage.setItem("highScore", highScore);
                alert("new high score set");
            }else{
                alert("you didn't set a new high score");
            }
            //localStorage.setItem("highScore", highScore);
            timerEl=0;
        }
        //end of game screen

    }else{
        timeLeft=timeLeft-decreaseTime;
    }
    
}


startBtn.addEventListener("click", startQuiz);


