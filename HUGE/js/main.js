
//TABS DETAILS
var tabsMatch = $('.tabs-detail').children().not('.tabs-title');
$('.tabs-title').children().map((idx, element) => {

    $(element).on('click', () => {
        tabs($(element).data('tabs_id'), tabsMatch)
    })
})

var tabs = function (tab_id, elements) {
    elements.map((idx, element) => {
        if ($(element).data('match_tabs') === tab_id) {
            $(element).addClass('active').parent().addClass('mh_high');
        } else {
            $(element).removeClass('active').parent().removeClass('mh_high');
        }
    });

}
// GET DATA FORM API JSON SERVER 

var render = function (element_pour, html) {


    element_pour = document.querySelector(element_pour);
    if (typeof element_pour !== "undefined") {

        element_pour.innerHTML = html.join(' ');
    }

}
var mapHTML = function (element_pour, ...data) {
    var html = "";
    html = $.map(data[0], function (item, index) {

        if (item.sub_menu_id !== null && typeof item.sub_menu_id !== "undefined") {
           var sub_item = data[1].find(sub => sub.id === item.sub_menu_id);

            return typeof sub_item !== "undefined" ? `   <li class="item item-has-dropdown">
            <a href="${item.link}"  class="link">${item.name}</a><span class="caret"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                    </path>
                </svg></span>
            <ul class="menu-sub">
                ${$.map(sub_item.fileds, (item, index) => {
                return ` <li class="sub-item">
                       <a href="" class="link">${item}</a>

                   </li>`;
            }).join(' ')
                }
                
            </ul>
        </li>`: ` <li class="item"><a href="${item.link}" class="link">${item.name}</a></li>`;
        }
        return ` <li class="item"><a href="${item.link}" class="link">${item.name}</a></li>`;
    });

    render(element_pour, html);
}
var rating = function (num) {
    var remainder = Number.parseInt(num);
    let html = '';
    for (let index = 0; index < Number.parseInt(num) - 1; index++) {
        html += `  <i class="fas fa-star"></i>`;
    }
    if (remainder !== num) {
        html += `<i class="fas fa-star-half-alt"></i>`;
    } else {
        html += `<i class="fas fa-star"></i>`;
    }
    return html;
}
//  LOAD HEADER
var loadHeader = async function () {
    let element_pour = "#main_menu"; //should assign name variable difference in every  function async  because it will get wrong value 
    let response_1 = await fetch('http://localhost:3000/menus');
    let response_2 = await fetch('http://localhost:3000/submenu');
    let data_1 = await response_1.json();
    let data_2 = await response_2.json();
    mapHTML(element_pour, data_1, data_2);
}
//LIST PRODUCTS 
var loadProducts = async function () {
    let element_product = ".lastest_product .block-content";
    let response = await fetch('http://localhost:3000/products');
    let data = await response.json();
    var  dataHTML = data.map((val, idx) => {
        return `<div class="product">
     <div class="product-overlay">
         <a  route="/product/${val.id}" href="/product/${val.id}">  <img src="${val.image}" alt="${val.image}"></a>
         <div class="sale ${val.discount_pre == 0 ? "sale_hide" : ""}">sale</div>
     </div>
     <div class="product-content">
         <h3 class="text-name">${val.name}</h3>
         <div class="star">
           ${rating(val.rating)}
         
         </div>
         <div class="price">
             <del class="${val.discount_pre == 0 ? "sale_hide" : ""}">${val.price * (val.discount_pre / 100)}$</del>
             <div class="text-price">${val.price}$</div>
         </div>
     </div>
 </div>`;
    });
    render(element_product, dataHTML);
    //LOAD SLIDER PRODUCTS HOT 
    let element_sliderHot = "#slide-product_wppr";
    let listSlider = data.filter((item) => item.top === true);
    var dataHTML_slider = listSlider.map((val, idx) => {
        return `<div class="product">
    <div class="product-overlay">
        <a href="/product/${val.id}">  <img src="${val.image}" alt="${val.image}"></a>
        <div class="sale ${val.discount_pre == 0 ? "sale_hide" : ""}">sale</div>
    </div>
    <div class="product-content">
        <h3 class="text-name">${val.name}</h3>
        <div class="star">
          ${rating(val.rating)}
        
        </div>
        <div class="price">
            <del class="${val.discount_pre == 0 ? "sale_hide" : ""}">${val.price * (val.discount_pre / 100)}$</del>
            <div class="text-price">${val.price}$</div>
        </div>
    </div>
</div>`;
    });
    render(element_sliderHot, dataHTML_slider);

}
var slide_product_wppr = function () {
    $('#slide-product_wppr').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    
}
//Router within event sclick


//INIT RUN FIRST 
var Init = function () {
    loadHeader();
     loadProducts().then(() => {
           //check break setInterval 
           setTimeout(slide_product_wppr, 100);
    });
    

}
//LINK ROUTER WITH EVENT 



Init();