let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

usersData.push;
document.getElementById("submit").addEventListener("click", function () {
  event.preventDefault();
  let login_email = document.getElementById("login_email").value;
  let login_password = document.getElementById("login_password").value;
  let flag;

  if (login_email == "abc@gmail.com" && login_password == "1234") {
    window.location.href = "../pages/cart.html";
    localStorage.setItem("user_login", JSON.stringify(true));
    flag = true;
  }
  usersData.map(function (el, i) {
    if (login_email == el.email) {
      if (login_password == el.password) {
        flag = true;
        localStorage.setItem("user11", JSON.stringify(el));
        localStorage.setItem("user_login", JSON.stringify(true));
        window.location.href = "../pages/cart.html";
      }
    }
  });
  if (flag) {
    alert("Login success!");
  } else {
    alert("Login failure!");
  }
});

import navbar from "../../componenets/navbar.js";
import bottom from "../../componenets/bottom.js";

console.log(navbar);

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("bottom").innerHTML = bottom();
