/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
if(localStorage.cart){
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  state.cart = new Cart(cartItems);
  // state.cart = new Cart(JSON.parse(localStorage.cart));
  state.cart.updateCounter(); //from DEMO
  updateCartPreview(); //from DEMO
} else {
  state.cart = new Cart([]); //from DEMO
}


// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    let selectedOption = document.createElement('option');
    selectedOption.textContent = state.allProducts[i].name;
    selectElement.appendChild(selectedOption);
    selectedOption.value = state.allProducts[i].name;

  }
  const inputElement = document.getElementById('quantity');
  let selectedQuantity = inputElement.value;
  

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...

  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let selectedItem = document.getElementById('items').value;
  // TODO: get the quantity
  let selectedItemQuantity = document.getElementById('quantity').value;
  if(selectedItemQuantity > 0){
    state.cart.addItem(selectedItem,selectedItemQuantity);
  }
  // TODO: using those, add one item to the Cart
  // let newCartItem = new CartItem(selectedItem, selectedItemQuantity);
  // state.cart.items.push(newCartItem);
  // return [selectedItem, selectedItemQuantity];
  // return [document.getElementById('items').value, document.getElementById('quantity').value];
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let selectedItem = document.getElementById('items').value;
  let selectedItemQuantity = document.getElementById('quantity').value;

  // TODO: Add a new element to the cartContents div with that information
  let cartElement = document.getElementById('cartContents');
  let cartPreview = document.createElement('ol');
  let cartItemPreview = document.createElement('li')
  if(selectedItemQuantity > 0){
    cartElement.appendChild(cartPreview);
    cartPreview.appendChild(cartItemPreview);
  }
  // cartPreview.textContent = `${document.getElementById('items').value} ${document.getElementById('quantity').value}`;
  cartPreview.textContent = `${selectedItem} ${selectedItemQuantity}`;
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
