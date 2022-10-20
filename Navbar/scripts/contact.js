import navbar from "../componenets/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import bottom from "../componenets/bottom.js";
document.getElementById("main").innerHTML = bottom();

document.querySelector("#logo").addEventListener("click", logo);

function logo() {
  console.log("10");
  window.location.href = "../index.html";
}
