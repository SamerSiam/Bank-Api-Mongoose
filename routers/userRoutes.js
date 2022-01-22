const express = require("express");
const {
  getAllUsers,
  deleteUser,
  getUserbyID,
  addNewUser,
  depositCash,
  increaseCredit,
  withdrawCash,
  withdrawCredit,
  transferCash,
  transferCredit,
} = require("../controllers/apiControllers");

const router = new express.Router();

/**********************get  users******************* */
router.get("/users", getAllUsers);
router.get("/users/:id", getUserbyID);

/**********************add new user************************ */
router.post("/users", addNewUser);

/**********************delete user by id************************ */
router.delete("/users/:id", deleteUser);

/*******************************Deposit cash & credit******** */

router.patch("/accounts/deposit/cash", depositCash);
router.patch("/accounts/deposit/credit", increaseCredit);

/*******************************Withdraw cash & credit******** */
router.patch("/accounts/withdraw/cash", withdrawCash);
router.patch("/accounts/withdraw/credit", withdrawCredit);

/*******************************Transfer cash & credit******** */
router.patch("/accounts/transfer/cash", transferCash);
router.patch("/accounts/transfer/credit", transferCredit);

module.exports = router;
