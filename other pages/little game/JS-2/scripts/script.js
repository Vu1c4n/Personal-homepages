//点此变色
let button2 = document.querySelector("h1");

function bianSe() {
  let changedColor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = changedColor;
}

button2.onclick = bianSe;

//备忘录
let anNiu = document.querySelectorAll("button");

function zengJiaXinXi() {
  let newDuanLuo = document.createElement("p");
  let issue = prompt("enter what you want to add");
  if (issue === null) {
    alert("请输入有效信息");
  } else if (issue === "") {
    alert("请输入有效信息");
  } else if (issue === "今天没事") {
    newDuanLuo.textContent = "那你说你ma呢";
    document.body.appendChild(newDuanLuo);
  } else {
    newDuanLuo.textContent = "★" + issue;
    document.body.appendChild(newDuanLuo);
  }
}

for (let i = 0; i < anNiu.length; i++) {
  anNiu[i].addEventListener("click", zengJiaXinXi);
}

//取随机数（？？
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//点击button1,2,3 实现 “点击后变色”（不知道啥情况，无法成功
function afterClick() {
  let divButtonsID = document.getElementById("btn1");
  divButtonsID.style.backgroundColor = "black";
}

let divButtons = document.querySelectorAll("div");

divButtons.addEventListener("click", afterClick);

//new
