import express from "express";
import {
  getMyPosts,
  getPostsBySearch,
  getPosts,
  createPosts,
  updatePosts,
  deletePost,
  likePost,
  getPost,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/myposts", getMyPosts);
router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePosts);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
