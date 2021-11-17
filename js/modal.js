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
const notImplementedQuiz = document.querySelector("#not-implemented-quiz");

function goToStart() {
    afterStartingQuiz.classList.add("removeContent");
    notImplementedQuiz.classList.add("removeContent");
    beforeStartingQuiz.classList.remove("removeContent");
}
function clickRightBtn() {
    beforeStartingQuiz.classList.add("removeContent");
    afterStartingQuiz.classList.add("removeContent");
    notImplementedQuiz.classList.remove("removeContent");
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