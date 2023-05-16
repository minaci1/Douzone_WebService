const content = "안녕하세요.\n제 이름은 손민아 입니다. \n반갑습니다~!!";
const text = document.getElementById("dynamic");
let index = 0;
let txt = "";

function typing() {
  if (index < content.length) {
    txt += content[index];
    text.innerText = txt;
    index++;
  }
}
setInterval(typing, 320);
