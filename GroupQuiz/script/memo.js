const datas = JSON.parse(localStorage.getItem("places")); //로컬스토리지에 있는 object를 JSON으로 파싱해오고 datas로 전달
let item = "";
if (datas != null) {
  //전달값이 있을 경우
  //document.getElementById("content-box").innerText = datas;
  for (let i = 0; i < datas.length; i++) {
    //로컬스토리지 길이만큼 받아오기
    let id = datas[i].id;
    let color = datas[i].color;
    let name = datas[i].name;
    let addr = datas[i].addr;
    let lat = datas[i].lat;
    let lng = datas[i].lng;

    let contents = "";

    console.log(color + " " + id);
    switch (color) {
      case "gray":
        item = getAdd("gray", id, name, addr, lat, lng);
        console.log(item);
        contents = document.getElementsByClassName("dropzone")[0];
        contents.innerHTML += item;
        break;
      case "green":
        item = getAdd("green", id, name, addr, lat, lng);

        contents = document.getElementsByClassName("dropzone")[1];
        contents.innerHTML += item;
        break;
      case "blue":
        item = getAdd("blue", id, name, addr, lat, lng);

        contents = document.getElementsByClassName("dropzone")[2];
        contents.innerHTML += item;
        break;
      case "yellow":
        item = getAdd("yellow", id, name, addr, lat, lng);

        contents = document.getElementsByClassName("dropzone")[3];
        contents.innerHTML += item;
        break;
      default:
        console.log("잘못입력");
    }
  }
}

function getAdd(color, id, name, addr, lat, lng) {
  return (item = `<div class="content-box ${color} id${id}" draggable="true"> 
      <div class="name">
        <p class="place_name">${name}</p>
      </div>
      <div class="addr">
        <p class="addr_name">${addr}</p>
      </div>
      <div class="lat">
        <p class="lat">${Number(lat).toFixed(2)}</p>
      </div>
      <div class="lng">
        <p class="lng">${Number(lng).toFixed(2)}</p>
      </div>
    </div>`);
}
//드래그앤드롭 시작

window.onload = function () {
  var cards = document.querySelectorAll(".content-box"); //.card를 가진 elements 배열
  var dropzones = document.querySelectorAll(".dropzone"); //.dropzone을 가진 elements 배열

  cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("drag", drag); // drag 여러번 발생
    card.addEventListener("dragend", dragEnd);
  });

  /*---------- .card : Drag 요소 함수들 ----------*/
  function dragStart() {
    //console.log("카드 : dragstart" );
    dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

    // this = card
    this.classList.add("is-dragging");
  }

  function drag() {
    //console.log("카드 : dragging" );
    // this = card
  }

  function dragEnd() {
    console.log("카드 : drag end");
    dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
    this.classList.remove("is-dragging");
    let newColor = this.parentNode.classList[1];
    let oldColor = this.classList[1];
    console.log("새로운색:" + newColor);
    console.log("원래색:" + oldColor);
    this.classList.replace(oldColor, newColor);

    let totaldata = JSON.parse(localStorage.getItem("places"));
    //console.log(totaldata);
    console.log(this.classList);
    console.log("번호 : " + this.classList[2].substring(2)); //id0 중 0출력
    let id = this.classList[2].substring(2); //id의 값

    for (let index in totaldata) {
      if (totaldata[index].id == id) {
        //스토리지의 값
        totaldata[index].color = newColor;

        localStorage.setItem("places", JSON.stringify(totaldata));
      }
    }
  }

  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragenter", dragEnter);
    dropzone.addEventListener("dragover", dragOver); // dragOver 여러번 발생
    dropzone.addEventListener("dragleave", dragLeave);
    dropzone.addEventListener("drop", drop);
  });

  /*---------- .dropzone : Drop 요소 함수들 ----------*/

  function dragEnter() {
    //console.log("드랍 : dragEnter");
    //this = dropzone
  }

  function dragOver(event) {
    event.preventDefault(); // 이 부분을 추가해야 drop 이벤트가 발생합니다.
    //console.log("드랍 : dragOver");
    //this = dropzone
    //console.log(this);
    this.classList.add("dragover");

    var cardOn = document.querySelector(".is-dragging"); // drag중인 단일 card

    this.appendChild(cardOn);
  }

  function dragLeave() {
    //console.log("드랍 : dragLeave");
    this.classList.remove("dragover");

    //this = dropzone
  }

  function drop() {
    //console.log("드랍 : drop");
    //this = dropzone
    this.classList.remove("dragover");
  }
};
