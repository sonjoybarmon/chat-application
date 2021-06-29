const express = require("express");
const { getUser } = require("../controller/userController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// login page

router.get("/", decorateHtmlResponse("User"), getUser);

module.exports = router;
