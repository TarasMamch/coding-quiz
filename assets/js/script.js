var viewHighScoreButton = document.querySelector('.view-highscore-button')
var startScreen = document.querySelector("main")
var quizSection = document.querySelector("section")
var questionEl = document.querySelector("#question")
var quizEndPage = document.querySelector('.quiz-end-section')
var timeRemaining = 60

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
        answers: ["console.log", "terminal/bash", "for loops", "JavaScript"],
        correctAnswer: 0
    },
]

function startButton() {
    startScreen.style.display = "none";
    quizSection.style.display = 'flex';
    viewHighScoreButton.style.visibility = 'hidden'
    quiz()
    startTimer()
}

var questionSelector = 0
var answerGiven = null
var stopTimer = false

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
    if (questionSelector > 3) {
        stopTimer = true
        return
    } else {
        questionEl.innerHTML = quizMaterial[questionSelector].question
    }
    for (i = 0; i < 4; i++) {
        document.querySelector(`.answer-button-${i}`).innerHTML = quizMaterial[questionSelector].answers[i]
    }
}

function checkAnswers() {
    if (answerGiven == quizMaterial[questionSelector].correctAnswer) {
        questionSelector++
        answerGiven = null
        quiz()
    } else {
        questionSelector++
        answerGiven = null
        timeRemaining -= 10
        quiz()
    }
}

function startTimer() {
    var timeInterval = setInterval(function () {
        timeRemaining--;
        document.querySelector('#timer').innerHTML = timeRemaining

        if (timeRemaining === 0 || stopTimer == true) {
            clearInterval(timeInterval);
            scorePage()
        }
    }, 1000)
}

function scorePage() {
    quizEndPage.style.display = 'flex'
    quizSection.style.display = 'none'
    var score = document.createTextNode(timeRemaining)
    document.querySelector('#final-score').appendChild(score)
}

function scoreSubmition() {
    var score = `${document.getElementById('text-box').value}-${timeRemaining}`
    var scoresArray = JSON.parse(localStorage.getItem('allScores') || '[]')
    scoresArray.push(score)
    localStorage.setItem('allScores', JSON.stringify(scoresArray))
    document.querySelector('.quiz-end-section').style.display = "none"
    highScorePage()
}

function highScorePage() {
    startScreen.style.display = "none";
    quizSection.style.display = 'none';
    document.querySelector('.high-score-display').style.display = "flex"
    stopTimer()
    var scoreList = document.getElementById('score-list')
    var scoresArray = JSON.parse(localStorage.getItem('allScores') || '[]')
    for (let i = 0; i < scoresArray.length; i++) {
        var score = scoresArray[i];
        var li = document.createElement('li')
        li.innerHTML = score
        scoreList.appendChild(li)
    }
}

function clearLocalStorage() {
    localStorage.clear()
    location.reload()
}

function refreshPage() {
    location.reload()
}