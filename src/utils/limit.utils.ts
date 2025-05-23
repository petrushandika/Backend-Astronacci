export function Limit(membership: string) {
  switch (membership) {
    case "Starter":
      return 3;
    case "Professional":
      return 10;
    case "Unlimited":
      return null;
  }
}
