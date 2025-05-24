import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/passport";
import passport from "passport";

import AuthRoutes from "./routes/auth.route";
import UserRoutes from "./routes/user.route";
import ArticleRoutes from "./routes/article.route";
import ContentRoutes from "./routes/content.route";

import logger from "./utils/logger.utils";
import { AppError } from "./utils/error.utils";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(passport.initialize());

app.use("/api/auth", AuthRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/articles", ArticleRoutes);
app.use("/api/contents", ContentRoutes);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  logger.error(
    `${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );

  res.status(statusCode).json({
    error: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

app.use((req: Request, res: Response) => {
  logger.warn(
    `404 - Route Not Found - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
