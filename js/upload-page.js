// Go To Upload Page
const uploadPageLink = document.querySelector(".mission-board-form__creation");

function goToUploadPage() {
    const a = document.createElement("a");
    a.href = "upload-page.html";
    a.click();
}

if (uploadPageLink) {
    uploadPageLink.addEventListener("click", goToUploadPage);
}

// Form Functions
const hashtagInput = document.querySelector("#hashtag");
const hashtagBtn = document.querySelector("#hashtagBtn");
const createdHashtags = document.querySelector(".created-hashtags");
const uploadBtn = document.querySelector(".upload-page__form--text");
const uploadBtnClicked = document.querySelector(".not-implemented-notice");

function createHashtag() {
    const hashtag = hashtagInput.value;
    const span = document.createElement("span");
    span.innerText = `#${hashtag}`;
    span.classList.add("created-hashtag");
    createdHashtags.appendChild(span);
}
function blockSubmit(event) {
    event.preventDefault();
    uploadBtnClicked.classList.remove("removeContent");
}

if (hashtagBtn) {
    hashtagBtn.addEventListener("click", createHashtag);
}
if (uploadBtn) {
    uploadBtn.addEventListener("submit", blockSubmit);
}