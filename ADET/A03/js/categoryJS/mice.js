var miceName = [
    "Attack Shark X3",
    "Attack Shark X11",
    "Attack Shark X6",
    "Attack Shark R6",
    "Attack Shark R1",
    "Attack Shark X3PRO",
    "Attack Shark R3",
    "Attack Shark X3MAX",
    "Attack Shark R2"
];
var micePrice = [
    "$39.99",
    "$29.99",
    "$49.99",
    "$59.99",
    "$39.99",
    "$24.99",
    "$69.99",
    "$34.99",
    "$19.99"
];
var micePath = [
    "mice/m1.webp",
    "mice/m2.webp",
    "mice/m3.webp",
    "mice/m4.webp",
    "mice/m5.webp",
    "mice/m6.webp",
    "mice/m7.webp",
    "mice/m8.webp",
    "mice/m9.webp"
];

for (var i = 0; i < miceName.length; i++) {

    var miceContainer = document.getElementById("mice");

    miceContainer.innerHTML +=
        "<div class=\"col-6 col-sm-4 col-md-3 product-card\">\
            <div class=\"card my-3 rounded-4\">\
              <img src=\"img/"+ micePath[i] + "\" class=\"card-img-top\">\
              <div class=\"card-body\">\
                <h5 class=\"card-title\">"+ micePrice[i] + "</h5>\
                <p class=\"card-text text-truncate\">"+ miceName[i] + "</p>\
              </div>\
            </div>\
          </div>";
}
