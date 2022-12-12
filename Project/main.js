
// Control Carousel slide - -Testimonial
$('.carousel .carousel-item').each(function () {
    var minPerSlide = 5;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });









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

// add all Store on load
for (let store of storeList) {
        addStore(store)
}

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
