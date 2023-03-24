'use strict';

// State object keeps track of the application state (all available products and current state of the user's cart)
const state = {
  allProducts: [],
  cart: null,
};

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  // let nextCartItem = new CartItem(addSelectedItemToCart[0], addSelectedItemToCart[1]);
  // state.cart.items.push(nextCartItem);
  let nextCartItem = new CartItem(product, quantity);
  this.items.push(nextCartItem);
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  let cart = JSON.stringify(this.items);
  localStorage.setItem('cart', cart);
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  // should we implement findIndex() and splice()
  // let removedItem = this.items[0].product
  // let removedItemIndex = this.items.findIndex(removedItem);

  //define item to be removed removedItem = state.cart.items.product
  //loop over array
  //find index of item state.cart.items.findIndex(removedItem)
  //pass index into splice()
  

};

Cart.prototype.updateCounter = function() {
  // TODO: Update the cart count in the header nav with the number of items in the Cart
  let cartCount = document.getElementById('itemCount');
  
  let totalItems = 0;
  for(let i = 0; i < this.items.length; i++){
    totalItems += parseInt(this.items[i].quantity);
    // console.log(typeof(totalItems));
  }
  // console.log(totalItems);
  cartCount.textContent = ` (${totalItems})`;
}

// CartItem constructor
const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
};

function generateCatalog() {
  let bag = new Product('assets/bag.jpg', 'Bag');
  let banana = new Product('assets/banana.jpg', 'Banana');
  let bathroom = new Product('assets/bathroom.jpg', 'Bathroom');
  let boots = new Product('assets/boots.jpg', 'Boots');
  let breakfast = new Product('assets/breakfast.jpg', 'Breakfast');
  let bubblegum = new Product('assets/bubblegum.jpg', 'Bubblegum');
  let chair = new Product('assets/chair.jpg', 'Chair');
  let cthulu = new Product('assets/cthulhu.jpg', 'Cthulhu');
  let dogDuck = new Product('assets/dog-duck.jpg', 'Dog-Duck');
  let dragon = new Product('assets/dragon.jpg', 'Dragon');
  let pen = new Product('assets/pen.jpg', 'Pen');
  let petSweep = new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  let scissors = new Product('assets/scissors.jpg', 'Scissors');
  let shark = new Product('assets/shark.jpg', 'Shark');
  let sweep = new Product('assets/sweep.png', 'Sweep');
  let tauntaun = new Product('assets/tauntaun.jpg', 'Taun-Taun');
  let unicorn = new Product('assets/unicorn.jpg', 'Unicorn');
  let waterCan = new Product('assets/water-can.jpg', 'Water Can');
  let wineGlass = new Product('assets/wine-glass.jpg', 'Wine Glass');
  state.allProducts.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
