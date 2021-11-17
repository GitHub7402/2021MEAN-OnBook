const missionBoardToggleBtn1 = document.querySelector("#missionBoardToggleBtn1");
const missionBoardToggleContent1 = document.querySelector("#missionBoardToggleContent1");
const missionBoardToggleUpBtn1 = document.querySelector("#missionBoardToggleUpBtn1");
const missionBoardToggleDownBtn1 = document.querySelector("#missionBoardToggleDownBtn1");

const missionBoardToggleBtn2 = document.querySelector("#missionBoardToggleBtn2");
const missionBoardToggleContent2 = document.querySelector("#missionBoardToggleContent2");
const missionBoardToggleUpBtn2 = document.querySelector("#missionBoardToggleUpBtn2");
const missionBoardToggleDownBtn2 = document.querySelector("#missionBoardToggleDownBtn2");

const missionBoardToggleBtn3 = document.querySelector("#missionBoardToggleBtn3");
const missionBoardToggleContent3 = document.querySelector("#missionBoardToggleContent3");
const missionBoardToggleUpBtn3 = document.querySelector("#missionBoardToggleUpBtn3");
const missionBoardToggleDownBtn3 = document.querySelector("#missionBoardToggleDownBtn3");

function missionBoardToggle1() {
    missionBoardToggleContent1.classList.toggle("removeContent");
    missionBoardToggleUpBtn1.classList.toggle("removeContent");
    missionBoardToggleDownBtn1.classList.toggle("removeContent");
}
function missionBoardToggle2() {
    missionBoardToggleContent2.classList.toggle("removeContent");
    missionBoardToggleUpBtn2.classList.toggle("removeContent");
    missionBoardToggleDownBtn2.classList.toggle("removeContent");
}
function missionBoardToggle3() {
    missionBoardToggleContent3.classList.toggle("removeContent");
    missionBoardToggleUpBtn3.classList.toggle("removeContent");
    missionBoardToggleDownBtn3.classList.toggle("removeContent");
}

if (missionBoardToggleBtn1) {
    missionBoardToggleBtn1.addEventListener("click", missionBoardToggle1);
}
if (missionBoardToggleBtn2) {
    missionBoardToggleBtn2.addEventListener("click", missionBoardToggle2);
}
if (missionBoardToggleBtn3) {
    missionBoardToggleBtn3.addEventListener("click", missionBoardToggle3);
}