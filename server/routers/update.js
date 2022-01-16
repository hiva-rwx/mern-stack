const express = require("express");

const { updateArticle } = require("./../controllers/update");

const router = express.Router();

router.put("/:id", updateArticle);

module.exports = router;
