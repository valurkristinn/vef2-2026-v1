export function parseQuestions() {
  return 'test';
}




export function parseLine(line) {
    const split = line.split(',');

    const q = {
        categoryNumber: split[0],
        category: split[1],
        difficulty: split[2],
        quality: split[3],
        question: split[4],
        answer: split[5],
    }
    return q;
}
