import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseQuestions,parseLine } from './parse.js';

describe('parse', () => {
  describe('parseLine', () => {
    it('should parse text that contains , correctly', () => {
      const line = '2,Stjörnufræði,2,,"Oberon, Titania og Puck eru tungl hvaða plánetu",Úranusar'
      const result = parseLine(line);
      assert.strictEqual(result.question, "Oberon, Titania og Puck eru tungl hvaða plánetu")
    })
    
    it('should parse text that contains " correctly', () => {
      const line = '5,,3,,"Á hvaða eyju á Hawaii er ""Pearl Harbor""",Oahu'
      const result = parseLine(line);
      assert.strictEqual(result.question, 'Á hvaða eyju á Hawaii er "Pearl Harbor"')
    })

    it('should parse the empty string and return null', () => {
      const line = ''
      const result = parseLine(line);
      assert.strictEqual(result, 'null')

    })
  })
});
