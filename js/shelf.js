const book1ImgLink = document.querySelector(".reading-book:first-child img");
const book2ImgLink = document.querySelector(".reading-book:nth-child(2) img");
const book3ImgLink = document.querySelector(".reading-book:last-child img");

function goToBookMain(event) {
    const link = event.target.id;
    const a = document.createElement("a");
    a.href = link;
    a.click();
}

if (book1ImgLink) {
    book1ImgLink.addEventListener("click", goToBookMain);
}
if (book2ImgLink) {
    book2ImgLink.addEventListener("click", goToBookMain);
}
if (book3ImgLink) {
    book3ImgLink.addEventListener("click", goToBookMain);
}