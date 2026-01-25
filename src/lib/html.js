

export function template(title, body) {
    return `
    <!DOCTYPE html>
    <html lang="is">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="styles.css" />
        <script type="module" src="script.js"></script>
        <title>${title}</title>
      </head>
      <body>
        <main>${body}</main>
      </body>
    </html>`;
}


export function index(categories) {
    return `
        <section class="index">
            <h1>Spurningavefur Vals</h1>
            <p>Hér má finna alls kyns spurningar! veldu frá</p>
            <ul>
                ${categories.map(( category )=>(`
                    <li><a href="${ category }.html">${category}</a></li>
                    `
                ))}
            </ul>
        </section>`
}

export function questionCard(q) {
    return`
    <div class="card-front">
        <h3>${q.question}?</h3>
        <h4>Erfiðleikastig: ${q.difficulty}</h4>
        <p>Smelltu til að sjá svarið!</p>
    </div>
    <div class="card-back">
        <h3>${q.answer}?</h3>
    </div>`
}


export function categoryIndex(category, questions) {
    return `
        <section class="category">
            <h1>${category}</h1>
            ${questions.map((q) => (
                questionCard(q)
            ))}
        </section>
    `
}
 




