var products = [
    {
        "category": "Drinks",
        "contents": [
            { "isAvailable": true, "name": "Coke", "code": "CK", "sizes": [{ "name": "regular", "code": "RG", "price": 20 }, { "name": "medium", "code": "MD", "price": 30 }, { "name": "large", "code": "LG", "price": 38 }] },
            { "isAvailable": true, "name": "Sprite", "code": "SPRT", "sizes": [{ "name": "regular", "code": "RG", "price": 20 }, { "name": "medium", "code": "MD", "price": 30 }, { "name": "large", "code": "LG", "price": 38 }] },
            { "isAvailable": true, "name": "Royal", "code": "RYL", "sizes": [{ "name": "regular", "code": "RG", "price": 20 }, { "name": "medium", "code": "MD", "price": 30 }, { "name": "large", "code": "LG", "price": 38 }] },
            { "isAvailable": true, "name": "Water", "code": "WTR", "sizes": [{ "name": "500ml", "code": "500ML", "price": 10 }, { "name": "1L", "code": "1L", "price": 18 }] },
            { "isAvailable": true, "name": "Pepsi", "code": "PEPS", "sizes": [{ "name": "regular", "code": "RG", "price": 20 }, { "name": "medium", "code": "MD", "price": 30 }, { "name": "large", "code": "LG", "price": 38 }] },
            { "isAvailable": true, "name": "Fanta", "code": "FNT", "sizes": [{ "name": "regular", "code": "RG", "price": 20 }, { "name": "medium", "code": "MD", "price": 30 }, { "name": "large", "code": "LG", "price": 38 }] },
            { "isAvailable": true, "name": "Iced Tea", "code": "ICT", "sizes": [{ "name": "regular", "code": "RG", "price": 18 }, { "name": "large", "code": "LG", "price": 28 }] },
            { "isAvailable": true, "name": "Lemonade", "code": "LMN", "sizes": [{ "name": "regular", "code": "RG", "price": 20 }, { "name": "large", "code": "LG", "price": 30 }] },
            { "isAvailable": true, "name": "Energy Drink", "code": "ENGY", "sizes": [{ "name": "can", "code": "CAN", "price": 35 }] },
            { "isAvailable": true, "name": "Chocolate Milk", "code": "CHOM", "sizes": [{ "name": "small", "code": "SML", "price": 20 }, { "name": "large", "code": "LRG", "price": 35 }] }
        ]
    },
    {
        "category": "Canned Foods",
        "contents": [
            { "isAvailable": true, "name": "Corned Beef", "code": "CRNBF", "price": 35 },
            { "isAvailable": true, "name": "Spam", "code": "SPM", "price": 90 },
            { "isAvailable": true, "name": "Tuna", "code": "TUNA", "price": 30 },
            { "isAvailable": true, "name": "Pork and Beans", "code": "PBEANS", "price": 25 },
            { "isAvailable": true, "name": "Chicken Afritada", "code": "CHICKAFR", "price": 50 },
            { "isAvailable": true, "name": "Beef Stew", "code": "BFS", "price": 60 },
            { "isAvailable": false, "name": "Mackerel", "code": "MCKRL", "price": 28 },
            { "isAvailable": true, "name": "Vienna Sausage", "code": "VNSG", "price": 20 },
            { "isAvailable": true, "name": "Luncheon Meat", "code": "LNMT", "price": 70 },
            { "isAvailable": true, "name": "Sardines", "code": "SRDNS", "price": 18 }
        ]
    },
    {
        "category": "Pasta",
        "contents": [
            { "isAvailable": true, "name": "Lasagna", "code": "LSGN", "price": 85 },
            { "isAvailable": true, "name": "Carbonara", "code": "CRBN", "price": 75 },
            { "isAvailable": true, "name": "Baked Ziti", "code": "BK ZTI", "price": 85 },
            { "isAvailable": true, "name": "Mac and Cheese", "code": "MAC", "price": 60 },
            { "isAvailable": true, "name": "Fettuccine Alfredo", "code": "FTT", "price": 75 },
            { "isAvailable": true, "name": "Pesto", "code": "PST", "price": 70 },
            { "isAvailable": true, "name": "Spaghetti Meatballs", "code": "SPMB", "price": 90 },
            { "isAvailable": true, "name": "Seafood Pasta", "code": "SFD", "price": 95 },
            { "isAvailable": true, "name": "Tuna Pasta", "code": "TNP", "price": 70 }
        ]
    },
    {
        "category": "Snacks",
        "contents": [
            { "isAvailable": true, "name": "Chips", "code": "CHPS", "sizes": [{ "name": "small", "code": "SML", "price": 15 }, { "name": "medium", "code": "MDM", "price": 25 }, { "name": "large", "code": "LRG", "price": 38 }] },
            { "isAvailable": true, "name": "Cookies", "code": "CKS", "sizes": [{ "name": "box", "code": "BOX", "price": 50 }, { "name": "pack", "code": "PKG", "price": 20 }] },
            { "isAvailable": true, "name": "Fries", "code": "FRYS", "sizes": [{ "name": "small", "code": "SML", "price": 25 }, { "name": "medium", "code": "MDM", "price": 35 }, { "name": "large", "code": "LRG", "price": 50 }] },
            { "isAvailable": true, "name": "Nachos", "code": "NCHS", "sizes": [{ "name": "regular", "code": "RGL", "price": 35 }] },
            { "isAvailable": true, "name": "Popcorn", "code": "PCRN", "sizes": [{ "name": "small", "code": "SML", "price": 20 }, { "name": "large", "code": "LRG", "price": 30 }] },
            { "isAvailable": true, "name": "Crackers", "code": "CRK", "sizes": [{ "name": "pack", "code": "PK", "price": 15 }] },
            { "isAvailable": true, "name": "Pretzels", "code": "PTZL", "sizes": [{ "name": "bag", "code": "BG", "price": 28 }] },
            { "isAvailable": true, "name": "Peanuts", "code": "PNT", "sizes": [{ "name": "100g", "code": "100G", "price": 15 }] },
            { "isAvailable": true, "name": "Chicharon", "code": "CHCH", "sizes": [{ "name": "small", "code": "SML", "price": 20 }] },
            { "isAvailable": true, "name": "Tortilla Chips", "code": "TCH", "sizes": [{ "name": "bag", "code": "BG", "price": 40 }] }
        ]
    },
    {
        "category": "Dairy",
        "contents": [
            { "isAvailable": true, "name": "Milk", "code": "MLK", "sizes": [{ "name": "500ml", "code": "500ML", "price": 25 }, { "name": "1L", "code": "1L", "price": 48 }] },
            { "isAvailable": true, "name": "Cheese", "code": "CHS", "sizes": [{ "name": "100g", "code": "100G", "price": 35 }, { "name": "200g", "code": "200G", "price": 65 }] },
            { "isAvailable": true, "name": "Yogurt", "code": "YGT", "sizes": [{ "name": "small", "code": "SML", "price": 18 }, { "name": "medium", "code": "MDM", "price": 30 }] },
            { "isAvailable": true, "name": "Butter", "code": "BTR", "sizes": [{ "name": "250g", "code": "250G", "price": 65 }] },
            { "isAvailable": true, "name": "Cream", "code": "CRM", "sizes": [{ "name": "250ml", "code": "250ML", "price": 35 }] },
            { "isAvailable": true, "name": "Ice Cream", "code": "ICRM", "sizes": [{ "name": "pint", "code": "PNT", "price": 75 }] }
        ]
    },
    {
        "category": "Bakery",
        "contents": [
            { "isAvailable": true, "name": "Bread", "code": "BRD", "price": 30 },
            { "isAvailable": true, "name": "Croissant", "code": "CRS", "price": 40 },
            { "isAvailable": true, "name": "Donut", "code": "DNT", "price": 25 },
            { "isAvailable": true, "name": "Muffin", "code": "MFN", "price": 30 },
            { "isAvailable": true, "name": "Ensaymada", "code": "ENS", "price": 30 },
            { "isAvailable": true, "name": "Pandesal", "code": "PNDS", "price": 15 },
            { "isAvailable": true, "name": "Baguette", "code": "BGTT", "price": 45 }
        ]
    },
    {
        "category": "Condiments",
        "contents": [
            { "isAvailable": true, "name": "Ketchup", "code": "KTCH", "price": 20 },
            { "isAvailable": true, "name": "Mayonnaise", "code": "MYO", "price": 28 },
            { "isAvailable": true, "name": "Soy Sauce", "code": "SOY", "price": 12 },
            { "isAvailable": true, "name": "Vinegar", "code": "VNGR", "price": 12 },
            { "isAvailable": true, "name": "Hot Sauce", "code": "HTSC", "price": 30 },
            { "isAvailable": true, "name": "Fish Sauce", "code": "FSHSC", "price": 15 }
        ]
    },
    {
        "category": "Frozen Foods",
        "contents": [
            { "isAvailable": true, "name": "Hotdog", "code": "HTDG", "price": 45 },
            { "isAvailable": true, "name": "Frozen Nuggets", "code": "NUG", "price": 65 },
            { "isAvailable": true, "name": "Longganisa", "code": "LNG", "price": 55 },
            { "isAvailable": true, "name": "Tocino", "code": "TCN", "price": 60 },
            { "isAvailable": true, "name": "Siomai", "code": "SMI", "price": 50 }
        ]
    },
    {
        "category": "Instant Noodles",
        "contents": [
            { "isAvailable": true, "name": "Lucky Me Pancit Canton Original", "code": "LMPCO", "price": 14 },
            { "isAvailable": true, "name": "Lucky Me Pancit Canton Calamansi", "code": "LMPCAL", "price": 14 },
            { "isAvailable": true, "name": "Lucky Me Pancit Canton Chilimansi", "code": "LMPCCM", "price": 14 },
            { "isAvailable": true, "name": "Lucky Me Pancit Canton Extra Hot", "code": "LMPCXH", "price": 14 },
            { "isAvailable": true, "name": "Lucky Me Instant Mami Beef", "code": "LMIMBF", "price": 10 },
            { "isAvailable": true, "name": "Lucky Me Instant Mami Chicken", "code": "LMIMCH", "price": 10 },
            { "isAvailable": true, "name": "Nissin Ramen Beef", "code": "NSNRMBF", "price": 16 },
            { "isAvailable": true, "name": "Nissin Ramen Seafood", "code": "NSNRMSF", "price": 16 },
            { "isAvailable": true, "name": "Payless Xtra Big Chicken", "code": "PXLCH", "price": 18 },
            { "isAvailable": true, "name": "Payless Xtra Big Hot Chili", "code": "PXLHC", "price": 18 },
            { "isAvailable": true, "name": "Quickchow Beef", "code": "QCWB", "price": 10 },
            { "isAvailable": true, "name": "Quickchow Chicken", "code": "QCWC", "price": 10 },
            { "isAvailable": true, "name": "Quickchow Shrimp", "code": "QCWS", "price": 10 },
            { "isAvailable": true, "name": "Maggi Chicken Noodles", "code": "MGGCN", "price": 12 },
            { "isAvailable": true, "name": "Maggi Curry Noodles", "code": "MGGCR", "price": 12 },
            { "isAvailable": true, "name": "Samyang Hot Chicken Ramen", "code": "SMYNGHC", "price": 50 },
            { "isAvailable": true, "name": "Samyang 2x Spicy Ramen", "code": "SMYNG2X", "price": 60 },
            { "isAvailable": true, "name": "Ottogi Jin Ramen Mild", "code": "OTTJRM", "price": 45 },
            { "isAvailable": true, "name": "Ottogi Jin Ramen Spicy", "code": "OTTJRS", "price": 45 },
            { "isAvailable": true, "name": "Indomie Mi Goreng", "code": "INDMG", "price": 17 }
        ]
    }

];

var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach((product, index) => {
        categoriesContainer.innerHTML += `
      <div onclick="loadProducts('`+ index + `')" class="card mx-1 custom-button p-3 text-center">
        <small>`+ product.category + `</small>
      </div>
    `;
    });
}

function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    var productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = `<div class="h1">` +
        products[categoryIndex].category +
        `</div>`;

    products[categoryIndex].contents.forEach(content => {
        if (content.sizes && content.sizes.length > 0) {
            content.sizes.forEach(size => {
                maincontainer.innerHTML += `
          <div onclick="addToReceipt('`+ size.price + `','` + content.code + size.code + `')" class="card mx-1 my-2 custom-button content p-3 text-center">
            <small>`+ content.name + ' ' + size.code + `</small>
          </div>
        `;
            });
        } else {
            maincontainer.innerHTML += `
        <div onclick="addToReceipt('`+ content.price + `','` + content.code + `')" class="card mx-1 my-2 custom-button content p-3 text-center">
          <small>`+ content.name + `</small>
        </div>
      `;
        }
    });
}

function removeItem(itemID) {
    var item = document.getElementById(itemID);
    item.remove();
}

function updateTotal(itemPrice) {
    total = parseFloat(total) - parseFloat(itemPrice);

    totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total;
}

function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);

    totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total;

    receiptContainer.innerHTML += `
    <div class="d-flex flex-row justify-content-between mb-1" id="`+ code + `">
        <div><small>`+ code + `</small></div>
        <div><small>`+ price + `</small></div>
        <div><button type="button" onclick="removeItem('`+ code + `'); updateTotal('` + price + `')"><small><i class="fas fa-trash"></i></button></small></div>
    </div>
    `;
}

loadCategories();
