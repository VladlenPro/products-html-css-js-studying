//import {Product} from "../Modules/product.js";
//const Product =require("../Modules/product.js"); 


// const Product = require('../Modules/product');
// const conProducts = new Product();
//import {default as Product}  from '../Modules/product.js';
//import * as product from '../Modules/product.js';
//let Product = product.default;


function Product(name, brand, price, isFood, qty){
    this.name=name;
    this.brand=brand;
    this.price=price;
    this.isFood=isFood;
    this.qty=qty;
  }
let product1 = new Product("Coke", "Coca-Kola", 8.90, true, 20);
let product2 = new Product("Coke", "Pepsi", 7.50, true, 30);
let product3 = new Product("Milk", "Strauss", 5.90, true, 15);
let product4 = new Product("Milk", "Tara", 5.90, true, 5);
let product5 = new Product("ToothBrush", "Colgate", 15, false, 50);
let product6 = new Product("shampoo", "Pinuk", 10, false, 45);
let product7 = new Product("SaltCookies", "Abadi", 17.40, true, 23);
let product8 = new Product("PesekZenab", "Elite", 22, true, 37);
let product9 = new Product("YellowCheese","Tenuva", 25, true, 13);
let product10 = new Product("Lighter", "Clipper", 7, false, 28);
//console.log(product1);

let products =[];
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

function feelDiv(product){
    let text;

    text =`<div class="productDiv1">
    ${product.name}
        <br>
        ${product.brand}
        <br>
        ${product.price}
        <br>
        ${product.isFood}
        <br>
        ${product.qty}
        </div>`;
    return text;
}
let items =[];

products.forEach(element => {
    items.push(feelDiv(element));
});

let itemsBox= document.getElementById('items');
itemsBox.innerHTML =items.join("");
console.log(itemsBox.innerHTML);