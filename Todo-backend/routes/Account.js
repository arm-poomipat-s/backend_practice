const express = require("express");
const router = express.Router();

const { getAllAccounts } = require("../controllers/Account");

router.route("/").get(getAllAccounts);

module.exports = router;
