var keyboardName = [
    "Attack Shark M87PRO",
    "Attack Shark X87",
    "Attack Shark X75",
    "Attack Shark K86",
    "Attack Shark X85",
    "Attack Shark K85",
    "Attack Shark x AJAZZ AK820 Pro",
    "Attack Shark x AJAZZ AK820",
    "Attack Shark X85PRO"
];
var keyboardPrice = [
    "$69.99",
    "$59.99",
    "$49.99",
    "$54.99",
    "$64.99",
    "$44.99",
    "$74.99",
    "$39.99",
    "$79.99"
];
var keyboardPath = [
    "keyboard/k1.webp",
    "keyboard/k2.jpg",
    "keyboard/k3.webp",
    "keyboard/k4.webp",
    "keyboard/k5.webp",
    "keyboard/k6.webp",
    "keyboard/k7.webp",
    "keyboard/k8.webp",
    "keyboard/k9.webp"
];

for (var i = 0; i < keyboardName.length; i++) {

    var keyboardContainer = document.getElementById("keyboard");

    keyboardContainer.innerHTML +=
        "<div class=\"col-6 col-sm-4 col-md-3 product-card\">\
        <div class=\"card my-3 rounded-4\">\
          <img src=\"img/"+ keyboardPath[i] + "\" class=\"card-img-top\">\
          <div class=\"card-body\">\
            <h5 class=\"card-title\">"+ keyboardPrice[i] + "</h5>\
            <p class=\"card-text text-truncate\">"+ keyboardName[i] + "</p>\
          </div>\
        </div>\
      </div>";
}