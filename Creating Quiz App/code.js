const questions = [
    {
        question: "Which HTML element is used to define the title of a document that appears in the browser tab?",
        answers: [
            { text: "&ltmeta&gt", correct: false },
            { text: "&lthead&gt", correct: false },
            { text: "&lttitle&gt", correct: true },
            { text: "&ltlink&gt", correct: false }
        ]
    },
    {
        question: "What is the purpose of the <alt> attribute in an <img> tag?",
        answers: [
            { text: "To provide a hyperlink", correct: false },
            { text: "To provide alternative text for an image if it cannot be displayed", correct: true },
            { text: "To specify the image's file type", correct: false },
            { text: "To define image dimensions", correct: false }
        ]
    },
    {
        question: "Which property is used to change the background color of an element in CSS?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "bgcolor", correct: false },
            { text: "background", correct: false }
        ]
    },
    {
        question: "How do you select an element with the ID 'header' in CSS?",
        answers: [
            { text: "#header", correct: true },
            { text: "header", correct: false },
            { text: ".header", correct: false },
            { text: "*header", correct: false }
        ]
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        answers: [
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false },
            { text: "push()", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect)
    {
        selectBtn.classList.add("correct");
        score++;

    }
    else
    {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score = ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Start Again';
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();




