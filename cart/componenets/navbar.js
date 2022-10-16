const navbar = () => {
  return `    <div id="nav">
    <div id="logo" onclick="logo()"><img src="https://res.cloudinary.com/larq/image/upload/v1570724754/assets/spa/icons/logo-larq.svg" alt=""></div>
</div>
<div id="item">
    <div> <a id="products" onclick="products()" href="">Products</a> </div>
    <div> <a href="../../Technology/techno.html">Technology</a></div>
    <div> <a href="signin.html">Sign In</a></div>
   
    <div>
    <select name="" id="selectLang">
    <option value="en">EN</option>   
    <option value="english">English</option>
        <option value="french">French</option>
        <option value="german">German</option>
    </select>
    
</div>

<div><a href="./cart.html"><span class="material-symbols-outlined">
shopping_cart
</span></a></div>
</div>`;
};
export default navbar;
/* <i class="fa-light fa-cart-shopping"></i> */
