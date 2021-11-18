// Mission Preview Modal
const missionModal = document.querySelector(".mission-preview__modal");
const missionModalOpenBtn = document.querySelector(".mission-board-form__title button");

function openMissionModal() {
    missionModal.classList.remove("removeContent");
}
function closeMissionModal() {
    missionModal.classList.add("removeContent");
}

if (missionModalOpenBtn) {
    missionModalOpenBtn.addEventListener("click", openMissionModal);
}
if (missionModal) {
    missionModal.addEventListener("click", closeMissionModal);
}

// Mission Example Modal
const exampleModal = document.querySelector(".mission-example__modal");
const exampleModalOpenBtn = document.querySelector(".mission-board-form__title button:last-child");

function openExampleModal() {
    exampleModal.classList.remove("removeContent");
}
function closeExampleModal() {
    exampleModal.classList.add("removeContent");
}

if (exampleModalOpenBtn) {
    exampleModalOpenBtn.addEventListener("click", openExampleModal);
}
if (exampleModal) {
    exampleModal.addEventListener("click", closeExampleModal);
}

// Quiz Modal
const correctModal = document.querySelector("#correct-modal");
const wrongModal = document.querySelector("#wrong-modal");
const wrongAnswer1 = document.querySelector("#wrong-answer1");
const wrongAnswer2 = document.querySelector("#wrong-answer2");
const correctAnswer = document.querySelector("#correct-answer");

function removeModal() {
    correctModal.classList.add("removeContent");
    wrongModal.classList.add("removeContent");
}

function chooseCorrectAnswer() {
    correctModal.classList.remove("removeContent");
    setTimeout(removeModal, 3000);
}

function chooseWrongAnswer() {
    wrongModal.classList.remove("removeContent");
    setTimeout(removeModal, 3000);
}

if (wrongAnswer1) {
    wrongAnswer1.addEventListener("click", chooseWrongAnswer);
}
if (wrongAnswer2) {
    wrongAnswer2.addEventListener("click", chooseWrongAnswer);
}
if (correctAnswer) {
    correctAnswer.addEventListener("click", chooseCorrectAnswer);}
    
// Quiz Start Button
const quizStartBtn = document.querySelector("#quiz-start-btn");
const beforeStartingQuiz = document.querySelector("#beforeStartingQuiz");
const afterStartingQuiz = document.querySelector("#afterStartingQuiz");

function startQuiz() {
    beforeStartingQuiz.classList.add("removeContent");
    afterStartingQuiz.classList.remove("removeContent");
}

if (quizStartBtn) {
    quizStartBtn.addEventListener("click", startQuiz);
}

// Quiz Controller
const quizLeftBtn = document.querySelector("#quizLeftBtn");
const quizRightBtn = document.querySelector("#quizRightBtn");
const quizBackBtn = document.querySelector("#quizBackBtn");
const quizQuestionBtn = document.querySelector("#quizQuestionBtn");
const notImplementedQuiz = document.querySelector("#not-implemented-quiz");
const finishedQuiz = document.querySelector("#finished-quiz");

function goToStart() {
    afterStartingQuiz.classList.add("removeContent");
    if (notImplementedQuiz) {
       notImplementedQuiz.classList.add("removeContent");
    } else if (finishedQuiz) {
        finishedQuiz.classList.add("removeContent");
    }
    beforeStartingQuiz.classList.remove("removeContent");
}
function clickRightBtn() {
    beforeStartingQuiz.classList.add("removeContent");
    afterStartingQuiz.classList.add("removeContent");
    if (notImplementedQuiz) {
        notImplementedQuiz.classList.remove("removeContent");
    } else if (finishedQuiz) {
        finishedQuiz.classList.remove("removeContent");
    }
}
function goToQuestion() {
    if (notImplementedQuiz) {
        notImplementedQuiz.classList.add("removeContent");
    } else if (finishedQuiz) {
        finishedQuiz.classList.add("removeContent");
    }
    beforeStartingQuiz.classList.add("removeContent");
    afterStartingQuiz.classList.remove("removeContent");
}

if (quizLeftBtn) {
    quizLeftBtn.addEventListener("click", goToStart);
}
if (quizRightBtn) {
    quizRightBtn.addEventListener("click", clickRightBtn);
}
if (quizBackBtn) {
    quizBackBtn.addEventListener("click", goToStart);
}
if (quizQuestionBtn) {
    quizQuestionBtn.addEventListener("click", goToQuestion);
}