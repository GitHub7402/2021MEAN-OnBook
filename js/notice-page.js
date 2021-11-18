const noticePageModal1 = document.querySelector("#noticePageModal1");
const noticePageModal2 = document.querySelector("#noticePageModal2");
const noticePageModal3 = document.querySelector("#noticePageModal3");

function goToNextPage1() {
    const a = document.createElement("a");
    a.href = "book1-mission4.html";
    a.click();
}
function goToNextPage2() {
    const a = document.createElement("a");
    a.href = "book2-mission4.html";
    a.click();
}
function goToNextPage3() {
    const a = document.createElement("a");
    a.href = "book3-mission3.html";
    a.click();
}

if (noticePageModal1) {
    noticePageModal1.addEventListener("click", goToNextPage1);
}
if (noticePageModal2) {
    noticePageModal2.addEventListener("click", goToNextPage2);
}
if (noticePageModal3) {
    noticePageModal3.addEventListener("click", goToNextPage3);
}