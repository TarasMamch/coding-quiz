var startButton = document.querySelector("#start-quiz-button")
var startScreen = document.querySelector("main")
var quizSection = document.querySelector("section")
var questionNumber = 0

startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    quizSection.style.visibility = "visible"
    quiz()
})

function quiz() {
    var quizMaterial = [
        {
            question: ('Question #1'),
            answers: ["answer1", "answer2", "answer3", "answer4"],
            correctAnswer: 2
        },
        {
            question: 'Question #2',
            answers: ["answer1", "answer2", "answer3", "answer4"],
            correctAnswer: 1
        },
        {
            question: 'Question #3',
            answers: ["answer1", "answer2", "answer3", "answer4"],
            correctAnswer: 3
        },
        {
            question: 'Question #4',
            answers: ["answer1", "answer2", "answer3", "answer4"],
            correctAnswer: 0
        },
    ]
    console.log(quizMaterial.question[0])
}