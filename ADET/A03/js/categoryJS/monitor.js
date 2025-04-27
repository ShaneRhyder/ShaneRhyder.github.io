var monitorName = [
  "Nvision 165hz/180hz",
  "Koorui 4K 27\" IPS",
  "Dell S2721HN/S2421HN",
  "MSI FHD IPS Monitor",
  "ROG 240hz G-SYNC",
  "ROG STRIX XG49VQ",
  "UltraGear 4K 23.5\"",
  "Xiaomi G27i",
  "MSI 321UPX OLED"
];
var monitorPrice = [
  "$229.99",
  "$349.99",
  "$229.99",
  "$179.99",
  "$499.99",
  "$1,199.99",
  "$599.99",
  "$249.99",
  "$1,299.99"
];
var monitorPath = [
  "monitor/mt1.webp",
  "monitor/mt2.webp",
  "monitor/mt3.jpg",
  "monitor/mt4.jpg",
  "monitor/mt5.jpg",
  "monitor/mt6.jpg",
  "monitor/mt7.jpg",
  "monitor/mt8.jpg",
  "monitor/mt9.jpg"
];

for (var i = 0; i < monitorName.length; i++) {

  var monitorContainer = document.getElementById("monitor");

  monitorContainer.innerHTML +=
    "<div class=\"col-6 col-sm-4 col-md-3 product-card\">\
        <div class=\"card my-3 rounded-4\">\
          <img src=\"img/"+ monitorPath[i] + "\" class=\"card-img-top\">\
          <div class=\"card-body\">\
            <h5 class=\"card-title\">"+ monitorPrice[i] + "</h5>\
            <p class=\"card-text text-truncate\">"+ monitorName[i] + "</p>\
          </div>\
        </div>\
      </div>";
}