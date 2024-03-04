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
    // CartBoxComponent=newToAdd;
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode)
    update();
}

 CartBoxComponent = (title,price,imgSrc) => { 
    /* document.createElement("div");*/
    //  ''
    document.getElementById("cart-element").innerHTML=(title + price);
    
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
