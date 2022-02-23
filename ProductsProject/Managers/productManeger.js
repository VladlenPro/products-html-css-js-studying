//const Product = require("../Modules/product");
//import Product from "../Modules/product";

function Product(imgsrc, name, brand, price, isFood, qty) {
    this.imgsrc = imgsrc;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.isFood = isFood;
    this.qty = qty;
}
let itemsBox = document.getElementById('items');
let product1 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "Coke", "Coca-Kola", 8.90, true, 20);
let product2 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "Coke", "Pepsi", 7.50, true, 30);
let product3 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "Milk", "Strauss", 5.90, true, 15);
let product4 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "Milk", "Tara", 5.90, true, 5);
let product5 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "ToothBrush", "Colgate", 15, false, 50);
let product6 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "shampoo", "Pinuk", 10, false, 45);
let product7 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "SaltCookies", "Abadi", 17.40, true, 23);
let product8 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "PesekZenab", "Elite", 22, true, 37);
let product9 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "YellowCheese", "Tenuva", 25, true, 13);
let product10 = new Product("https://icon-library.com/images/pictures-icon-png/pictures-icon-png-6.jpg", "Lighter", "Clipper", 7, false, 28);
//console.log(product1);

let products = [];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);
products.push(product9);
products.push(product10);

function feelDiv(product) {
    let text;

    text = `<div class="card">
    <img src="${product.imgsrc}"/>
    <h1>${product.name}</h1>
    <h2>${product.brand}</h2>
    <p class="price">${product.price}$</p>
    <p>Some text about the jeans..</p>
    <p> Number of items: ${product.qty}</p>
    <p><button>Add to Cart</button></p>
    </div>`;
    return text;
}
let items = [];

products.forEach(element => {
    items.push(feelDiv(element));
});


itemsBox.innerHTML = items.join("");
console.log(itemsBox.innerHTML);