//top버튼 만들기

let btt = document.getElementById("back-to-top"),
  docElem = document.documentElement, //documentElement는 다큐먼트 자체를 가져온다.
  offset,
  scrollPos,
  docHeight;

//문서 높이 구하기

docHeight = docElem.scrollHeight; // 문서 자체 높이를 docHeight에 넣어준다.
if (docHeight !== 0) {
  offset = docHeight / 1.5;
}

//스크롤 이벤트 만들기

window.addEventListener("scroll", function () {
  scrollPos = docElem.scrollTop;
  btt.className = scrollPos > offset ? "visible" : "";

  /* if문을 이런식으로 줄인다.
    if(scrollPos > offset){
        btt.className = 'visible';
    }else{
        btt.className = '';
    }
    */
});

// 클릭하면 천천히 스크롤 만들기

btt.addEventListener("click", function (ev) {
  ev.preventDefault(); //`ev`를 통해서 전에 있던 링크속성을 가져오고 `.preventDefault`를 통해 속성을 막는다.
  // docElem.scrollTop = 0;
  scrollToTop();
});

function scrollToTop() {
  // 일정시간 마다 할 일 = setInterval(할 일,시간)
  // 할 일 = function(){실제로 할 일}
  // 윈도우 스크롤이 0이 아닐때  window.scrollBy(0,-55);
  // 스크롤 0이면 setInterval을 멈춰야 한다 = clearInterval(멈추려는 이름)
  let scrollInterval = setInterval(function () {
    if (scrollPos !== 0) {
      window.scrollBy(0, -100);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
