const express = require("express");
const { getImage } = require("../../controllers/booksController");
const router = express.Router();

router.route("/:id").get(getImage);

module.exports = router;
