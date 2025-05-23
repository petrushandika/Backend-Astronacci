import { z } from "zod";

export const membershipSchema = z.object({
  membership: z.enum(["Starter", "Professional", "Unlimited"]),
});
