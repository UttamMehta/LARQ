import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import bottom from "../component/bottom.js";
document.getElementById("main").innerHTML = bottom();

document.addEventListener("click", logo);

function logo() {
  console.log("10");
  window.location.href = "../index.html";
}
