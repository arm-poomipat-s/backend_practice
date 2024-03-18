const express = require("express");
const router = express.Router();

const { getAllManagers } = require("../controllers/Manager");

router.route("/").get(getAllManagers);

module.exports = router;
