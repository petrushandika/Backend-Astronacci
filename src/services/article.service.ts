import prisma from "../config/prisma";
import { ArticleDto } from "../dto/article.dto";
import { Limit } from "../utils/limit.utils";

class ArticleService {
  async findAll(membership: ArticleDto) {
    const limit = Limit(membership);

    try {
      if (limit) {
        const articles = await prisma.article.findMany({
          take: limit,
          orderBy: {
            title: "desc",
          },
        });

        return {
          error: false,
          payload: articles,
        };
      }

      const articles = await prisma.article.findMany({
        orderBy: {
          title: "desc",
        },
      });

      return {
        error: false,
        payload: articles,
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
