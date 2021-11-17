// Book1 Main Img-Link
const book1IntroLink = document.querySelector("#book1-main img");

function goToBook1Intro() {
    const a = document.createElement("a");
    a.href = "book1-intro.html";
    document.body.appendChild(a);
    a.click();
}

if(book1IntroLink) {
    book1IntroLink.addEventListener("click", goToBook1Intro);
}

// Book2 Main Img-Link
const book2Mission0Link = document.querySelector("#book2-main img");

function goToBook2Mission0() {
    const a = document.createElement("a");
    a.href = "book2-mission0.html";
    document.body.appendChild(a);
    a.click();
}

if (book2Mission0Link) {
    book2Mission0Link.addEventListener("click", goToBook2Mission0);
}

// Book1 Mission1 Board -> comment Link
const book1Mission1Post = document.querySelector(".user-post");

function goToBook1Mission1Link() {
    const a = document.createElement("a");
    a.href = "book1-mission1-board-comment.html";
    a.click();
}

if (book1Mission1Post) {
    book1Mission1Post.addEventListener("click", goToBook1Mission1Link);
}