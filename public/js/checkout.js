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