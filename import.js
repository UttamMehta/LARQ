import navbar from "./componenets/navbar.js";
import bottom from "./componenets/bottom.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("bottom").innerHTML = bottom();
console.log(navbar());

// document.querySelector(
//   "#ship"
// ).innerHTML = `<a href="./cart.html" ><span class="material-symbols-outlined">
// shopping_cart
// </span></a>`;
