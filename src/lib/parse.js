


export function parseLine(line) {
  if (line.substring(0, 1) === "") {
    return null;
  }

  const split = line.split(",");
  const testSplit = line.split(",")

  if (testSplit[4].substring(0, 1) === "\"") {
    const temp = testSplit[4].concat(",", testSplit[5]);
    split[4] = temp
      .substring(1, temp.length - 1)
      .replace("\"\"", "\"");
    split[5] = split[6]
  }

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


function parseContent(content) {
  const lines = content.split('\n');
  const questions = lines.map(parseLine).filter(q => q !== null);;
  return questions;
}


export function parseQuestions(content) {
  return parseContent(content);
}


