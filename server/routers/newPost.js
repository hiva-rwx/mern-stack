const express = require("express");

const { postNewArticle } = require("./../controllers/newArticle");

const router = express.Router();

router.post("/", postNewArticle);

module.exports = router;
