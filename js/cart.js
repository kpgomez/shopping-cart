/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  state.cart.updateCounter();
}


// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // tableBody.removeChild(tableRow); //opposite of appendChild
  const tableRows = document.querySelectorAll('tr');

  for(let i = 0; i < tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
    }
  }
} 

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.querySelector("tbody");

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < state.cart.items.length; i++) {
    let cell = document.createElement("tr");
    
    let deleteLink = document.createElement("button");
    deleteLink.classList.add('deleteButton');
    deleteLink.id = i;
    deleteLink.textContent = "x";
    cell.appendChild(deleteLink);
    
    let cellQuantity = document.createElement("td");
    cellQuantity.textContent = state.cart.items[i].quantity;
    cell.appendChild(cellQuantity);
    
    let cellProduct = document.createElement("td");
    cellProduct.textContent = state.cart.items[i].product;
    cell.appendChild(cellProduct);
    
    tableBody.appendChild(cell);
  }

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // let xClick = event.target.innerText;
  // if(xClick){
  //   this.cart.removeItem();

  let targetId = event.target.id;
  let deleteButtons = document.querySelectorAll('deleteButton');
  for (let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', removeItemFromCart);
  }
  state.cart.removeItem(targetId);
  
  // TODO: Save the cart back to local storage
  state.cart.saveToLocalStorage();
  
  // TODO: Re-draw the cart table
  renderCart();
  }




// This will initialize the page and draw the cart on screen
renderCart();
