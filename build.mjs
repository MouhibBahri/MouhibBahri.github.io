// Generates index.html (EN), fr/index.html (FR) and 404.html from src/.
// Run: node build.mjs            (self-hosted fonts)
//      FONTS=google node build.mjs   (fonts from Google Fonts)
import { writeFileSync, mkdirSync } from "node:fs";
import { render, render404 } from "./src/template.mjs";

// Light minification: drop indentation and blank lines between tags.
const tidy = (html) => html.replace(/\n\s+</g, "\n<").replace(/\n{2,}/g, "\n");

mkdirSync("fr", { recursive: true });
writeFileSync("index.html", tidy(render("en")));
writeFileSync("fr/index.html", tidy(render("fr")));
writeFileSync("404.html", render404());
console.log("built index.html, fr/index.html, 404.html");
