import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const file = (p) => path.resolve(root, p);

const template = fs.readFileSync(file("dist/index.html"), "utf-8");
const { render } = await import("./dist-server/entry-server.js");

fs.writeFileSync(file("dist/index.html"), template.replace("<!--app-html-->", render()));
fs.rmSync(file("dist-server"), { recursive: true, force: true });
console.log("Pre-rendered dist/index.html");