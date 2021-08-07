/*
const checkoutEl = document.querySelector("#checkout");
const userPayment = document.querySelector("#payment");

checkoutEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("click");
  // grab price and calculate rewards
  const rewards = dollarToRewards(userPayment.value);
  const data = { rewards };
  // set up a fetch request to PUT aka update rewards, passing data to the server
  const response = await fetch("/api/users/rewards", {
    method: "PUT",
    headers: { "Content-Type": "application/JSON" },
    body: JSON.stringify(data),
  });
});

// generates rewards based on amount of dollar spent rounded up to the nearest dollar
let dollarToRewards = (dollarAmount) => {
  // round up the dollar amount and return as point value
  let points = Math.ceil(dollarAmount);

  return points;
};

// converts points to dollar amount
let rewardsToDollar = (points) => {
  // rounds points down to every 10 points
  let pointsRounded = Math.floor(points / 10) * 10;
  let pointsRemaining = points - pointsRounded;
  let dollarAmount = pointsRounded / 10;

  points = pointsRemaining;

  return [points, dollarAmount];
};
*/

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