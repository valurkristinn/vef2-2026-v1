import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseLine, parseQuestions } from './parse.js';

describe('parse', () => {
  describe('parseLine', () => {
    it('should parse text that contains , correctly', () => {
      const line = '2,Stjörnufræði,2,,"Oberon, Titania og Puck eru tungl hvaða plánetu",Úranusar'
      const result = parseLine(line);
      assert.strictEqual(result.question, "Oberon, Titania og Puck eru tungl hvaða plánetu")
    })

    it('should parse text that contains " correctly', () => {
      const line = '3,,2,,"Hver skrifaði ""A Tale of Two Cities""",Charles Dickens'
      const result = parseLine(line);
      assert.strictEqual(result.question, 'Hver skrifaði "A Tale of Two Cities"')
    })

    it('should parse the empty string and return null', () => {
      const line = ''
      const result = parseLine(line);
      assert.strictEqual(result, null)

    })

    it('should parse a line with required fields and return null', () => {
      const line = '3,,,,"Hver skrifaði ""A Tale of Two Cities""",Charles Dickens'
      const result = parseLine(line);
      assert.strictEqual(result, null)
    })
  })

  describe('parseQuestions', () => {
    it('should parse multiple lines and filter out null values', () => {
      const content = '2,Stjörnufræði,2,,"Oberon, Titania og Puck eru tungl hvaða plánetu",Úranusar\n3,,2,,"Hver skrifaði ""A Tale of Two Cities""",Charles Dickens';
      const result = parseQuestions(content);
      assert.strictEqual(result.length, 2);
    })
  })
});
