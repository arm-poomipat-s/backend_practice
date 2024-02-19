const express = require("express");
const router = express.Router();

const {
  getHospitals,
  getHospital,
  createHospital,
  updateHospital,
  deleteHospital,
} = require("../controllers/hospitals");

router.route('/').get(getHospitals).post(createHospital);
router.route('/:id').get(getHospital).patch(updateHospital).delete(deleteHospital);

module.exports = router;

