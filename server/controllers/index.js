const Articles = require("../model/articles");

exports.getIndex = async (req, res) => {
  try {
    const articles = await Articles.find();
    res.send(articles);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await Articles.findByIdAndRemove({ _id: req.params.id });
    res.status(200);
  } catch (err) {
    // res.send(err);
    console.log(err);
  }
};
