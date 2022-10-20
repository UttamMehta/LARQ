const navbar = () => {
  return `    <div id="nav">
  <a href="./index.html"> <div id="logo" ><img src="https://res.cloudinary.com/larq/image/upload/v1570724754/assets/spa/icons/logo-larq.svg" alt=""></div>
</div></a>
<div id="item">
    <div> <a id="products" href="./products/productpages/products.html">Products</a> </div>
    <div> <a href="./Technology/techno.html">Technology</a></div>
    <div> <a href="signin.html">Sign In</a></div>
   
    <div>
    <select name="" id="selectLang">
    <option value="en">EN</option>   
    <option value="english">English</option>
        <option value="french">French</option>
        <option value="german">German</option>
    </select>
    
</div>

<div id="ship"><span class="material-symbols-outlined">
shopping_cart
</span></div>`;
};
export default navbar;
/* <i class="fa-light fa-cart-shopping"></i> */
