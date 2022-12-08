const express = require("express");
const {
  createPost,
  getSpecificPost,
  getAllPosts,
} = require("../controllers/postBlog.controller");

const router = express.Router();

router.post("/newpost", createPost);

router.get("/getallpost", getAllPosts);

router.get("/getpost/:id", getSpecificPost);

module.exports = router;
