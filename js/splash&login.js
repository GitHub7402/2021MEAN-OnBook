const splashImg = document.querySelector("img");
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const link = document.querySelector("a");

const REMOVE_CONTENT = "removeContent";

function removeSplashImg() {
    splashImg.classList.add(REMOVE_CONTENT);
    if (localStorage.getItem("username")) {
        link.click();
    } else {
    loginForm.classList.remove(REMOVE_CONTENT);
    }
}

function login(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem("username", username);    
    if (localStorage.getItem("username") === "") {
    } else {
        link.click();
    }
}

setTimeout(removeSplashImg, 1700);
loginBtn.addEventListener("click", login);