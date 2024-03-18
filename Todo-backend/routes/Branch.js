const express = require("express");
const router = express.Router();

const { getAllBranchs } = require("../controllers/Branch");

router.route("/").get(getAllBranchs);

module.exports = router;
