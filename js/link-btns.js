const book1IntroLink = document.querySelector(".book-main img");

function goToBook1Intro() {
    const a = document.createElement("a");
    a.href = "book1-intro.html";
    document.body.appendChild(a);
    a.click();
}

if(book1IntroLink) {
    book1IntroLink.addEventListener("click", goToBook1Intro);
}