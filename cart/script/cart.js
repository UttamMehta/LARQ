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
        arr[i].nu = el.nu;
        localStorage.setItem("cart", JSON.stringify(arr));
        cart(arr);
      }, 500);
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

  let m = ` <div>
  <h4>Sub Total</h4>
</div>
<div>
  <p>${p}</p>
</div>
`;

  document.getElementById("totalprice").innerHTML = m;
}