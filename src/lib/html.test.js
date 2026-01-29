import assert from 'node:assert';
import { describe, it } from 'node:test';
import { generateIndexHtml, generateCategoryIndexHtml, generateTemplateHtml, generateQuestionCardHtml } from './html.js';

describe('html', () => {
  describe('generateTemplate', () => {
    it('should contain a title and body', () => {
      const title = "%TITLE%"; const body = "%BODY%"
      const output = generateTemplateHtml(title, body);

      assert.ok(output.includes(title));
      assert.ok(output.includes(body));
    })
  })

  describe('generateIndexHtml', () => {
    it('should contain multiple categories as links', () => {
      const categories = ["category1", "category2", "category3"]
      const output = generateIndexHtml("irrelevant", categories, categories);

      for (let i = 0; i < categories.length; i++) {
        assert.ok(output.includes(">" + categories[i] + "</a>"));
        assert.ok(output.includes('href="' + categories[i] + '.html"'));
      }
    })
  })

  describe('generateQuestionCardHtml', () => {
    it('should contain the question, answer and difficulty', () => {
      const q = {
        question: "%QUESTION%",
        answer: "%ANSWER%",
        difficulty: "%DIFFICULTY%"
      }
      const output = generateQuestionCardHtml(q);

      assert(output.includes(q.question + "?"));
      assert(output.includes(q.answer));
      assert(output.includes(q.difficulty));
    })
  })

  describe('generateCategoryIndexHtml', () => {
    it('should contain title, questions and their cards as well as a link back to index', () => {
      const title = "%TITLE%";
      const questions = [{
        question: "%QUESTION%",
        answer: "%ANSWER%",
        difficulty: "%DIFFICULTY%"
      }]
      const output = generateCategoryIndexHtml(title, questions);

      assert.ok(output.includes(title));
      assert(output.includes(questions[0].question));
      assert(output.includes(questions[0].answer));
      assert(output.includes(questions[0].difficulty));
      assert(output.includes('href="index.html"'));
    })
  })
});
