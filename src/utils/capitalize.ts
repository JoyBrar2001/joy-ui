export function capitalize(
  str: string,
  firstOnly: boolean = true
) {
  if (firstOnly) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}