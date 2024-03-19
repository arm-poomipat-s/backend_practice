const express = require("express");
const router = express.Router();

const { getAllManagers, createManager, updateManager, deleteManager } = require("../controllers/Manager");

router.route("/").get(getAllManagers).post(createManager)

router.route("/:id").put(updateManager).delete(deleteManager);

module.exports = router;
