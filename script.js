class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProducts() {
    console.log(`The name of the product is ${this.name}`);
    console.log(`The price is $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("SSD", 100.0);

product1.displayProducts();
const total = product1.calculateTotal(salesTax);
console.log(`The total price of everything is ${total.toFixed(2)}`);
