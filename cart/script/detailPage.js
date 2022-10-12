const obj = {
  id: 1,
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
};

show(i1);

document.querySelector("#reviewinput_u").addEventListener("keypress", (e) => {
  let a = document.getElementById("input_u").value;
  let b = document.getElementById("description_u").value;
  let d = new Date();
  // console.log("yes");
  if (e.key === "Enter") {
    reviewfun(a, b, d);
    // console.log(a, b);
  }
});

let arr = JSON.parse(localStorage.getItem("reviews")) || [];

function showreview() {
  if (arr.length !== 0) {
    averagerating();
    arr.forEach((el) => {
      console.log(el);
    });
  }
}
function reviewfun(a, b, d) {
  event.preventDefault();
  if (a > 0 && a < 6 && b !== " " && b !== "") {
    document.getElementById("input_u").value = " ";
    document.getElementById("description_u").value = "";
    let div = document.createElement("div");
    let text = document.createElement("h3");
    text.innerText = b;
    let des = document.createElement("h4");
    des.innerText = `${a}`;
    let d1 = document.createElement("h3");
    let d2 = d.getMinutes();
    if (d2 < 10) d2 = `0${d2}`;
    let d3 = d.getSeconds();
    if (d3 < 10) d3 = `0${d3}`;

    let d4 = d.getHours();
    if (d4 < 12) d4 += "A.M";
    else d4 += "P.M";

    d1 = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   ${d.getHours()}:${d2}:${d3}`;

    div.append(des, d1, text);
    let obj = {
      rate: a,
      desc: b,
      da: d1,
    };

    arr.push(obj);
    localStorage.setItem("reviews", JSON.stringify(arr));

    averagerating();
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
  let a = document.getElementById("size1").innerText;
  console.log(a);
  const k = `<p>€${obj.price[a]}.00</p>`;
  console.log(k);
  document.getElementById("price").innerHTML = k;
}

function fun1() {
  let a = document.getElementById("size2").innerText;
  console.log(a);
  const k = `<p>€${obj.price[a]}.00</p>`;
  console.log(k);
  document.getElementById("price").innerHTML = k;
}

function fun4() {
  show(obj.img.white);
  document.getElementById("colorname").innerText = "Granite White";
}
function fun3() {
  show(obj.img.blue);
  document.getElementById("colorname").innerText = "Monaco Blue";
}
