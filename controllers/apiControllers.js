const User = require("../models/user");

/**********************get all users******************* */
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});

    if (!user) {
      return res.status(400).send("User not found!");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
/**********************get user by id******************* */
const getUserbyID = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById({ _id });

    if (!user) {
      return res.status(400).send("User not found!");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
/**********************add new user************************ */
const addNewUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

/**********************delete user************************ */
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User Not Found!");
    }
    res.send("User Removed" + user);
  } catch (err) {
    res.status(500).send(err);
  }
};

/*******************************Deposit cash ******** */
const depositCash = async (req, res) => {
  const { id, cash } = req.body;

  const update = { $inc: { cash: cash } };
  try {
    const user = await User.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send("User not found, unable to deposit cash");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
/*******************************Increase Credit ******** */
const increaseCredit = async (req, res) => {
  const { id, credit } = req.body;

  const update = { $inc: { credit: credit } };

  try {
    const user = await User.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send("User not found, Unable to update credit");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
/*******************************Withdraw cash ******** */
const withdrawCash = async (req, res) => {
  const { id, cash } = req.body;

  const update = { $inc: { cash: -1 * cash } };

  try {
    const getUser = await User.findById(id);
    console.log(getUser);
    if (getUser.cash - cash < 0) {
      return res.status(400).send("Not enough funds in your account!");
    }
    const user = await User.findByIdAndUpdate(_id, update, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send("User not found, Unable to withdraw cash");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

/*******************************Withdraw  credit******** */
const withdrawCredit = async (req, res) => {
  const { id, credit } = req.body;

  const update = { $inc: { credit: -1 * credit } };

  try {
    const getUser = await User.findById(id);
    if (getUser.credit - credit < 0) {
      return res.status(400).send("Not enough funds in your account!");
    }
    const user = await User.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

// /*******************************Transfer cash & credit******** */

const transferCash = async (req, res) => {
  const { from_id, cash, credit } = req.body;
};

// router.patch("/accounts/transfer/:type", async (req, res) => {
//   const { _id, cash, credit } = req.body;
//   //   if (!cash) {
//   //     cash = 0;
//   //   }
//   //   if (!credit) {
//   //     credit = 0;
//   //   }

//   console.log("withdraws", _id, cash, credit);

//   try {
//     const user = await User.findByIdAndUpdate(
//       _id,
//       { $inc: { cash: -1 * cash, credit: -1 * credit } },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

module.exports = {
  getAllUsers,
  deleteUser,
  getUserbyID,
  addNewUser,
  depositCash,
  increaseCredit,
  withdrawCash,
  withdrawCredit,
};
