import express from "express";
import UserController from "../controllers/user.controller";
import { authenticate, loadUser } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/me", authenticate, loadUser, async (req, res) => {
  await UserController.getLoggedUser(req, res);
});

router.post("/upgrade", authenticate, loadUser, async (req, res) => {
  await UserController.upgradeMembership(req, res);
});

export default router;
