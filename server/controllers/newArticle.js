const Articles = require("../model/articles");

exports.postNewArticle = async (req, res) => {
  const { title, content } = req.body;
  console.log(req.body)
  try {
    await Articles.create({ title, content });
    res.status(201)
    Articles.save()
  } catch (err) {
    res.send(err);
  }
};
