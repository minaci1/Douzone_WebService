let slides = document.querySelector(".goal-boxes"),
  // `slides`는 left값을 바꿔줄 용도.
  slide = document.querySelectorAll(".goal-boxes li"),
  currentIdx = 0,
  // 버튼을 눌렀을 때 순서를 만들어줘야 함.
  slideCount = slide.length,
  // 마지막인지 구분하기 위해 개수도 있어야 함.
  slideWidth = 300,
  slideMargin = 30,
  prevBtn = document.getElementById("prev"),
  // 이전 버튼
  nextBtn = document.getElementById("next");
// 다음 버튼

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px";
// 슬라이드의 width에 margin값을 더한거에 슬라이드의 개수를 곱한다음 마지막 마진크기를 빼줌.
// 문자열로 `px`을 붙여줘야 함.

function moveSlide(num) {
  slides.style.left = -num * 330 + "px";
  // 슬라이드의 left값을 330씩 옆으로 움직여야 함.
  // -num을 해줘야 오른쪽에서 왼쪽으로 이동 가능.

  currentIdx = num;
}

nextBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  nextBtnClick();
});

prevBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  prevBtnClick();
});

function nextBtnClick() {
  if (currentIdx < slideCount - 3) {
    moveSlide(currentIdx + 1);
    console.log(currentIdx);
  } else {
    moveSlide(0);
  }
}

function prevBtnClick() {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
    console.log(currentIdx);
  } else {
    moveSlide(slideCount - 3);
  }
}
