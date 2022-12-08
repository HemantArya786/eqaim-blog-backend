const blog = require("../Model/blogModel");

const createPost = async (req, res) => {
  const newBlog = blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    createdAt: Date.now(),
  });
  await newBlog.save();
  res.json({ ...newBlog, message: "Post Created successfully" });
};

const getAllPosts = async (req, res) => {
  const newBlog = await blog.find({}).sort({ createdAt: -1 });
  res.json(newBlog);
  console.log(newBlog);
};

const getSpecificPost = async (req, res) => {
  const newBlog = await blog.findOne({ _id: req.params.id });
  res.json(newBlog);
};

module.exports = { createPost, getAllPosts, getSpecificPost };
