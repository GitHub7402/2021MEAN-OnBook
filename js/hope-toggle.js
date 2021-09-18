// hope.html like toggle
const applyBtn1 = document.querySelector("#applyBtn1");
const applyBtn2 = document.querySelector("#applyBtn2");
const applyBtn3 = document.querySelector("#applyBtn3");

function changeColor(event) {
    if (event.target.children[0]) {
        event.target.children[0].classList.toggle("applyHeartColor");
    } else {
        event.target.classList.toggle("applyHeartColor");
    }
    
}

applyBtn1.addEventListener("click", changeColor);
applyBtn2.addEventListener("click", changeColor);
applyBtn3.addEventListener("click", changeColor);