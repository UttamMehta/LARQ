let data=JSON.parse(localStorage.getItem('allobjects'));
console.log(data);
let bottles=document.createElement("h3")
bottles.innerText="Bottles"
bottles.onclick=function() {
 location.href="#bottles"
}
let Pitcher=document.createElement("h3")
Pitcher.innerText="Pitcher"
Pitcher.onclick=function() {
    location.href="#pitcher"

}
let GiftSets=document.createElement("h3")
GiftSets.innerText="Gift sets"
GiftSets.onclick=function() {
    location.href="#giftsets"

}
let Filters=document.createElement("h3")
Filters.innerText="Filters"
Filters.onclick=function() {
    location.href="#filters"
}
let Accessories=document.createElement("h3")
Accessories.innerText="Accessories"
Accessories.onclick=function() {
    location.href="#accessories"
}


document.getElementById("np_top").append(bottles,Pitcher,GiftSets,Filters,Accessories);
console.log(bottles,Pitcher,GiftSets,Filters,Accessories);


data.map(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img")
    
    let link=el.img.blue[0]
    el
    img.src=link
    img.onclick=function(){
        localStorage.setItem("data",JSON.stringify(el))
        location.href="../cart/pages/detailPage.html"
    }
    let h3=document.createElement("h3");
    h3.innerText=el.title;
    div.append(img,h3)
    document.getElementById("np_div5").append(div)
     
})
data.map(function(el){
     if(el.items=="filters"){
        console.log("filters")
    let div=document.createElement("div");
    let img=document.createElement("img")
    let link=el.img.blue
    img.src=link[0]
    img.onclick=function(){
        localStorage.setItem("data",JSON.stringify(el))
        location.href="../cart/pages/detailPage.html"
    }
    let h3=document.createElement("h3");
    h3.innerText=el.title;
    div.append(img,h3)
    document.getElementById("np_div6").append(div)
     }
})
data.map(function(el){
    if(el.items=="bottle ass"){
   let div=document.createElement("div");
   let img=document.createElement("img")
   let link=el.img.blue
   img.src=link[0]
   img.onclick=function(){
       localStorage.setItem("data",JSON.stringify(el))
       location.href="../cart/pages/detailPage.html"
   }
   let h3=document.createElement("h3");
   h3.innerText=el.title;
   div.append(img,h3)
   document.getElementById("np_div7").append(div)
    }
})

let button=document.getElementById("n_button1")
  button.onclick=function() {
          document.getElementById("img1").src="https://res.cloudinary.com/larq/images/f_auto,q_auto/v1619383113/LARQ_Pitcher_MB_1/LARQ_Pitcher_MB_1.jpg"


  }
  let button2=document.getElementById("n_button2")
  button2.onclick=function() {
          document.getElementById("img1").src="https://res.cloudinary.com/larq/images/f_auto,q_auto/v1619383123/LARQ_Pitcher_PW_1/LARQ_Pitcher_PW_1.jpg"
     
  }
  function fun1(){
    localStorage.setItem("data",JSON.stringify(data[1]))
       location.href="../cart/pages/detailPage.html"

  }
  function fun2(){
    localStorage.setItem("data",JSON.stringify(data[1]))
       location.href="../cart/pages/detailPage.html"
    
}
function fun3(){
    localStorage.setItem("data",JSON.stringify(data[2]))
       location.href="../cart/pages/detailPage.html"
    
}
function fun4(){
    localStorage.setItem("data",JSON.stringify(data[2]))
       location.href="../cart/pages/detailPage.html"
    
}
function fun5(){
    localStorage.setItem("data",JSON.stringify(data[0]))
       location.href="../cart/pages/detailPage.html"
}
function fun6(){
    localStorage.setItem("data",JSON.stringify(data[0]))
       location.href="../cart/pages/detailPage.html"
}

function logo(){
    location.href="../index.html"
}