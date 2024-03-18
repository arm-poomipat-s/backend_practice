const express = require("express");
const router = express.Router();

const { getAllCustomers } = require("../controllers/Customer");

router.route("/").get(getAllCustomers);

module.exports = router;
