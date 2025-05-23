import express from "express";
import * as AuthController from "../controllers/auth.controller";
import passport from "passport";

const router = express.Router();

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    const { token } = req.user as any;
    res.json({ token });
  }
);

router.get("/failure", (req, res) => {
  res.status(401).json({ message: "Google Authentication Failed" });
});

export default router;
