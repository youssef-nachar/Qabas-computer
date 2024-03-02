const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");


cartIcon.addEventListener("click", () => {
    cart.classList.add('active');
})

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
})

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}


function start() {
    // addEvents();

}

function update() {
    // addEvents();
    updateTotale();

}

let cartRemove_Btns = document.querySelectorAll(".cart-remove");
// function addEvents(){
cartRemove_Btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
});


let cartQuantity_inputs = document.querySelectorAll(".cart-quatity");
cartQuantity_inputs.forEach(input => {
    input.addEventListener("change", handle_changeItemQuantity);

    //change the item in the card
    let addCart_btn = document.querySelectorAll(".add-cart");
    addCart_btn.forEach(btn => {
        btn.addEventListener("click", handle_addCartItem);
    })
})
function handle_addCartItem() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title, price, imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc,
    };
    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode)
    update();
}


function CartBoxComponent(title, price, imgSrc) {
    return ' <div class = "cart-box"><img src = {imgSrc} alt="" class="cart-img"/><div class="detail-box">   <div class="cart-product-title">{title}</div> <div class ="cart-price"> {price}</div><input type="number" value="1"  class="cart-quatity"/></div><i class="bx bxs-trash-alt cart-remove"></i> </div>'
}

function handle_removeCartItem() {
    this.parentElement.remove();
    update()
}

function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1
    }
    this.value = Math.floor(this.value);
    update()
}

updateTotale = () => {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = document.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach(cartBoxe => {
        let priceElement = cartBoxe.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBoxe.querySelector(".cart-quatity").value;
        total += price * quantity;
    });
    total = total.toFixed(2);
    totalElement.innerHTML = "$" + total;
}


//====================html components========================
// let newNode = document.createElement("div", "img")
