// hope.html like toggle w)modal
const applyBtn1 = document.querySelector("#applyBtn1");
const applyBtn2 = document.querySelector("#applyBtn2");
const applyBtn3 = document.querySelector("#applyBtn3");
const applyModal = document.querySelector(".apply-modal");

const APPLIED = "applied";
const NOT_APPLIED = "notApplied";
const A1 = "application1";
const A2 = "application2";
const A3 = "application3";

if (localStorage.getItem(A1) === APPLIED) {
    applyBtn1.children[0].classList.add("applyHeartColor");
}
if (localStorage.getItem(A2) === APPLIED) {
    applyBtn2.children[0].classList.add("applyHeartColor");
}
if (localStorage.getItem(A3) === APPLIED) {
    applyBtn3.children[0].classList.add("applyHeartColor");
}

function changeColor(event) {
    if (event.target.children[0]) {
        event.target.children[0].classList.toggle("applyHeartColor");
    } else {
        event.target.classList.toggle("applyHeartColor");
    }
}

function removeModal() {
    applyModal.classList.add("removeContent");
}

function showModal() {
    applyModal.classList.remove("removeContent");
    setTimeout(removeModal, 3000);
}

function clickApplyBtn1(event) {
  if (localStorage.getItem(A1) === null)  {
      localStorage.setItem(A1, APPLIED);
      showModal();
    } else if (localStorage.getItem(A1) === NOT_APPLIED) {
        localStorage.setItem(A1, APPLIED);
        showModal();
    } else if (localStorage.getItem(A1) === APPLIED) {
        localStorage.setItem(A1, NOT_APPLIED);
    }
    changeColor(event);
}

function clickApplyBtn2(event) {
  if (localStorage.getItem(A2) === null)  {
      localStorage.setItem(A2, APPLIED);
      showModal();
    } else if (localStorage.getItem(A2) === NOT_APPLIED) {
        localStorage.setItem(A2, APPLIED);
        showModal();
    } else if (localStorage.getItem(A2) === APPLIED) {
        localStorage.setItem(A2, NOT_APPLIED);
    }
    changeColor(event);
}

function clickApplyBtn3(event) {
  if (localStorage.getItem(A3) === null)  {
      localStorage.setItem(A3, APPLIED);
      showModal();
    } else if (localStorage.getItem(A3) === NOT_APPLIED) {
        localStorage.setItem(A3, APPLIED);
        showModal();
    } else if (localStorage.getItem(A3) === APPLIED) {
        localStorage.setItem(A3, NOT_APPLIED);
    }
    changeColor(event);
}

if (applyBtn1) {
    applyBtn1.addEventListener("click", clickApplyBtn1);
}
if (applyBtn2) {
    applyBtn2.addEventListener("click", clickApplyBtn2);
}
if (applyBtn3) {
    applyBtn3.addEventListener("click", clickApplyBtn3);
}

// missions.html toggle
const missionsTitle_book1 = document.querySelector(".missions__title--book1");
const missionsLinks_book1 = document.querySelector(".missions__links--book1");

function missionToggle_book1() {
    missionsLinks_book1.classList.toggle("removeContent");

}

if (missionsTitle_book1) {
    missionsTitle_book1.addEventListener("click", missionToggle_book1);
}