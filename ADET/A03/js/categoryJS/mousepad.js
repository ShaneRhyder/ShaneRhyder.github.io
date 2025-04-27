var mousepadName = [
    "Sakura Dreamwave",
    "Inari Torii",
    "Kanagawa",
    "Kyoto Tori",
    "Nimbus",
    "Cosmic Koi",
    "Astro Space",
    "Neko Moon",
    "Ebi Soba"
];
var mousepadPrice = [
    "$19.99",
    "$24.99",
    "$22.99",
    "$29.99",
    "$21.99",
    "$27.99",
    "$31.99",
    "$26.99",
    "$34.99"
];
var mousepadPath = [
    "mousepad/mp1.webp",
    "mousepad/mp2.webp",
    "mousepad/mp3.webp",
    "mousepad/mp4.JPG",
    "mousepad/mp5.webp",
    "mousepad/mp6.webp",
    "mousepad/mp7.webp",
    "mousepad/mp8.webp",
    "mousepad/mp9.JPG"
];

for (var i = 0; i < mousepadName.length; i++) {

    var mousepadContainer = document.getElementById("mousepad");

    mousepadContainer.innerHTML +=
        "<div class=\"col-6 col-sm-4 col-md-3 product-card\">\
            <div class=\"card my-3 rounded-4\">\
              <img src=\"img/"+ mousepadPath[i] + "\" class=\"card-img-top\">\
              <div class=\"card-body\">\
                <h5 class=\"card-title\">"+ mousepadPrice[i] + "</h5>\
                <p class=\"card-text text-truncate\">"+ mousepadName[i] + "</p>\
              </div>\
            </div>\
          </div>";
}