const typed = new Typed(".text2", {
  strings: ["Frontend Developer", "Web developer"],
  typeSpeed: 50,
  backSpeed: 100,
  smartBackspace: true,
  backDelay: 1000,
  loop: true,
});
const contact = document.querySelector("#contact");

contact.addEventListener("click", () => {
  alert("+998200026592");
});
const btnBox = document.querySelector(".btn-box");
const readMore = document.querySelector(".text3");

btnBox.addEventListener("click", (e) => {
  readMore.classList.toggle("show-more");
  if (btnBox.innerText === "Read more") {
    btnBox.innerText = "Read less";
  } else {
    btnBox.innerText = "Read more";
  }
});
const btnBox1 = document.querySelector(".btn-box2");
const readMore1 = document.querySelector(".text4");

btnBox1.addEventListener("click", (e) => {
  readMore1.classList.toggle("show_more");
  if (btnBox1.innerText === "More about Me") {
    btnBox1.innerText = "Less about Me";
  } else {
    btnBox1.innerText = "More about Me";
  }
});

// Text area send to telegram bot

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text1 = document.getElementById("name1");
  const text2 = document.getElementById("email1");
  const text3 = document.getElementById("subject1");
  const textArea = document.getElementById("textarea1");
  const submid = document.querySelector(".btn");
  const my_text = `Result is:%0A -<b>Name:</b><i><b>${text1.value}</b></i>%0A -<b>Email:</b><i><b>${text2.value}</b></i>%0A - <b>tel:</b><i><b>${text3.value}</b></i>%0A-<b>Text:</b><i><strong>${textArea.value}</strong></i>`;

  const token = "6954485201:AAHT1JIMUtDZ2MeTBY5GQfrjysHpeOVBp0U";
  const chat_id = -4062509149;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
  console.log("message successfully sended");

  e.target.reset();
});
