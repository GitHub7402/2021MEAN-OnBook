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

