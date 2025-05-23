import prisma from "../config/prisma";
import { ContentDto } from "../dto/content.dto";
import { Limit } from "../utils/limit.utils";

class ContentService {
  async findAll(membership: ContentDto) {
    const limit = Limit(membership);

    try {
      if (limit) {
        const contents = await prisma.content.findMany({
          take: limit,
          orderBy: {
            title: "desc",
          },
        });

        return {
          error: false,
          payload: contents,
        };
      }

      const contents = await prisma.content.findMany({
        orderBy: {
          title: "desc",
        },
      });

      return {
        error: false,
        payload: contents,
      };
    } catch (error) {
      return {
        error: true,
        payload: error,
      };
    }
  }
}

export default new ContentService();
