const mongoose = require("mongoose");
const express = require("express");
const blog = require("./Model/blogModel");
const cors = require("cors");
const blogRoutes = require("./routes/blogs.routes.js");
const app = express();
const port = 3500;
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://hemant:hemant@cluster0.zm42fgw.mongodb.net/sampleDB?retryWrites=true&w=majority",
  (error) => {
    console.log("connected DB, error = ", error);
  }
);

app.use("/", blogRoutes);

app.listen(port, () => {
  console.log(`running server ${port}`);
});
