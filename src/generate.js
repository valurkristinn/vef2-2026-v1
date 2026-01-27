import fs from "node:fs/promises";

import { parseQuestions } from "./lib/parse.js";
import { generateIndexHtml, generateCategoryIndexHtml } from "./lib/html.js";

const MAX_QUESTIONS_PER_CATEGORY = 100;
const TARGET_DIR = "./dist";

const categories = [
  "Almenn kunnátta",
  "Náttúra og vísindi",
  "Bókmenntir og listir",
  "Saga",
  "Landafræði",
  "Skemmtun og afþreying",
  "Íþróttir og tómstundir",
];

const categorySlugs = categories.map((s) =>
  s.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[áà]/g, "a")
    .replace(/[éè]/g, "e")
    .replace(/[íì]/g, "i")
    .replace(/[óò]/g, "o")
    .replace(/[úù]/g, "u")
    .replace(/[ýỳ]/g, "y")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o"),
);

// stokkunarfall fengið af stack overflow
//
// Source - https://stackoverflow.com/a
// Posted by cocco, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-26, License - CC BY-SA 3.0

function fy(a, b, c, d) {
  //array,placeholder,placeholder,placeholder
  c = a.length;
  while (c)
    ((b = (Math.random() * (--c + 1)) | 0),
      (d = a[c]),
      (a[c] = a[b]),
      (a[b] = d));
}

async function main() {
  // búa til output möppu
  await fs.mkdir(TARGET_DIR, { recursive: true });

  //* temporary
  fs.copyFile("public/styles.css", "dist/styles.css");
  fs.copyFile("public/scripts.js", "dist/scripts.js");
  //*

  // sækja gögn
  const content = await fs.readFile("./questions.csv", "utf-8");
  const questions = parseQuestions(content);

  // parse index html
  const indexOutput = generateIndexHtml("Spurningavefur",categories, categorySlugs);
  fs.writeFile("./dist/index.html", indexOutput, "utf-8");

  // parse categories html
  for (let i = 0; i < categories.length; i++) {
    const categoryQuestions = questions.filter(
      (q) => q.categoryNumber === i + 1 + "",
    );

    fy(categoryQuestions);

    const outputQuestions = categoryQuestions.slice(0, MAX_QUESTIONS_PER_CATEGORY);

    const output = generateCategoryIndexHtml(categories[i], outputQuestions);

    const path = "./dist/" + categorySlugs[i] + ".html";

    fs.writeFile(path, output, "utf-8");
  }
}

main().catch((error) => {
  console.error("error generating", error);
});
