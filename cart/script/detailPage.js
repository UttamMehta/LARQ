const obj = {
  id: 1,
  items: "bottle",
  title: "LARQ Pitcher PureVis™",
  disc: "The LARQ Pitcher uses a unique 2-step process to improve the quality of your water using PureVis™ and Nano Zero filter technology–giving you fresh-tasting water sip after sip.",
  disc1:
    "*Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles.",
  img: {
    blue: [
      "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1619383113/LARQ_Pitcher_MB_1/LARQ_Pitcher_MB_1.jpg",
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_600,h_600,c_fill/v1616256067/assets/spa/v2/content/product/lifestyle/pitcher/1.jpg",
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_600,h_600,c_fill/v1616256065/assets/spa/v2/content/product/lifestyle/pitcher/2.jpg",
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_600,h_600,c_fill/v1616256065/assets/spa/v2/content/product/lifestyle/pitcher/5.jpg",
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_600,h_600,c_fill/v1616256065/assets/spa/v2/content/product/lifestyle/pitcher/7.jpg",
    ],
    white: [
      "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1619383123/LARQ_Pitcher_PW_1/LARQ_Pitcher_PW_1.jpg",
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_1000/v1616253209/assets/spa/v2/content/product/how-to-use/pitcher/1.jpg",
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_1000/v1616253209/assets/spa/v2/content/product/how-to-use/pitcher/2.jpg",
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_1000/v1616253209/assets/spa/v2/content/product/how-to-use/pitcher/3.jpg",
      "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1619383128/LARQ_Pitcher_PW_2/LARQ_Pitcher_PW_2.jpg",
    ],
  },
  rating: [],
  size: {
    first: "500ml",
    second: "700ml",
  },
  price: {
    "500ml": 500,
    "700ml": 750,
  },
};
let p, s;
if (obj.items !== "bottle") {
  p = obj.price;
  s = 0;
} else {
  p = obj.price[obj.size.first];
  s = obj.size.first;
}

let ob = {
  id: obj.id,
  size: s,
  price: p,
  title: obj.title,
  color: "blue",
  img: obj.img.blue[0],
  nu: 1,
};
let ar = JSON.parse(localStorage.getItem("cart")) || [];
let i1 = obj.img.blue;
const show = (i) => {
  let im = `<img src="${i[0]}" alt="bottle">`;
  document.getElementById("img_u").innerHTML = im;

  const j = `<h2>${obj.title}</h2>`;
  document.getElementById("title").innerHTML = j;

  document.getElementById("size1").innerText = obj.size.first;
  document.getElementById("size2").innerText = obj.size.second;

  let value = obj.size.first;
  const k = `<p>€${obj.price[value]}.00</p>`;
  document.getElementById("price").innerHTML = k;

  let z = `<img src=${i[1]}
  alt="bottle2">
<img src="${i[2]}" alt="bottle3">
<img src="${i[3]}" alt="bottle4">
<img src="${i[4]}" alt="bottle5">
`;

  document.getElementById("otherimage").innerHTML = z;

  document.getElementById("desc1").innerHTML = `<p>${obj.disc}</p>`;
  document.getElementById("desc2").innerHTML = `<p>${obj.disc1}</p>`;
  if (obj.items !== "bottle")
    document.getElementById(
      "allcolors"
    ).innerHTML = `<h4>Filter Excessory</h4>`;
};

show(i1);

document.querySelector("#reviewinput_u").addEventListener("keypress", (e) => {
  let a = document.getElementById("input_u").value;
  let b = document.getElementById("description_u").value;
  let c = document.getElementById("reviewtitle_u").value;
  let d = new Date();
  // console.log("yes");
  if (e.key === "Enter") {
    reviewfun(a, b, c, d);
    // console.log(a, b);
  }
});

// let arr = obj.rating;
let arr = [
  {
    rate: 5,
    desc: "1k", // data will come from nagendra;
    da: "2k",
    title: "3k",
  },
];

showreview(arr);
function showreview(arr1) {
  if (arr1.length !== 0) {
    document.querySelector(
      ".rev"
    ).innerHTML = `<p>${arr1.length} reviews</p><br>
    <span class="material-symbols-outlined">stars
    </span>`;
    averagerating();
    document.querySelector("#reviewappend_u").innerHTML = "";
    arr1.forEach((el) => {
      console.log(el);

      let div = document.createElement("div");
      div.id = "allreviews_u";

      let div1 = document.createElement("div");
      div1.id = "noofreview";

      let rating = document.createElement("p");
      rating.innerHTML = `<span class="material-symbols-outlined">stars
      </span>`;
      let z = document.createElement("h3");
      z.innerText = el.rate;

      // rating.id = "rating";
      // // rating.innerText = el.rate;
      let time = document.createElement("h3");
      time.innerText = el.da;
      div1.append(z, rating, time);
      let ti = document.createElement("h1");
      ti.innerText = el.title;

      let dis = document.createElement("p");
      dis.innerHTML = el.desc;

      div.append(div1, ti, dis);

      document.getElementById("reviewappend_u").append(div);
    });
  }
}
function reviewfun(a, b, c, d) {
  event.preventDefault();
  if (a > 0 && a < 6 && b !== " " && b !== "" && c !== " " && c != "") {
    document.getElementById("input_u").value = "";
    document.getElementById("description_u").value = "";
    document.getElementById("reviewtitle_u").value = "";
    let div = document.createElement("div");
    let text = document.createElement("h3");
    text.innerText = b;
    let des = document.createElement("h4");
    des.innerText = `${a}`;

    let d2 = d.getMinutes();
    if (d2 < 10) d2 = `0${d2}`;
    let d3 = d.getSeconds();
    if (d3 < 10) d3 = `0${d3}`;
    let m;

    let d4 = d.getHours();
    if (d4 < 12) m = " A.M";
    else {
      d4 = +(d4 % 12);
      m = " P.M";
    }

    let d1 = `${d.getDate()}/${+(
      d.getMonth() + 1
    )}/${d.getFullYear()}   ${d4}:${d2}:${d3}`;
    d1 += m;
    div.append(des, d1, text);
    let obj = {
      rate: a,
      desc: b,
      da: d1,
      title: c,
    };

    arr.push(obj);
    obj.rating = arr;
    // localStorage.setItem("reviews", JSON.stringify(arr));

    averagerating();
    showreview(arr);
  }
}

function averagerating() {
  let average = 0;
  //   let arr1 = JSON.parse(localStorage.getItem("reviews"));
  document.querySelector("#rating_u").innerHTML = " ";
  arr.forEach((element) => {
    average += +element.rate;
  });
  average = average / arr.length;
  average = Math.round(average * 10) / 10;
  // console.log(average + " " + arr1.length);
  // if (average < 1)
  //     average = 1;
  let h1 = document.createElement("h1");
  h1.innerText = `${average}/5`;
  document.querySelector("#rating_u").append(h1);
}

document.getElementById("size1").addEventListener("click", fun);
document.getElementById("size2").addEventListener("click", fun1);

function fun() {
  event.preventDefault();
  let a = document.getElementById("size1").innerText;
  console.log(a);
  const k = `<p>€${obj.price[a]}.00</p>`;
  console.log(k);
  document.getElementById("price").innerHTML = k;
  ob.size = obj.size.first;
  ob.price = obj.price[a];
}

function fun1() {
  event.preventDefault();
  let a = document.getElementById("size2").innerText;
  console.log(a);
  const k = `<p>€${obj.price[a]}.00</p>`;
  console.log(k);
  document.getElementById("price").innerHTML = k;
  ob.size = obj.size.second;
  ob.price = obj.price[a];
}

function fun4() {
  console.log(1);
  show(obj.img.white);
  ob.color = "white";
  document.getElementById("colorname").innerText = "Granite White";
}
function fun3() {
  show(obj.img.blue);
  ob.color = "blue";
  document.getElementById("colorname").innerText = "Monaco Blue";
}

function cart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let flag = true;
  if (cart.length > 0) {
    for (let a of cart) {
      if (a.size === ob.size && a.color === ob.color) {
        a.nu = +a.nu + 1;
        flag = false;
      }
    }
  }
  if (flag) cart.push(ob);
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}
