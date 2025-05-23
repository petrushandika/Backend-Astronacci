import { Request, Response } from "express";
import articleService from "../services/article.service";
import { AppError } from "../utils/error.utils";

class ArticleController {
  async getArticles(req: Request, res: Response) {
    const loggedUser = res.locals.user;

    if (!loggedUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userMembership = loggedUser.membership;

    if (!["Starter", "Professional", "Unlimited"].includes(userMembership)) {
      return res.status(400).json({ error: "Invalid membership type" });
    }

    try {
      const result = await articleService.findAll(userMembership);

      if (result.error) {
        throw new AppError("Failed to fetch articles", 500);
      }

      return res.status(200).json(result.payload);
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ArticleController();
