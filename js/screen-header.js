const backBtn = document.querySelector(".screen-header__column");

function goToBack() {
    window.history.back();
}

backBtn.addEventListener("click", goToBack);