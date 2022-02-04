const Articles = require("../model/articles");

exports.postNewArticle = async (req, res) => {
  const { title, content } = req.body;
  try {
    // await Articles.create({ title, content });
    const newArticle = new Articles({ title: title, content: content });
    await newArticle.save();
    res.status(201).json({ message: "article created" });
  } catch (err) {
    if (err) console.log(err);
    res.send(err);
    return;
  }
};
