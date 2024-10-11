fetch('./js/items.json').then(response => response.json()).then(data =>
{
    const swiper_items_sale = document.getElementById("swiper_items_sale");

    const other_product_swiper = document.getElementById("other_product_swiper");
    const other_product_swiper2 = document.getElementById("other_product_swiper2");
    data.forEach(product =>
    {
        if (product.old_price)
        {

            const percenta_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
            all_prodact_json = data;
            swiper_items_sale.innerHTML += `

            <div class="product swiper-slide">

                        <span class="sale_present">%${percenta_disc}</span>
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name_product"><a href="./item.html">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                                                <div class="icons_card">
                            <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span> <i class="fa-solid fa-share"></i></span>
                        </div>
                        </div>
                        
                    `
        }
    });


    data.forEach(product =>
    {
        all_prodact_json = data;
        other_product_swiper.innerHTML += `

            <div class="product swiper-slide">
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name_product"><a href="./item.html">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                        </div>
                                                <div class="icons_card">
                            <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span> <i class="fa-solid fa-share"></i></span>
                        </div>
                        </div>
                        `
    });



    data.forEach(product =>
    {
        all_prodact_json = data;
        other_product_swiper2.innerHTML += `

            <div class="product swiper-slide">

                       
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name_product"><a href="./item.html">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                        </div>
                                                <div class="icons_card">
                            <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span> <i class="fa-solid fa-share"></i></span>
                        </div>
                        </div>
                        `
    });

})