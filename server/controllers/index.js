const Articles = require("../model/articles");

exports.getIndex = async (req, res) => {
  try {
    const articles = await Articles.find();
    res.send(articles);
  } catch (err) {
    if (err) console.log(err);
    res.send(err);
    return;
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await Articles.findByIdAndDelete(req.params.id, (err, doc) => {
      if (err) console.log(err);
      res.json(doc);
    });
  } catch (err) {
    res.send(err);
    return;
  }
};
