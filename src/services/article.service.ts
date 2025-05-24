import prisma from "../config/prisma";
import { ArticleDto } from "../dto/article.dto";
import { Limit } from "../utils/limit.utils";

class ArticleService {
  async findAll(membership: ArticleDto) {
    try {
      const articles = await prisma.article.findMany({
        orderBy: {
          title: "desc",
        },
      });

      const limit = Limit(membership);

      return {
        error: false,
        payload: {
          articles,
          limit,
        },
      };
    } catch (error) {
      return {
        error: true,
        payload: error,
      };
    }
  }
}

export default new ArticleService();
