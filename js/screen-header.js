const backBtn = document.querySelector(".screen-header__column .fa-chevron-left");
const missionBtn = document.querySelector(".screen-header__column .fa-bars");

function goToBack() {
    window.history.back();
}

function goToMissions() {
    const a = document.createElement("a");
    missionBtn.appendChild(a);
    a.href = "missions.html";
    a.click();
}

backBtn.addEventListener("click", goToBack);

if (missionBtn) {
    missionBtn.addEventListener("click", goToMissions);
}