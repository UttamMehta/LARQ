let arr = JSON.parse(localStorage.getItem("cart")) || [];

function cart() {
  document.getElementById("main").innerHTML = "";
  arr.forEach((el, i) => {
    let s;
    if (el.size == "") s = "Excessior";
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
    bs.innerText = "sub";
    bs.addEventListener("click", () => {
      if (+el.nu > 1) el.nu = +el.nu - 1;
      cart(arr);
    });

    let inp = document.createElement("input");
    inp.value = el.nu;
    inp.placeholder = "Quantity";
    inp.type = "number";

    let ba = document.createElement("button");
    ba.innerText = "add";
    ba.addEventListener("click", () => {
      el.nu = +el.nu + 1;
      arr[i].nu = el.nu;
      localStorage.setItem("cart", JSON.stringify(arr));
      cart(arr);
    });

    div3.append(bs, inp, ba);

    // let div7 = document.createElement("div");
    // div7.append(h3, p, div3);

    div2.append(h3, p, div3);

    let div4 = document.createElement("div");
    div4.id = "deleteandprice";
    let bd = document.createElement("button");
    bd.innerText = "delete";
    bd.addEventListener("click", () => {
      arr.splice(i, 1);
      cart(arr);
    });

    let h4 = document.createElement("h4");
    h4.innerText = el.price * el.nu;

    let div5 = document.createElement("div");
    div5.append(bd);
    let div6 = document.createElement("div");
    div6.append(h4);
    div4.append(div5, div6);

    let div = document.createElement("div");
    div.append(div1, div2, div4);

    document.getElementById("main").append(div);
  });
}
cart(arr);

function add(j) {
  arr.splice(j, 1);
  localStorage.setItem("cart", JSON.stringify(arr));
  cart(arr);
}
