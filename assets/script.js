// Universal Variables
var questionsAndAnswers = [{
    question: "Which of the following is correct about JavaScript?",
    choices: ["JavaScript is a lightweight, interpreted programming language.", "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.", "All of the above."],
},
{
    question: "Which of the following is the correct syntax to print a page using JavaScript?",
    choices: ['window.print();', 'browser.print();', 'navigator.print();'],
},
{
    question: "Which built-in method removes the last element from an array and returns that element?",
    choices: ['last()', 'get()', 'pop()'],
},
{
    question: "Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ['add()', 'concat()', 'merge()'],
},
{
    question: "Which of the following function of String object extracts a section of a string and returns a new string?",
    choices: ['slice()', 'replace()', 'split()'],
},
];
var answers = ["All of the above.", "window.print();", "pop()", "concat()", "split()"]
var questionSets = 0;
let listQuestions = document.querySelector('#questionName');
let listAnswers = document.querySelector('#selectionAnswers');
let enterName = document.querySelector('#enterName');
var score = 0;
var name = "";
var time = 90;

//Landing Page 
function landing() {
    document.getElementById("questionsanswers").style.visibility = "hidden";
    document.getElementById("btnlanding").addEventListener("click", function (evt) {
        var counter = setInterval(function () {
            timer()
            return;
        }, 1000);

        function timer() {
            time--;
            if (time <= 0) {
                quizEnd();
                clearInterval(counter);
                storeLocalStorage();
                return;
            }
            else if (questionSets >= questionsAndAnswers.length) {
                return;
            }
            document.querySelector('#timerClock').innerHTML = "Timer: " + time + " seconds left";
        }

        var target = evt.target;
        if (target.id === "btnlanding") {
            document.getElementById("questionName").style.visibility = "visible";
            document.getElementById("selectionAnswers").style.visibility = "visible";
            document.getElementById("timerClock").style.visibility = "visible";
            document.getElementById("landingpage").style.visibility = "hidden";
        }
    })
}
landing();


//Correct Answer Logic
function correctAnswerClick(btnName) {
    if ((btnName) === answers[0]) {
        score++;
        alert("That is correct")
        nextQuestion();
    }
    else if ((btnName) === answers[1]) {
        score++;
        alert("That is correct")
        nextQuestion();
    }
    else if ((btnName) === answers[2]) {
        score++;
        alert("That is correct")
        nextQuestion();
    }
    else if ((btnName) === answers[3]) {
        score++;
        alert("That is correct")
        nextQuestion();
    }
    else if ((btnName) === answers[4]) {
        score++;
        alert("That is correct")
        nextQuestion();
    }
    else {
        score--;
        time = time - 20;
        alert("That is wrong")
        nextQuestion();
    }
}

//Questions + Answers
function nextQuestion() {
    questionSets++;
    if (questionSets >= questionsAndAnswers.length) {
        quizEnd();
        storeLocalStorage();
        return;
    }
    generateQuestions(questionSets);
    return;
}

function generateQuestions() {
    var eachQuestion = questionsAndAnswers[questionSets];
    listQuestions.innerText = eachQuestion.question,
        selectionAnswers.innerHTML = "";
    for (key in eachQuestion.choices) {
        var buttonName = "question" + questionSets + "choices";
        var choiceText = eachQuestion.choices[key];
        selectionAnswers.appendChild(createLi(buttonName, choiceText));
    }
    document.getElementById("hide").style.visibility = "hidden";
    return;
}

generateQuestions();

function createLi(name, choiceText) {
    var e = document.createElement("p");
    var buttonHtml = `<button class="choiceButton" onclick="correctAnswerClick(this.name)" name="${choiceText}">` + choiceText + '</button>';
    e.innerHTML = buttonHtml;
    return e;
}

function quizEnd() {
    listAnswers.style.display = 'none';
    listQuestions.style.display = 'none';
    let currentScore = document.getElementById('score')
    currentScore.innerText = "Final Score: " + score;
    var questionDisplay = document.getElementById('questionsanswers')
    var finalDisplay = document.getElementById('show')
    questionDisplay?.replaceWith(finalDisplay);
}

//Store Local Storage
function storeLocalStorage() {
    const nameOutVal = document.getElementById('nameinput')
    const buttonOp = document.getElementById("button")
    const listOutput = document.getElementById("output")
    const buttonOps = document.getElementById('button1')

    button1.onclick = function () {
        var finalDisplay = document.getElementById('show')
        var finalHighScores = document.getElementById('highscoresonly')
        finalDisplay?.replaceWith(finalHighScores);
    };


    buttonOp.onclick = function () {
        var finalDisplay = document.getElementById('show')
        var finalHighScores = document.getElementById('highscoresonly')
        finalDisplay?.replaceWith(finalHighScores);
        const nameOnly = nameOutVal.value;
        listOutput.innerHTML += `${nameOnly}: ${score}<br />`;
        if (nameOnly && score) {
            localStorage.setItem(score, nameOnly);
        }
    };

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const nameOnly = localStorage.getItem(key)

        listOutput.innerHTML += `${nameOnly}: ${score}<br />`;
    };
    return;
}

//Return Home
function returnHome () {
    location.reload(); 
}