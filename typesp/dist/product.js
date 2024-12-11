"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `product id${this.id},name${this.name},price${this.price}`;
    }
}
const prod = new Product(1, "laptop", 500000);
console.log(prod.displayDetails());
