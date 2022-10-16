const arr = [
  "https://i0.wp.com/www.plansinfo.com/blog/wp-content/uploads/2018/01/phonepe-e1520537823958.png?fit=200%2C200&ssl=1",
  "https://th.bing.com/th/id/R.7891803c3389e055c54dd7441adec0e9?rik=r66Adr4%2bYa0rYw&riu=http%3a%2f%2ffeedmystartup.com%2fwp-content%2fuploads%2f2018%2f04%2fPaytm_logo-300x164.png&ehk=ApQRtA7cklIcGWtW4sUuujcj6ywaWWxA7%2bgAUl6e%2buU%3d&risl=&pid=ImgRaw&r=0",
  "https://www.bing.com/th?id=OIP.ciELcTgvSog9sUAKVrDlIQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://th.bing.com/th/id/OIP.t0r0NAChbqY1pM-nbBq3AwHaHZ?pid=ImgDet&rs=1",
];

let i = 0,
  j = 1,
  k = 2,
  l = 3;
setInterval(() => {
  if (i === arr.length) i = 0;

  document.getElementById("phonepay").innerHTML = `<img
    src="${arr[i]}"
    alt="upi1st"></div>`;

  if (j === arr.length) j = 0;
  document.getElementById("paytm").innerHTML = `<img
      src="${arr[j]}"
      alt="upi2st"></div>`;

  if (k === arr.length) k = 0;
  document.getElementById("amazon").innerHTML = `<img
      src="${arr[k]}"
      alt="upi3st"></div>`;
  if (l === arr.length) l = 0;
  document.getElementById("gpay").innerHTML = `<img
          src="${arr[l]}"
          alt="upi3st"></div>`;
  i++;
  j++;
  k++;
  l++;
}, 2000);

// i = 1;

// setInterval(() => {
//   if (i === arr.length) i = 0;

//   document.getElementById("paytm").innerHTML = `<img
//       src="${arr[i]}"
//       alt="upi1st"></div>`;
//   i++;
// }, 1000);

document.getElementById("amount").innerHTML = `Total Amount:-  ${JSON.parse(
  localStorage.getItem("netamount")
)}`;

document.querySelector("form").addEventListener("submit", () => {
  document.querySelector(
    "body"
  ).innerHTML = ` <img  src="https://media.giphy.com/media/12PfUj30bGF2De/giphy.gif" alt="processing">`;

  setTimeout(() => {
    document.querySelector(
      "body"
    ).innerHTML = `  <img  src="https://images-na.ssl-images-amazon.com/images/I/61aj34BSydL._SL1000_.jpg" alt="Thank you">`;
  }, 5000);

  setTimeout(() => {
    document.querySelector(
      "body"
    ).innerHTML = `  <img  src="https://www.boomboomkid.com/wp-content/uploads/2020/03/giphy-payment-success-BOOMBOOM-3.gif">`;
  }, 2000);
});
