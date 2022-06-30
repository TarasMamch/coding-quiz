var startButton = document.querySelector("#start-quiz-button")
var startScreen = document.querySelector("main")
var quizSection = document.querySelector("section")
var questionEl = document.querySelector("#question")
var timerEl = 60
document.querySelector('#timer').innerHTML = timerEl


var quizMaterial = [
    {
        question: ('Commonly used data types DO NOT Include:'),
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: 2
    },
    {
        question: 'The condition in an if / else statement is enclosed with ______.',
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: 2
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
        answers: ["numbers and strings", "other arrays", "boooleans", "all of the above"],
        correctAnswer: 3
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: 3
    },
]

startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    quizSection.style.visibility = "visible"
    quiz()
    StartTimer()
})

var questionSelector = 0
var answerGiven = null

document.querySelector('.answer-button-0').addEventListener("click", function () {
    answerGiven = 0
    checkAnswers()
})
document.querySelector('.answer-button-1').addEventListener("click", function () {
    answerGiven = 1
    checkAnswers()
})
document.querySelector('.answer-button-2').addEventListener("click", function () {
    answerGiven = 2
    checkAnswers()
})
document.querySelector('.answer-button-3').addEventListener("click", function () {
    answerGiven = 3
    checkAnswers()
})


function quiz() {
    var answerSelector = 0
    if (questionSelector == 0) {
        for (i = 0; i < 4; i++) {
            questionEl.innerHTML = quizMaterial[0].question
            document.querySelector(`.answer-button-${answerSelector}`).innerHTML = quizMaterial[0].answers[answerSelector]
            answerSelector++
        } answerSelector = 0;
    } if (questionSelector == 1) {
        for (i = 0; i < 4; i++) {
            questionEl.innerHTML = quizMaterial[1].question
            document.querySelector(`.answer-button-${answerSelector}`).innerHTML = quizMaterial[1].answers[answerSelector]
            answerSelector++
        } answerSelector = 0;
    } if (questionSelector == 2) {
        for (i = 0; i < 4; i++) {
            questionEl.innerHTML = quizMaterial[2].question
            document.querySelector(`.answer-button-${answerSelector}`).innerHTML = quizMaterial[2].answers[answerSelector]
            answerSelector++
        } answerSelector = 0;
    } if (questionSelector == 3) {
        for (i = 0; i < 4; i++) {
            questionEl.innerHTML = quizMaterial[3].question
            document.querySelector(`.answer-button-${answerSelector}`).innerHTML = quizMaterial[3].answers[answerSelector]
            answerSelector++
        } answerSelector = 0;
    }
}

function checkAnswers() {
    if (answerGiven == quizMaterial[questionSelector].correctAnswer) {
        console.log('correct')
        questionSelector++
        answerGiven = null
        quiz()
    } else {
        console.log('wrong')
        questionSelector++
        answerGiven = null
        timerEl -= 10
        quiz()
    }
}

function StartTimer() {
    var timeInterval = setInterval(function () {
        timerEl--;
        document.querySelector('#timer').innerHTML = timerEl

        if (timerEl === 0) {
            clearInterval(timeInterval);
            console.log('test')
        }
    }, 1000)
}