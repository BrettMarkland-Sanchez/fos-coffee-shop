module.exports = {
    // generates rewards based on amount of dollar spent rounded up to the nearest dollar
    rewards_generator: (dollarAmount) => {
      // round up the dollar amount and return as point value
      let points = Math.ceil(dollarAmount)
    
      return points;
    },
    // converts points to dollar amount
    rewards_converter: (points) => {
      // rounds points down to every 10 points
      let pointsRounded = (Math.floor(points/10))*10;
      let pointsRemaining = points - pointsRounded;
      let dollarAmount = pointsRounded/10;

      points = pointsRemaining;

      return [points, dollarAmount];
    },
};