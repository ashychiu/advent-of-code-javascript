export function convertLinedStrToArr(string) {
  return string
    .split("\n\n")
    .map((line) => line.split("\n"))
    .flat();
}
