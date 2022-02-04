const express = require("express");

const { getIndex, deleteArticle } = require("./../controllers/index");

const router = express.Router();

router.get('/',getIndex);
router.delete("/:id", deleteArticle);

module.exports = router;
