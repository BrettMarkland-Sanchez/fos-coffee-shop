// Always gets the cart from sessionStorage or returns an empty array if null
const getCart = () => {
  return JSON.parse(sessionStorage.getItem('cart')) || [];
};

// Function to update the HTML within the cart
const renderCart = (cartData) => {
  // Update contents of cart using `cartData`
};

// Event delegation to handle both click events in one listener
document.addEventListener('click', (event) => {
  const element = event.target;

  if (element.matches('.add-cart')) {
    const name = element.closest('.item-buttons').dataset.name; // grabs the id from the parent TODO: maybe use data-attributes
    const value = element.closest('.card').dataset.value; // TODO: maybe use data-attributes
    const cart = getCart(); // concat copies the cart array and does not modify it, prevents potential side effect
    cart.push({value, name})
    sessionStorage.setItem('cart', JSON.stringify(cart));
    renderCart(cart);
  }

  if (element.matches('.add-favorite')) {
    const id = element.closest('.item-buttons').id; // TODO: maybe use data-attributes
    console.log(`favorite item id: ${id}`); 
  }
});

