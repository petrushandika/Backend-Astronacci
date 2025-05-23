import { z } from "zod";

export const ArticleDto = z.enum(["Starter", "Professional", "Unlimited"]);
export type ArticleDto = z.infer<typeof ArticleDto>;
