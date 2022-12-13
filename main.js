
// Control Carousel slide - -Testimonial
$('.carousel .carousel-item').each(function () {
    var minPerSlide = 5;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });





// Section Chương trình khuyến mại

// This function will add a card, including (image - product - price tag) to web. We will use this funciton later
// This function has 2 arguments, product and idElement, respresent for what to add, and where to add in the page. By default, idElement 's value is Salelist - in the section 'Chương trình khuyến mại'

function addProduct(product, idElement='Salelist') {
    // Create mother div
    const itemCard = document.createElement('div');
    // Adding class for mother div
    itemCard.classList.add("col");
    itemCard.classList.add("productBlock");

    // Create child elements: 1. img   2.Product Name   3. Product price
    const itemImg = document.createElement('img');
    itemImg.classList.add("img-fluid");
    itemImg.classList.add("pe-lg-3");
    itemImg.src = product['link'];

    const itemName = document.createElement("p");
    itemName.classList.add('productBlock-ProductName')
    itemName.innerHTML = product["name"];


    const itemPrice = document.createElement("p")
    itemPrice.classList.add('productBlock-Price')
    itemPrice.innerHTML = product["price"];

    // Append child elements to mother div
    itemCard.appendChild(itemImg);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    // Select id Element in the HTML file, and append itemCard
    document.getElementById(idElement).appendChild(itemCard);
}


// This function will deactive all category item for sale (text to black, align left)
function deactiveAllItemCategory() {
    const divs = document.querySelectorAll(".itemCategory-active");
    for (let div of divs) {
        // remove active class
        div.classList.remove('itemCategory-active');
        // add deactive clsas
        div.classList.add('itemCategory-deactive');
    }
}


// polo
const poloCard = document.getElementById('itemCategoryforSale-Polo');
poloCard.addEventListener('click',function() {
    // Clear all data
    document.getElementById('SaleList').innerHTML = ""
    // Adding Polo item Card

    for (let product of item) {
        if (product['type'] === "POLO") {
            addProduct(product,'SaleList');
        }
    }

    // Deactive all item Category
    deactiveAllItemCategory();
    // Active this item Category
    poloCard.classList.remove('itemCategory-deactive');
    poloCard.classList.add('itemCategory-active')
})

// Quần Âu
const quanAuCard = document.getElementById('itemCategoryforSale-QuanAu');
quanAuCard.addEventListener('click',function() {
    // Clear all data
    document.getElementById('SaleList').innerHTML = ""
    // Adding Polo item Card

    for (let product of item) {
        if (product['type'] === "QUẦN ÂU") {
            addProduct(product,'SaleList')
        }
    }

    // Deactive all item Category
    deactiveAllItemCategory();
    // Active this item Category
    quanAuCard.classList.remove('itemCategory-deactive');
    quanAuCard.classList.add('itemCategory-active')


})


// ----------------------------------------------------------


// Section:  Hệ thống cửa hàng trên toàn quốc
// This function will Add store to Store Box, we will use this function later

function addStore(store) {
    const storeInfo =  document.createElement('li');
    
    // Create h5 line - store Name
    var x1 = document.createElement("h5");
    x1.innerHTML = store["name"];
    // (store is an array , located in sale.js file)

    // Create address line
    var x2 = document.createElement("p");
    x2.innerHTML = '<i class="bi bi-geo-alt-fill"></i>' + ' ' + ' '+ ' '+ store["address"]

    var x3 = document.createElement("p");
    x3.innerHTML = '<i class="bi bi-telephone-fill"></i>'+  ' ' + ' '+ ' '+ store["phone"] 

    var x4 = document.createElement("p");
    x4.innerHTML = '<i class="bi bi-clock-fill"></i>' + ' '+ ' '+ ' '+ store["timeOpen"]

    storeInfo.appendChild(x1);
    storeInfo.appendChild(x2);
    storeInfo.appendChild(x3);
    storeInfo.appendChild(x4);
    
    document.getElementById("storeCity").appendChild(storeInfo);
}

// on first loading, add all Store to Storebox
for (let store of storeList) {
        addStore(store)
}

// This function will filter store in the city, that user chose in the selection box
function filterStorebyCity() {
    var x = document.getElementById("st1").value;

    // Reset the value in the box with id storeCity
    document.getElementById("storeCity").innerHTML="";

    if (x==="All") {
        // add all Store on load
        for (let store of storeList) {
            addStore(store)
        }
    } else {
        // loop thourgh store Array, show only store located with city in the select box
        for (let store of storeList) {
            if (store['city'] === x) {
                addStore(store)
            }
        }
    }
}

// -------------------------------------------------------------- //