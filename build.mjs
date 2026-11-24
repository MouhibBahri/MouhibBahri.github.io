// Generates index.html (EN), fr/index.html (FR) and 404.html from src/.
// Run: node build.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { render, render404 } from "./src/template.mjs";

mkdirSync("fr", { recursive: true });
writeFileSync("index.html", render("en"));
writeFileSync("fr/index.html", render("fr"));
writeFileSync("404.html", render404());
console.log("built index.html, fr/index.html, 404.html");
