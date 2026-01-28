function generateTemplateHtml(title, body) {
  return `
    <!DOCTYPE html>
    <html lang="is">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="styles.css" />
        <script type="module" src="scripts.js"></script>
        <title>${title}</title>
      </head>
      <body>
        <main>${body}</main>
      </body>
    </html>`;
}

export function generateIndexHtml(title, categories, slugs) {
  const html = `
    <section class="index">
      <h1>spurningavefur vals</h1>
      <p>hér má finna alls kyns spurningar! veldu frá</p>
      <ul>
        ${categories.map((category, i) => `
          <li><a href="${slugs[i]}.html">${category}</a></li>
        `).join("")}
      </ul>
    </section>
    `;
  return generateTemplateHtml(title, html);
}

function generateQuestionCardHtml(q) {
  return `
  <button type="button" class="card" aria-label="Snúa við">
    <div class="card-front">
      <h4>Erfiðleikastig: ${q.difficulty}</h4>
      <h3>${q.question}?</h3>
      <p>Smelltu til að sjá svarið!</p>
    </div>
    <div class="card-back">
      <h3>${q.answer}</h3>
    </div>
  </button>
    `;
}

export function generateCategoryIndexHtml(categoryTitle, questions) {
  const html = `
        <a href="index.html" class="back"> Til baka</a>
        <h1>${categoryTitle}</h1>
        <section class="questions">
          ${questions.map((q) => generateQuestionCardHtml(q)).join("")}
        </section>
    `;

  return generateTemplateHtml(categoryTitle, html);
}
