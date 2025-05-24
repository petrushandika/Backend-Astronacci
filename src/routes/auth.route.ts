// src/routes/auth.route.ts
import express from "express";
import * as AuthController from "../controllers/auth.controller";
import passport from "passport";
import jwt from "jsonwebtoken";

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
    failureRedirect: `${process.env.VITE_URL}/auth/login`,
    session: false,
  }),
  (req, res) => {
    const user = req.user as any;

    if (!user) {
      return res.redirect(`${process.env.VITE_URL}/auth/login`);
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.redirect(`${process.env.VITE_URL}/auth/callback?token=${token}`);
  }
);

router.get("/facebook", passport.authenticate("facebook", { scope: "email" }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: `${process.env.VITE_URL}/auth/login`,
    session: false,
  }),
  (req, res) => {
    const user = req.user as any;

    if (!user) {
      return res.redirect(`${process.env.VITE_URL}/auth/login`);
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.redirect(`${process.env.VITE_URL}/auth/callback?token=${token}`);
  }
);

export default router;
