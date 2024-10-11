// open close card


var cart = document.querySelector(".cart");
var icon_cart = document.querySelector(".icon_cart");

function open_cart()
{
    cart.classList.add("active");
}

function close_cart()
{
    cart.classList.remove("active");
}


// open & close menue
var menue = document.querySelector("#menue");

function open_menue()
{
    menue.classList.add("active");
}

function close_menue()
{
    menue.classList.remove("active");
}





// add item in card 

var all_prodact_json;

var items_in_cart = document.querySelector(".items_in_cart");

let product_cart = [];

function addToCart(id, btn)
{
    product_cart.push(all_prodact_json[id])
    btn.classList.add("active")
    getCartItem()
}


let count_item = document.querySelector(".count_item");
let price_cart_total = document.querySelector(".price_cart_total");
let price_cart_Head = document.querySelector(".price_cart_Head");

let count_item_cart_hed = document.querySelector(".count_item_cart_hed");


function getCartItem()
{
    let totel_price = 0;

    let items_c = "";
    for (let i = 0; i < product_cart.length; i++)
    {
        items_c += `
                    <div class="item_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-minus"></i></button>
            </div>
        
        `
        totel_price += product_cart[i].price

    }

    items_in_cart.innerHTML = items_c;
    price_cart_Head.innerHTML = "$" + totel_price;
    price_cart_total.innerHTML = "$" + totel_price;
    count_item.innerHTML = product_cart.length;
    count_item_cart_hed.innerHTML = `(${product_cart.length} Item in Cart)`;


}

// remove item from cart

function remove_from_cart(index)
{
    product_cart.splice(index, 1)
    getCartItem()
    let addTocartbuttons = document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < addTocartbuttons.length; i++)
    {
        addTocartbuttons[i].classList.remove("active");
        product_cart.forEach(product =>
        {
            if (product.id == i)
            {
                addTocartbuttons[i].classList.add("active");
            }
        })
    }
}


// back_to_top

let back_to_top = document.querySelector(".back_to_top");

back_to_top.addEventListener("click", function ()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})


// Spinner 
let spinner = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>
{
    spinner.style.opacity = '0';
    setTimeout(() =>
    {
        spinner.style.display = 'none';
    }, 200);
})

// shange item img

let big_img = document.getElementById("big_img");

function ChangitemImg(img)
{
    big_img.src = img
}