import prisma from "../config/prisma";

interface UserServiceResponse {
  error?: string;
  payload: any;
}

export const getLoggedUser = async (
  name: string
): Promise<UserServiceResponse> => {
  try {
    const user = await prisma.user.findFirst({
      where: { name },
      select: {
        id: true,
        email: true,
        name: true,
        membership: true,
      },
    });

    if (!user) {
      return { error: "User not found", payload: null };
    }

    return { payload: user };
  } catch (error) {
    return { error: "Failed to fetch user", payload: null };
  }
};

export const upgradeMembership = async (
  name: string,
  membership: string
): Promise<UserServiceResponse> => {
  const validMemberships = ["Starter", "Professional", "Unlimited"];
  if (!validMemberships.includes(membership)) {
    return { error: "Invalid membership type", payload: null };
  }

  try {
    const user = await prisma.user.findFirst({
      where: { name },
    });

    if (!user) {
      return { error: "User not found", payload: null };
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        membership: membership as any,
      },
      select: {
        id: true,
        name: true,
        email: true,
        membership: true,
      },
    });

    return { payload: updatedUser };
  } catch (error) {
    return { error: "Failed to upgrade membership", payload: null };
  }
};
