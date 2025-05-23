import express from "express";
import ArticleController from "../controllers/article.controller";
import { authenticate, loadUser } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", authenticate, loadUser, async (req, res) => {
  await ArticleController.getArticles(req, res);
});

export default router;
