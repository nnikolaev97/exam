import path from "path";
import fs from "fs";

export function readResource(folder: string, name: string) {
  var fullName = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "target",
    "classes",
    folder,
    name,
  );
  var content = fs.readFileSync(fullName, { encoding: "utf8" });
  return content;
}
