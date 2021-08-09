// import dependency
const router = require("express").Router();

// support
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./profileRoutes");
const menuRoutes = require("./menuRoutes");
const loginRoutes = require("./loginRoutes");
const signupRoutes = require("./signupRoutes");
const checkoutRoutes = require("./checkoutRoutes");
const apiRoutes = require("./api");

// router pathing
router.use("/", homeRoutes);
router.use("/profile", userRoutes);
router.use("/menu", menuRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/api", apiRoutes);

// failure return
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
