const Articles = require("./../model/articles");
exports.updateArticle = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);
    article.title = req.body.title;
    article.content = req.body.content;
    await article.save();
    res.json();
  } catch (err) {
    if (err) console.log(err);
    res.send(err);
    return;
  }
};
