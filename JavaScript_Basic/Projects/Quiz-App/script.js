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
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentquestionIndex = 0;
let score = 0;

function startQuiz(){
    currentquestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click",selectAnswer)

    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");    
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function ShowScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of the ${questions.length}!`;
    nextButton.innerHTML = "Play Agian";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex < questions.length){
        showQuestion();
    }
    else{
        ShowScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

