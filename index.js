const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");


cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
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
    });
    const buy_btn = document.querySelector(".btn-buy");
    buy_btn.addEventListener("click",handle_buyOrder);
});

let itemsAdded = [];

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
    if(itemsAdded.find((el)=>el.title==newToAdd.title)){
        alert("this items is already exist!");
        return;
    }else{
        itemsAdded.push(newToAdd)
    }


    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);
    update();
}

function handle_removeCartItem() {
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(
       (el)=>
        el.title!=this.parentElement.querySelector(".cart-product-title").innerHTML
    );
    update();
}

function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1
    }
    this.value = Math.floor(this.value);
    update();
}
function handle_buyOrder(){
    if(itemsAdded.length<=0) {alert("There is no order make Yet \n Please make an order first");
    return;
}
cartContent = cart.querySelector(".cart-content");
cartContent.innerHTML="" ;
alert("your order is placed succesfuly");
itemsAdded=[];
update();

}




//==================================
updateTotale = () => {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = document.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBoxes) => {
        let priceElement = cartBoxes.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBoxes.querySelector(".cart-quatity").value;
        total = price * quantity;   
    });
    total = total.toFixed(1);
    totalElement.innerHTML = "$" + total;
// update();
CartBoxComponent();
}


//====================html components========================
function CartBoxComponent(title, price, imgSrc) {
      return `
        <div class="cart-box">
          <img src="${imgSrc}" class="cart-img">
          <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
          </div>
          <i class="bx bxs-trash-alt cart-remove"></i>
        </div>
      `;
   
    }
