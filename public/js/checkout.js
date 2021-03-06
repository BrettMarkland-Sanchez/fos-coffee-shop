creditCardButton = document.getElementById('creditCardButton')

payInStoreButton = document.getElementById('payInStoreButton')

creditCardInput = document.getElementById('creditCardInput')

creditCardInputExtras = document.getElementById('creditCardInputExtras')

pmtCancelCardButton = document.getElementById('pmtCancelCardButton')

pmtCancelStoreButton = document.getElementById('pmtCancelStoreButton')

creditCardButton.onclick = () => {
    creditCardButton.setAttribute('style', "display: none")
    payInStoreButton.setAttribute('style', "display: none")
    creditCardInput.removeAttribute("style")
    pmtCancelCardButton.removeAttribute("style")
    creditCardInputExtras.removeAttribute("style")
}

pmtCancelCardButton.onclick = () => {
    creditCardInput.setAttribute('style', "display: none")
    pmtCancelCardButton.setAttribute('style', "display: none")
    creditCardInputExtras.setAttribute('style', "display: none")
    payInStoreButton.removeAttribute("style")
    creditCardButton.removeAttribute("style")
}

payInStoreButton.onclick = () => {
    creditCardButton.setAttribute('style', "display: none") 
    payInStoreButton.setAttribute('style', "display: none") 
    payInStore.removeAttribute("style") 
    pmtCancelStoreButton.removeAttribute("style")
}

pmtCancelStoreButton.onclick = () => {
    payInStore.setAttribute('style', "display: none")
    pmtCancelStoreButton.setAttribute('style', "display: none")
    payInStoreButton.removeAttribute("style")
    creditCardButton.removeAttribute("style")
}

const buildCards = () => {

    const myCart = JSON.parse(sessionStorage.getItem('cart'))
    
    for (let i = 0; i < myCart.length; i++) {
    
    const myHolding = document.getElementById('myHolding')
    
    const myCard = document.createElement("div");
    myCard.className = "card s6";
    myCard.id = myCart[i].name
    myCard.setAttribute('data-value', myCart[i].value)
    myHolding.appendChild(myCard)
    
    const myRow = document.createElement("div");
    myRow.className = "row";
    myCard.appendChild(myRow)
    
    const myImg = document.createElement("img");
    myImg.className = "center-align";
    myImg.src = `/assets/${myCart[i].filename}.jpg`
    myRow.appendChild(myImg)

    const myRowTwo = document.createElement("div");
    myRowTwo.className = "row ";
    myCard.appendChild(myRowTwo)

    const myItemLabel = document.createElement("div");
    myItemLabel.className = "item-label center-align item-buttons";
    myItemLabel.setAttribute('data-name', myCart[i].name)
    myItemLabel.innerText = `${myCart[i].name} | $${myCart[i].value}`
    myRowTwo.appendChild(myItemLabel)

    /*
    const myRowThree = document.createElement("div");
    myRowThree.className = "row item-buttons container ";
    myRowThree.setAttribute('data-name', myCart[i].name)
    myCard.appendChild(myRowThree)

    */

    const myRemoveButton = document.createElement("div");
    myRemoveButton.className = "waves-effect waves-light btn-small blue remove-cart center-align container";
    myRemoveButton.style.marginTop = '1em';
    myRemoveButton.innerText = 'Delete'
    myItemLabel.appendChild(myRemoveButton)
    }

}

const totalPayment = () => {
    const myCart = JSON.parse(sessionStorage.getItem('cart'))
    let priceArray = [];
    let grandTotal = 0;
    const myBill = document.getElementById('myBill')
    const paymentForRewards = document.getElementById('paymentForRewards')
    for (let i = 0; i < myCart.length; i++) {
        priceArray.push(parseFloat(myCart[i].value));
        grandTotal += priceArray[i];
    };
    if (grandTotal) {
        myBill.innerText = `Your Total Is: $${grandTotal.toFixed(2)}`;
        paymentForRewards.value = grandTotal.toFixed(2);
    }
    
};

    

    buildCards()
    totalPayment()

    document.addEventListener('click', (event) => {
        const element = event.target;
      
        if (element.matches('.remove-cart')) {
          const name = element.closest('.item-buttons').dataset.name; 
          const cart = JSON.parse(sessionStorage.getItem('cart'))
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === name) {
                cart.splice([i], 1)
                sessionStorage.setItem('cart', JSON.stringify(cart));
                location.reload()
                return
            }
          }
      };
    }
)

