const express = require("express");
const router = express.Router();
const {
  GET_BLOG,
  GET_A_BLOG,
  DELETE_BLOG,
  PATCH_BLOG,
  POST_BLOG,
} = require("../controllers/BlogController");

router.get("/", GET_BLOG);
router.get("/:id", GET_A_BLOG); 
router.post("/", POST_BLOG);
router.delete("/:id", DELETE_BLOG);
router.patch("/:id", PATCH_BLOG);
 
module.exports = router;
