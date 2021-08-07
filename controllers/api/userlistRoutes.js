const router = require("express").Router();
const { User } = require("../../models");

//get user route for testing
router.get("/", async (req,res) => {
  try{
    
  } catch(err){
    res.status(500).json(err);
  }
})
// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// rewards
router.put("/rewards", async (req, res) => {
  if (req.session.loggedIn) {
    const body = { ...req.body };
    const userData = await User.findOne({ where: { id: req.session.userId } });
    if (body.rewards) {
      console.log("USER:", userData);
      body.rewards = parseFloat(body.rewards) + parseFloat(userData.rewards);
      console.log("UPDATE BODY");
      await User.update(body, { where: { id: req.session.userId } });
      console.log("SAVE DATA");
      await userData.save();
      console.log("DONE");
    }
    res.sendStatus(200);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
