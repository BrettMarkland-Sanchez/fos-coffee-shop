// Save data to sessionStorage for cart contents
// Add the item and favorite button nodes on the menu page each to an array
let menu = document.getElementsByClassName('add-cart');
let favorites = document.getElementsByClassName('add-favorite');

// Loop through each item in menu to add listeners for adding to cart object
for (item of menu) {
    item.onclick = function () {
        // IF cart exists, add to it -- ELSE create new cart then add to it
        if (sessionStorage.getItem('cart')) {
            let cart = sessionStorage.getItem('cart');
            cart = JSON.parse(cart);
            // IF item present in cart, increment quantity(value) -- ELSE add item(key) to cart
            value = item.value 
            name = item.id
            console.log({value, name})
            cart.push({value, name})
            cart = JSON.stringify(cart);
            sessionStorage.setItem('cart', cart);
        } else {
            let cart = [];
            value = item.value 
            name = item.id
            cart.push({value}, {name});
            cart = JSON.stringify(cart);
            sessionStorage.setItem('cart', cart);
        }
    }
}

// Loop through each item in favorites to add listeners for adding to favorites table
// Testing shows id in window alert for now
for (item of favorites) {
    let productId = item.parentNode.id;
    item.onclick = function (productId) {
        alert(`favorite item id: ${productId}`)
    }
}