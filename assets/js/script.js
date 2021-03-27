var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var containerEl = document.getElementById("container");
var pEl = document.getElementById("instructions");
var luckEl = document.getElementById("luck");
var h2El = document.createElement("h2");
var body= document.body;

var questions = [
  { q: "The sky is blue.", a: "t" },
  { q: "There are 365 days in a year.", a: "t" },
  { q: "There are 42 ounces in a pound.", a: "f" },
  { q: "The Declaration of Independence was created in 1745.", a: "f" },
  { q: "Bananas are vegetables.", a: "f" },
];

var score = 0;

//Timer that counts down from 60
function countDown() {
  var timeLeft = 60;

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
  //remove good luck and start button
  luckEl.parentNode.removeChild(luckEl);
  startBtn.parentNode.removeChild(startBtn);
  pEl.parentNode.removeChild(pEl);


  //Create element for displaying questions
  
  var questionEl = document.createElement('h2');
  questionEl.textContent =
    'Test question generated';
  questionEl.setAttribute('style', 'margin-top:125px; width:100%;');
  body.appendChild(questionEl);

//create div container for holding answer buttons
  var buttonContainer = document.createElement('div')
  buttonContainer.id='btnContainer';
  buttonContainer.setAttribute('style', 'backgroun-color:yellow; display:flex; width:100px; flex-wrap:wrap; height:200px; align-items:center; margin:auto;')
  body.appendChild(buttonContainer);


  // create buttons for selecting answers
  var answerBtn1 = document.createElement('button');
  answerBtn1.id='answerBtn1';
  answerBtn1.onclick=function(){testMessage1()};
  answerBtn1.textContent = 'AnswerButton1';
  answerBtn1.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
  buttonContainer.appendChild(answerBtn1);


  var answerBtn2 = document.createElement('button');
  answerBtn2.id='answerBtn2';
  answerBtn2.onclick=function(){testMessage2()};
  answerBtn2.textContent='AnswerButton2';
  answerBtn2.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
  buttonContainer.appendChild(answerBtn2);

  var answerBtn3 = document.createElement('button');
  answerBtn3.id='answerBtn3';
  answerBtn3.onclick=function(){testMessage3()};
  answerBtn3.textContent='AnswerButton3';
  answerBtn3.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
  buttonContainer.appendChild(answerBtn3);

  var answerBtn4 = document.createElement('button');
  answerBtn4.id='answerBtn4';
  answerBtn4.onclick=function(){testMessage4()};
  answerBtn4.textContent='AnswerButton4';
  answerBtn4.setAttribute('style', 'background-color:lightblue; height: 40px; font-size:large;');
  buttonContainer.appendChild(answerBtn4);


  //randomly select question and answer from questions array

  // for (var i=0; i<questions.length; i++){
  //     var question = Math.floor(Math.random() *10) +1;
  //     questionEls.textContent=question
  //     console.log(question);

  // }
}

// functions for answer buttons 
function testMessage1(){
    alert("Test button1 ");
}
function testMessage2(){
    alert("Test button2 ");
}
function testMessage3(){
    alert("Test button3 ");
}
function testMessage4(){
    alert("Test button4 ");
}

startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", questionGenerator);

