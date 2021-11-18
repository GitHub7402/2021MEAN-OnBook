// Modal
const nameChangeModal = document.querySelector(".mission-preview__modal");
const nameChangeBtn = document.querySelector(".my-menu__name button");
const closeModalBtn = document.querySelector(".mission-preview__close");

function openModal() {
    nameChangeModal.classList.remove("removeContent");
}
function closeModal() {
    nameChangeModal.classList.add("removeContent");
}

if (nameChangeBtn) {
    nameChangeBtn.addEventListener("click", openModal);
}
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
}

// Greeting
const greetName = document.querySelector(".my-menu__name h3")
greetName.innerText = `${localStorage.getItem("username")}님, 안녕하세요😊`;

// Function of Change Name
const changeNameForm = document.querySelector(".modal__change-name-form");
const nameInput = document.querySelector(".modal__change-name-form input:first-child");

nameInput.placeholder = localStorage.getItem("username");

function changeName() {
    const changedName = nameInput.value;
    localStorage.setItem("username", changedName);
}

if (changeNameForm) {
    changeNameForm.addEventListener("submit", changeName);
}