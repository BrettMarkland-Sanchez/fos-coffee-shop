const router = require("express").Router();
const { User, Favorite, Product } = require("../../models");



//get user route for testing
router.get("/", async (req,res) => {
  try{
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch(err){
    res.status(500).json(err);
  }
})
//END GET USER

//get one user
router.get("/:id", async (req,res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    res.status(200).json(userData);
  } catch(err){
    res.status(500).json(err);
  }
});

//get user favorites
router.get("/favorites/:id", async (req,res) => {
  console.log('ok');
  try {

    const userFavData = await User.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if(!userFavData){
      res.status(404).json({message:'No user found'});
      return;
    }


    res.status(200).json(userFavData);
  } catch(err) {
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
//END CREATE USER

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
//END LOGIN POST

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
//END LOGOUT POST

//update user
router.put("/", async (req,res) => {
  if (req.session.loggedIn) {
    const body = { ...req.body };
    const userData = await User.findOne({ where: { id: req.session.userId } });
    //need to add update logic
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
