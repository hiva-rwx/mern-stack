const mongoose = require("mongoose");

const coonectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost/articles")
      .then(() => {
        console.log("connect To Database");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
coonectDB()