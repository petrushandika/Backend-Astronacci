import { Request, Response } from "express";
import { getLoggedUser, upgradeMembership } from "../services/user.service";
import { upgradeMembershipSchema } from "../models/user.model";

class UserController {
  async getLoggedUser(req: Request, res: Response) {
    const loggedUser = res.locals.user;

    try {
      const { error, payload } = await getLoggedUser(loggedUser.name);

      if (error) {
        return res.status(500).json({ error: payload });
      }

      return res.status(200).json(payload);
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async upgradeMembership(req: Request, res: Response) {
    const result = upgradeMembershipSchema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ error: "Invalid input", payload: result.error });
    }

    const { membership } = result.data;
    const loggedUser = res.locals.user;

    const { error, payload } = await upgradeMembership(
      loggedUser.name,
      membership
    );

    if (error) {
      return res.status(500).json({ error: payload });
    }

    return res.status(200).json(payload);
  }
}

export default new UserController();
