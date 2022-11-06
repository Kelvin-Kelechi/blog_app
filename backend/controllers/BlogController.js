const mongoose = require("mongoose");
const Blog = require("../models/BlogModel");

const GET_BLOG = async (req, res) => {
  const blog = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blog);
};
const GET_A_BLOG = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no blog yet" });
  }
  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ error: "no blog yet" });
  }
  res.status(200).json(blog);
};
const POST_BLOG = async (req, res) => {
  const { title, snippet, body } = req.body;
  try {
    const blog = await Blog.create({ title, snippet, body });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
  }
};
const DELETE_BLOG = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no blog yet" });
  }
  const blog = await Blog.findByIdAndDelete(id);

  if (!blog) {
    return res.status(404).json({ error: "no blog yet" });
  }
  res.status(200).json(blog);
};
const PATCH_BLOG = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no blog yet" });
  }
  const blog = await Blog.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!blog) {
    return res.status(404).json({ error: "no blog yet" });
  }
  res.status(200).json(blog);
};

module.exports = {
  GET_BLOG,
  GET_A_BLOG,
  POST_BLOG,
  DELETE_BLOG,
  PATCH_BLOG,
};
