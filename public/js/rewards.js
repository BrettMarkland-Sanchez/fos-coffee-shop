const checkoutEl = document.querySelector("#checkoutForm");
const userPayment = document.querySelector("#paymentForRewards");

checkoutEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  // grab price and calculate rewards
  const rewards = dollarToRewards(userPayment.value);
  const data = { rewards };

  let cart = JSON.parse(sessionStorage.getItem('cart'))
  cart = []
  sessionStorage.setItem('cart', JSON.stringify(cart));
  location.reload()

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
// let rewardsToDollar = (points) => {
//   // rounds points down to every 10 points
//   let pointsRounded = Math.floor(points / 10) * 10;
//   let pointsRemaining = points - pointsRounded;
//   let dollarAmount = pointsRounded / 10;

//   points = pointsRemaining;

//   return [points, dollarAmount];
// };