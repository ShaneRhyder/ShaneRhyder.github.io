var categories = [];
var products = [];

const getAllCategories = async () => {
    fetch(
        'http://localhost//repository/ShaneRhyder.github.io/ADET/A06/categories.php'
    )
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
        });
}

const getAllProducts = async (categoryID) => {
    const categoryData = {
        categoryID: categoryID
    };

    maincontainer.innerHTML = "";

    fetch(
        'http://localhost//repository/ShaneRhyder.github.io/ADET/A06/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        });
}

getAllCategories();

var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = "";

    categories.forEach((category) => {
        categoriesContainer.innerHTML += `
      <div onclick="loadCategoryHeader('`+ category.categoryName + `'); getAllProducts('` + category.categoryID + `')" class="card mx-1 custom-button p-3 text-center">
        <small>`+ category.categoryName + `</small>
      </div>
    `;
    });
}

function loadCategoryHeader(productCategory) {
    var productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = `<div class="h1">` + productCategory +
        `</div>`;
}

function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach(product => {
        maincontainer.innerHTML += `
        <div onclick="addToReceipt('`+ product.price + `','` + product.code + `')" class="card mx-1 my-2 custom-button content p-3 text-center">
          <small>`+ product.name + `</small>
        </div>
        `;
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
