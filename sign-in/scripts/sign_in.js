let usersData = JSON.parse(localStorage.getItem("usersData")) || [];
document.getElementById("submit").addEventListener("click", function () {
  let login_email = document.getElementById("login_email").value;
  let login_password = document.getElementById("login_password").value;
  let flag = false;
  usersData.map(function (el, i) {
    if (login_email == el.email) {
      if (login_password == el.password) {
        flag = true;
        localStorage.setItem("user", JSON.stringify(el));
        localStorage.setItem("user_login", true);
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
