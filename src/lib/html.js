export function generateTemplateHtml(title, body) {
  return `
    <!DOCTYPE html>
    <html lang="is">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&disgf play=swap" rel="stylesheet">

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
      <h1>Spurningavefur Vals</h1>
      <p>Hér má finna alls kyns spurningar! veldu frá eftirfarandi flokkum</p>
      <ul>
        ${categories.map((category, i) => `
          <li><a href="${slugs[i]}.html">${category}</a></li>
        `).join("")}
      </ul>
    </section>
    `;
  return generateTemplateHtml(title, html);
}

export function generateQuestionCardHtml(q) {
  return `
    <div>
      <button type="button" class="card"  aria-label="Snúa við">
        <div class="card-front">
          <h4>Erfiðleikastig: ${q.difficulty}</h4>
          <h5 style="display:none">Gæði: ${q.quality}</h5>
          <h3>${q.question}?</h3>
          <p>Smelltu til að sjá svarið!</p>
        </div>
        <div class="card-back">
          <h3>${q.answer}</h3>
        </div>
      </button>
      <div class="buttons">
        <button>Rétt</button>
        <button>Rangt</button>
      </div>
    </div>
    `;
}

export function generateCategoryIndexHtml(categoryTitle, questions) {
  const html = `
        <nav>
          <a href="index.html" class="back">← Til baka</a>
          <p>Rétt/rangt: <span class="counter"> 0/0</span></p>
          <div>
            <label for="search">Leita</label>
            <input id="search" type="text" placeholder="1-3" autocomplete='off' />
            <select>
              <option value="0">Erfiðleikastig</option>
              <option value="1">Gæði</option>
            </select>
          </div>
        </nav>
        <h1>${categoryTitle}</h1>
        <section class="questions">
          ${questions.map((q) => generateQuestionCardHtml(q)).join("")}
          <span class="error">Ekkert fannst með þessum leitarskilyrðum!</span>
        </section>
    `;

  return generateTemplateHtml(categoryTitle, html);
}
