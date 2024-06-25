const express = require("express");
const baseController = require("../controllers/baseController");
const router = express.Router();

/* GET home page. */
router.get("/", baseController.buildHome);

module.exports = router;
