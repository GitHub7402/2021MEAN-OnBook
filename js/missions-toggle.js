// missions.html toggle
const missionsTitle_book1 = document.querySelector(".missions__title--book1");
const missionsLinks_book1 = document.querySelector(".missions__links--book1");

function missionToggle_book1() {
    missionsLinks_book1.classList.toggle("removeContent");

}

missionsTitle_book1.addEventListener("click", missionToggle_book1);