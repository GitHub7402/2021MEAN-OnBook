// Book1 Mission1
const img1_0_0 = document.querySelector("#m1-0-0");
const img1_0_1 = document.querySelector("#m1-0-1");
const img1_0_2 = document.querySelector("#m1-0-2");
const img1_0_3 = document.querySelector("#m1-0-3");

const REMOVE_CONTENT = "removeContent";

function checkImg1(event) {
    const imgId = event.target.id;
    changeImg1(imgId);
}

function changeImg1(imgId) {
    if (imgId === "m1-0-0") {
        img1_0_0.classList.add(REMOVE_CONTENT);
        img1_0_1.classList.remove(REMOVE_CONTENT);
    } else if (imgId === "m1-0-1") {
        img1_0_1.classList.add(REMOVE_CONTENT);
        img1_0_2.classList.remove(REMOVE_CONTENT);
    } else if (imgId === "m1-0-2") {
        img1_0_2.classList.add(REMOVE_CONTENT);
        img1_0_3.classList.remove(REMOVE_CONTENT);
    }
}

if (img1_0_0) {
    img1_0_0.addEventListener("click", checkImg1);
}
if (img1_0_1) {
    img1_0_1.addEventListener("click", checkImg1);
}
if (img1_0_2) {
    img1_0_2.addEventListener("click", checkImg1);
}

// Book1 Mission6
const img6_0_0 = document.querySelector("#m6-0-0");
const img6_0_1 = document.querySelector("#m6-0-1");
const img6_0_2 = document.querySelector("#m6-0-2");
const img6_0_3 = document.querySelector("#m6-0-3");
const img6_0_4 = document.querySelector("#m6-0-4");

function checkImg6(event) {
    const imgId = event.target.id;
    changeImg6(imgId);
}

function changeImg6(imgId) {
    if (imgId === "m6-0-0") {
        img6_0_0.classList.add(REMOVE_CONTENT);
        img6_0_1.classList.remove(REMOVE_CONTENT);
    } else if (imgId === "m6-0-1") {
        img6_0_1.classList.add(REMOVE_CONTENT);
        img6_0_2.classList.remove(REMOVE_CONTENT);
    } else if (imgId === "m6-0-2") {
        img6_0_2.classList.add(REMOVE_CONTENT);
        img6_0_3.classList.remove(REMOVE_CONTENT);
    } else if (imgId === "m6-0-3") {
        img6_0_3.classList.add(REMOVE_CONTENT);
        img6_0_4.classList.remove(REMOVE_CONTENT);
    }
}

if (img6_0_0) {
    img6_0_0.addEventListener("click", checkImg6);
}
if (img6_0_1) {
    img6_0_1.addEventListener("click", checkImg6);
}
if (img6_0_2) {
    img6_0_2.addEventListener("click", checkImg6);
}
if (img6_0_3) {
    img6_0_3.addEventListener("click", checkImg6);
}

// Book2 Mission0 (Quiz)
