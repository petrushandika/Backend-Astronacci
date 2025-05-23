import express from "express";
import ContentController from "../controllers/content.controller";
import { authenticate, loadUser } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", authenticate, loadUser, async (req, res) => {
  await ContentController.getContents(req, res);
});

export default router;
