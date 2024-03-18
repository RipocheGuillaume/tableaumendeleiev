const express = require("express");
const controller = require("../controllers/controller.js");
const router = express.Router();

router.get("/", controller.displayIndex);

module.exports = router;
