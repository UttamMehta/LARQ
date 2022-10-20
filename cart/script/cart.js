import navbar from "../componenets/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import bottom from "../componenets/bottom.js";
document.getElementById("bottom").innerHTML = bottom();
// import bottom from "../../Navbar/componenets/bottom.js";
// document.getElementById("bottom").innerHTML = bottom();
// console.log(bottom());

let arr = JSON.parse(localStorage.getItem("cart")) || [];
// let wise = JSON.parse(localStorage.getItem("wises")) || [];
function cart(arr) {
  document.getElementById("main").innerHTML = "";
  arr.forEach((el, i) => {
    let s;
    if (el.size === "" || s === 0 || s === " ") s = "Excessior";
    let div1 = document.createElement("div");
    div1.id = "img";
    let img = document.createElement("img");
    img.src = el.img;
    img.alt = "Filter";
    div1.append(img);

    let div2 = document.createElement("div");
    div2.id = "addremove";
    let div3 = document.createElement("div");
    div3.id = "button";
    let h3 = document.createElement("h3");
    h3.innerText = el.title;

    let p = document.createElement("p");
    p.innerText = "Filter  : " + el.size;

    let bs = document.createElement("button");
    // bs.innerText = "sub";
    bs.innerHTML = `<span class="material-symbols-outlined">
    remove
    </span>`;
    bs.id = "sub";
    bs.addEventListener("click", () => {
      if (+el.nu > 1) el.nu = +el.nu - 1;
      arr[i].nu = el.nu;
      localStorage.setItem("cart", JSON.stringify(arr));
      cart(arr);
    });

    let inp = document.createElement("input");
    inp.value = el.nu;
    inp.placeholder = "Quantity";
    inp.type = "number";
    inp.id = "inpok";
    let z;
    inp.addEventListener("input", () => {
      if (z) clearTimeout(z);
      z = setTimeout(() => {
        let k = document.querySelectorAll("input");
        let k1;
        k.forEach((el, j) => {
          if (i == j) k1 = el;
        });
        console.log(k1.value);

        el.nu = +k1.value;
        if (+el.nu <= 0) el.nu = 1;
        arr[i].nu = el.nu;
        localStorage.setItem("cart", JSON.stringify(arr));
        cart(arr);
      }, 600);
    });

    let ba = document.createElement("button");
    // ba.innerText = "add";
    ba.innerHTML = `<span class="material-symbols-outlined">
    add
    </span>`;
    ba.id = "add";
    ba.addEventListener("click", () => {
      el.nu = +el.nu + 1;
      arr[i].nu = el.nu;
      localStorage.setItem("cart", JSON.stringify(arr));
      cart(arr);
    });

    div3.append(bs, inp, ba);

    div2.append(h3, p, div3);

    let div4 = document.createElement("div");
    div4.id = "deleteandprice";
    let bd = document.createElement("button");
    // bd.innerText = "delete";
    bd.innerHTML = `<span class="material-symbols-outlined">
    delete
    </span>`;
    bd.id = "del";
    bd.addEventListener("click", () => {
      arr.splice(i, 1);
      cart(arr);
      localStorage.setItem("cart", JSON.stringify(arr));
      check();
    });
    // let bw = document.createElement("button");
    // bw.innerText = "wish";
    // bw.addEventListener("click", () => {
    //   let m = el;
    //   arr.splice(i, 1);
    //   localStorage.setItem("cart", JSON.stringify(arr));
    //   cart(arr);
    //   wise.push(el);
    //   localStorage.setItem("wish", JSON.stringify(wise));
    //   wish(wise);
    // });
    //done for wishlist part

    let h4 = document.createElement("h4");
    h4.innerText = el.price * el.nu;
    h4.id = "price";

    let div5 = document.createElement("div");
    div5.append(bd);
    let div6 = document.createElement("div");
    div6.append(h4);

    // let div7 = document.createElement("div");
    // div7.append(bw);
    //done for wishlist

    div4.append(div5, div6);

    let div = document.createElement("div");
    div.append(div1, div2, div4);

    document.getElementById("main").append(div);
  });
  Total();
}
cart(arr);

function add(j) {
  arr.splice(j, 1);
  localStorage.setItem("cart", JSON.stringify(arr));
  cart(arr);
}

// function wish(wise) {
//   wise.forEach((el, i) => {       // done for wishlist
// console.log(el);
//   });
// }
// wish(wise);

function Total() {
  let div7 = document.createElement("div");
  let h5 = document.createElement("h5");
  h5.innerHTML = "Sub Total";

  let h = document.createElement("h4");
  let price = document.querySelectorAll("#price");
  let p = 0;

  for (let b of price) p = +b.innerText + p;
  console.log(p);
  localStorage.setItem("netamount", JSON.stringify(p));
  let m = ` <div>
  <h4>Sub Total</h4>
</div>
<div id="net">
  <p id="prices">${p}</p>
</div>
`;

  document.getElementById("totalprice").innerHTML = m;
}
var i = 0;
document.querySelector("#coupan").addEventListener("click", () => {
  i = +i + 1;
  console.log(i);

  document.getElementById(
    "applycoupan"
  ).innerHTML = `<input type="text" name="" id="inputcoupan"><button id="Apply">Promo Code</button>`;

  document.querySelector("#Apply").addEventListener("click", () => {
    let m = document.getElementById("prices").innerText;

    let g = +m * 0.1;

    let n = +m - g;
    g = Math.round(g * 100) / 100;
    // document.getElementById("prices").innerText = m;

    document.getElementById("applycoupan").innerHTML = "";
    localStorage.setItem("netamount", JSON.stringify(n));
    document.getElementById("totalprice").innerHTML = ` <div>
    <h4>Sub Total</h4>
</div>
<div id="net">
    <p id="prices">${m}</p>
</div>
<div>
    <h4>
        Discount 10%
    </h4>
</div>
<div>
    <p>
        -${g}
    </p>
</div>
<div>
    <h4>
        Net Amount
    </h4>
</div>
<div>
    <p>${n}</p>
</div>
<br>
<br>
<button id="checkout"> Checkout</button>
`;

    document.querySelector("#checkout").addEventListener("click", () => {
      // localStorage.setItem("user_login", JSON.stringify(true));
      event.preventDefault();
      let u = JSON.parse(localStorage.getItem("user_login")) || false;
      console.log(u);

      if (u === true) window.location.href = "./checkout.html";
      else window.location.href = "../sign-in/sign-in.html";
    });
  });
});

document.querySelector("#checkout").addEventListener("click", () => {
  // localStorage.setItem("user_login", JSON.stringify(true));
  event.preventDefault();
  let u = JSON.parse(localStorage.getItem("user_login")) || false;
  console.log(u);

  if (u === true) window.location.href = "./checkout.html";
  else window.location.href = "../sign-in/sign-in.html";
});

// if (i > 1) {
//   document.querySelector("#Apply").addEventListener("click", () => {
//     event.preventDefault();
//     console.log(i);
//     document.getElementById(
//       "applycoupan"
//     ).innerHTML = ` <button id="coupan">Apply Coupan</button>`;

//   });
// }

let interval = [
  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1642022866/assets/spa/navigation/v2/nav_larq_bottle.jpg",
  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1642022866/assets/spa/navigation/v2/nav_larq_bottle_filtered.jpg",
  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1642022866/assets/spa/navigation/v2/nav_larq_pitcher.jpg",
  "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1638225402/p1-hp-17-2-white-q/p1-hp-17-2-white-q.jpg",
  "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1638225405/p1-eg-17-2-white-q/p1-eg-17-2-white-q.jpg",
];

// const interval = [
//   "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1638225404/p1-eb-17-2-white-q/p1-eb-17-2-white-q.jpg",
//   "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1638225364/p1-ob-17-2-white-q/p1-ob-17-2-white-q.jpg",
//   "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1638225402/p1-mb-17-2-white-q/p1-mb-17-2-white-q.jpg",
//   "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1619383113/LARQ_Pitcher_MB_1/LARQ_Pitcher_MB_1.jpg",
//   "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1619383123/LARQ_Pitcher_PW_1/LARQ_Pitcher_PW_1.jpg",
//   "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1642182217/filtered-17-ob-3/filtered-17-ob-3.jpg",
// ];

let in1 = 0;
setInterval(() => {
  if (in1 === interval.length) in1 = 0;
  document.getElementById("interval").innerHTML = `<img src="${interval[in1]}"
  alt="" srcset="">`;
  in1++;
}, 2000);

function check() {
  let m = JSON.parse(localStorage.getItem("cart")) || [];
  if (m.length === 0) {
    console.log("abc");
    document.getElementById("flex").innerHTML = ` <h3>Your cart is empty</h3>`;
  }
}

check();
document.querySelector("#logo").addEventListener("click", () => {
  window.location.href = "../../index.html";
});

function logl() {
  window.location.href = "../../index.html";
}
