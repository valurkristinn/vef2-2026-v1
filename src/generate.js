import fs from 'node:fs/promises'

import { parseLine } from './lib/parse.js'

const Max_QUESTIONS_PER_CATEGORY = 100;



function constructQuestionCard(q) {
    const card = `
    <div>
        <div>
        <h3>${q.question}</h3>
        <h4>${q.difficulty}</h4>
        </div>
        <p>${q.answer}</p>
    </div>
    `
    return card;
}


async function main() {
    const content = await fs.readFile('./questions.csv', 'utf-8');

    const lines = content.split('\n');

    const questions = lines.map(parseLine);

    const qualityHistoryQuestions = questions.filter((q) => q.categoryNumber === "4" && q.quality === "3").slice(0, Max_QUESTIONS_PER_CATEGORY)

    const output = qualityHistoryQuestions.map(constructQuestionCard).join('\n')

    const path = "./dist/saga.html";

    fs.writeFile(path, output, "utf-8");
}

main().catch((error) => {
    console.error('error generating', error);
});
