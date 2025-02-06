const questions = [
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        answers: [
            { text: "<pre>", correct: false },
            { text: "<a>", correct: false },
            { text: "<b>", correct: true },
            { text: "</br>", correct: false }
        ]
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        answers: [
            { text: "<h3>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<b>", correct: false },
            { text: "</br>", correct: false }
        ]
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        answers: [
            { text: "<pre>", correct: false },
            { text: "<a>", correct: false },
            { text: "<br>", correct: true }, // Fixed incorrect answer
            { text: "</br>", correct: false }
        ]
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        answers: [
            { text: "<ul>", correct: true },
            { text: "<li>", correct: false },
            { text: "<ol>", correct: false },
            { text: "</br>", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
    });
}