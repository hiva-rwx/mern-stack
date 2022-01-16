const mongoose = require("mongoose");

const SchemaDocs = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

const Articles = mongoose.model("Articles", SchemaDocs);

module.exports = Articles;
