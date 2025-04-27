var gpuName = [
    "RTX 3050",
    "RTX 4060TI",
    "RTX 5070",
    "RTX 4060",
    "RTX 1650",
    "RTX 1660 Super",
    "RTX 3060",
    "RTX 4070",
    "RTX 3080TI"
];
var gpuPrice = [
    "$249.99",
    "$399.99",
    "$549.99",
    "$309.99",
    "$179.99",
    "$239.99",
    "$359.99",
    "$649.99",
    "$1009.99"
];
var gpuPath = [
    "gpu/g1.webp",
    "gpu/g2.webp",
    "gpu/g3.webp",
    "gpu/g4.webp",
    "gpu/g5.webp",
    "gpu/g6.webp",
    "gpu/g7.webp",
    "gpu/g8.webp",
    "gpu/g9.webp"
];

for (var i = 0; i < gpuName.length; i++) {

    var gpuContainer = document.getElementById("gpu");

    gpuContainer.innerHTML +=
        "<div class=\"col-6 col-sm-4 col-md-3 product-card\">\
            <div class=\"card my-3 rounded-4\">\
              <img src=\"img/"+ gpuPath[i] + "\" class=\"card-img-top\">\
              <div class=\"card-body\">\
                <h5 class=\"card-title\">"+ gpuPrice[i] + "</h5>\
                <p class=\"card-text text-truncate\">"+ gpuName[i] + "</p>\
              </div>\
            </div>\
          </div>";
}