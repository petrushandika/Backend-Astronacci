import prisma from "../config/prisma";
import { ContentDto } from "../dto/content.dto";
import { Limit } from "../utils/limit.utils";

class ContentService {
  async findAll(membership: ContentDto) {
    try {
      const contents = await prisma.content.findMany({
        orderBy: {
          title: "desc",
        },
      });

      const limit = Limit(membership);

      return {
        error: false,
        payload: {
          contents,
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

export default new ContentService();
