const express = require("express");
const cors = require('cors');

const getIndex = require("./routers/index");
const newPost = require("./routers/newPost");
const update = require("./routers/update");

const app = express();
require("./connect");

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(getIndex);
app.use("/new-article", newPost);
app.use("/update-article", update);

app.listen("8000", () => {
  console.log(`server is running on port 8000`);
});
