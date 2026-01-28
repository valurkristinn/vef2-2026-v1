export function parseLine(line) {
  if (line.substring(0, 1) === "") {
    return null;
  }

  const split = line.split(",");

  if (split[4].substring(0, 1) === "\"") {
    let temp = split[4];
    if (split[6]) {
      temp = split[4].concat(",", split[5]);
      split[5] = split[6]
    }
    split[4] = temp.substring(1, temp.length - 1)
      .replace("\"\"", "\"").replace("\"\"", "\"");
  }

  if (!split[0] | !split[2] | !split[4] | !split[5]) {
    return null;
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


