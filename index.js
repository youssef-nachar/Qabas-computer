const cartIcon=document.querySelector("#cart-icon");
const cart=document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");


cartIcon.addEventListener("click", ()=>{
    cart.classList.add('active');
})

closeCart.addEventListener("click",()=>{
    cart.classList.remove("active");
})

if(document.readyState=="loading"){
    document.addEventListener("DOMCententLoaded",start);
}else{
    start();
}


function start(){
    addEvents();

}

function update(){
    // addEvents();
    updateTotale();

}

let cartRemove_Btns = document.querySelectorAll(".cart-remove");
// function addEvents(){
    cartRemove_Btns.forEach((btn) =>{
        btn.addEventListener("click", handle_removeCartItem);
    });
    

let cartQuantity_inputs=document.querySelectorAll(".cart-quatity");
cartQuantity_inputs.forEach(input => {
    input.addEventListener("change", handle_changeItemQuantity);
})


function handle_removeCartItem(){
    this.parentElement.remove();
update()
}

function handle_changeItemQuantity(){
    if (isNaN(this.value)|| this.value<1){
    this.value=1
    }
    this.value = Math.floor(this.value);
    update()
}

 updateTotale=()=>{
    let cartBoxes=document.querySelectorAll(".cart-box");
    const totalElement = document.querySelector(".total-price");
    let total=0;
    cartBoxes.forEach(cartBoxe =>{
        let priceElement = cartBoxe.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity=cartBoxe.querySelector(".cart-quatity").value;
        total+=price * quantity;
    });
    total=total.toFixed(2);
    // total=Math.random



    totalElement.innerHTML = "$" + total;
}


let addCart_btn = document.querySelectorAll(".add-cart");
addCart_btn.addEventListener("click", function(){
    alert("heloo")
})
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title,price,imgSrc)
    addCart_btn.querySelector.addEventListener("click",handle_addCartItem);

