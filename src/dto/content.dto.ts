import { z } from "zod";

export const ContentDto = z.enum(["Starter", "Professional", "Unlimited"]);
export type ContentDto = z.infer<typeof ContentDto>;
