// Left Btn, Right Btn
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

// Book1 Mission0, 6
const img1_0_0 = document.querySelector("#m1-0-0");
const img1_0_1 = document.querySelector("#m1-0-1");
const img1_0_2 = document.querySelector("#m1-0-2");
const img1_0_3 = document.querySelector("#m1-0-3");

const img1_6_0 = document.querySelector("#m1-6-0");
const img1_6_1 = document.querySelector("#m1-6-1");
const img1_6_2 = document.querySelector("#m1-6-2");
const img1_6_3 = document.querySelector("#m1-6-3");
const img1_6_4 = document.querySelector("#m1-6-4");

const REMOVE_CONTENT = "removeContent";

function clickLeft_InspectClassName() {
    if (document.title === "들어가기 - 처음 만나는 현대미술") {
        if (img1_0_1.className === "") {
            showImg1_0_0();
        } else if (img1_0_2.className === "") {
            showImg1_0_1();
        } else if (img1_0_3.className === "") {
            showImg1_0_2();
        }
    } else if (document.title === "미션#6 - 처음 만나는 현대미술") {
        if (img1_6_1.className === "") {
            showImg1_6_0();
        } else if (img1_6_2.className === "") {
            showImg1_6_1();
        } else if (img1_6_3.className === "") {
            showImg1_6_2();
        } else if (img1_6_4.className === "") {
            showImg1_6_3();
        }
    }
}
function clickRight_InspectClassName() {
    if (document.title === "들어가기 - 처음 만나는 현대미술") {
        if (img1_0_0.className === "") {
            showImg1_0_1();
        } else if (img1_0_1.className === "") {
            showImg1_0_2();
        } else if (img1_0_2.className === "") {
            showImg1_0_3();
        }
    } else if (document.title === "미션#6 - 처음 만나는 현대미술") {
        if (img1_6_0.className === "") {
            showImg1_6_1();
        } else if (img1_6_1.className === "") {
            showImg1_6_2();
        } else if (img1_6_2.className === "") {
            showImg1_6_3();
        } else if (img1_6_3.className === "") {
            showImg1_6_4();
        }
    }
}

function hideAllImg() {
    if (document.title === "들어가기 - 처음 만나는 현대미술") {
        img1_0_0.classList.add(REMOVE_CONTENT);
        img1_0_1.classList.add(REMOVE_CONTENT);
        img1_0_2.classList.add(REMOVE_CONTENT);
        img1_0_3.classList.add(REMOVE_CONTENT);
    } else if (document.title === "미션#6 - 처음 만나는 현대미술") {
        img1_6_0.classList.add(REMOVE_CONTENT);
        img1_6_1.classList.add(REMOVE_CONTENT);
        img1_6_2.classList.add(REMOVE_CONTENT);
        img1_6_3.classList.add(REMOVE_CONTENT);
        img1_6_4.classList.add(REMOVE_CONTENT);
    }
}

function showImg1_0_0() {
    hideAllImg();
    img1_0_0.classList.remove(REMOVE_CONTENT);
}
function showImg1_0_1() {
    hideAllImg();
    img1_0_1.classList.remove(REMOVE_CONTENT);
}
function showImg1_0_2() {
    hideAllImg();
    img1_0_2.classList.remove(REMOVE_CONTENT);
}
function showImg1_0_3() {
    hideAllImg();
    img1_0_3.classList.remove(REMOVE_CONTENT);
}

function showImg1_6_0() {
    hideAllImg();
    img1_6_0.classList.remove(REMOVE_CONTENT);
}
function showImg1_6_1() {
    hideAllImg();
    img1_6_1.classList.remove(REMOVE_CONTENT);
}
function showImg1_6_2() {
    hideAllImg();
    img1_6_2.classList.remove(REMOVE_CONTENT);
}
function showImg1_6_3() {
    hideAllImg();
    img1_6_3.classList.remove(REMOVE_CONTENT);
}
function showImg1_6_4() {
    hideAllImg();
    img1_6_4.classList.remove(REMOVE_CONTENT);
}

if (leftBtn) {
    leftBtn.addEventListener("click", clickLeft_InspectClassName);
}
if (rightBtn) {
    rightBtn.addEventListener("click", clickRight_InspectClassName);
}