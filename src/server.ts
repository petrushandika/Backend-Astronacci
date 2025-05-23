import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/auth.route";
import logger from "./utils/logger.utils";
import { AppError } from "./utils/error.utils";
import passport from "passport";
import "./config/passport";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("/api/auth", AuthRoutes);

app.use(passport.initialize());

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
