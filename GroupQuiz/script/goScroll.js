let aBtn = document.getElementById("about");
let gBtn = document.getElementById("goal");
let cBtn = document.getElementById("contact");

aBtn.addEventListener("click", function (ev) {
  ev.preventDefault(); //ev.preventDefault(); //`ev`를 통해서 전에 있던 링크속성을 가져오고 `.preventDefault`를 통해 속성을 막는다.
  document
    .getElementById("about")
    .scrollIntoView({ behavior: "smooth", block: "start" }); // 부드럽게 스크롤하기 .요소 시작부터 위치하게 스크롤하기
});
gBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  document
    .getElementById("goal")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});
cBtn.addEventListener("click", function (ev) {
  //ev.preventDefault();
  document
    .getElementById("contact")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});
