/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}


// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // tableBody.removeChild(tableRow); //opposite of appendChild
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  // TODO: Find the table body
  let tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  
  // TODO: Iterate over the items in the cart
  for(let i = 0; i < state.cart.items.length; i++){
    
    // console.log(state.cart.items[i].product);
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    
    let removeData = document.createElement('td');
    tableRow.appendChild(removeData);
    // let removeX = document.createElement('a');
    // removeX.textContent = 'X';
    removeData.textContent = 'X';

    let itemData = document.createElement('td');
    tableRow.appendChild(itemData);
    itemData.textContent = state.cart.items[i].product;
    
    let quantityData = document.createElement('td');
    tableRow.appendChild(quantityData);
    quantityData.textContent = state.cart.items[i].quantity;
  }

  // TODO: Create a TR

  // TODO: Create a TD for the delete link, quantity,  and the item

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let xClick = event.target.innerText;

  if(xClick){
    this.cart.removeItem();
  }

  // TODO: Save the cart back to local storage
  state.cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  showCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
