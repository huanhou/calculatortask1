let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const choiceInputs = [document.getElementById("choice1"), document.getElementById("choice2"), document.getElementById("choice3")];
const scoreElement = document.getElementById("score");

function addQuestion() {
    const question = questionText.value;
    const choices = choiceInputs.map(input => input.value);

    if (question && choices.every(choice => choice)) {
        const correctIndex = choices.findIndex((choice, index) => index === parseInt(document.querySelector('input[name="correct-choice"]:checked').value));

        const newQuestion = {
            question,
            choices,
            correctIndex
        };

        quizData.push(newQuestion);

        // Clear the form for the next question
        questionText.value = "";
        choiceInputs.forEach(input => input.value = "");
        document.querySelector('input[name="correct-choice"]:checked').checked = false;

        updateScore();
        showQuestion();
    } else {
        alert("Please fill in all fields and select the correct answer.");
    }
}

function showQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;

        currentQuestion.choices.forEach((choice, index) => {
            choiceInputs[index].value = choice;
        });
    } else {
        endQuiz();
    }
}

function checkAnswer() {
    const currentQuestion = quizData[currentQuestionIndex];

    const selectedChoice = document.querySelector('input[name="user-choice"]:checked');
    if (selectedChoice) {
        const choiceIndex = parseInt(selectedChoice.value);

        if (choiceIndex === currentQuestion.correctIndex) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            endQuiz();
        }

        updateScore();
    } else {
        alert("Please select an answer before checking.");
    }
}

function updateScore() {
    scoreElement.textContent = score;
}

function endQuiz() {
    alert(`Quiz completed!\nYour final score is ${score}`);
}

// Initialize the first question
showQuestion();
