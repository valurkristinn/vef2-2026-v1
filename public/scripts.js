/* útfæra */

//card flipping functionality
const cards = document.querySelectorAll(".card");

function toggleFlipped(card) {
  card.classList.toggle("flipped")
}

for (const card of cards) {
  card.addEventListener("click", () => toggleFlipped(card));
}

//searchbar
const search = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const notFound = document.querySelector(".error");

const selectValues = ["Erfiðleikastig", "Gæði"]

export function filter() {
  for (const card of cards) {
    card.parentElement.style.display = "none"
  }
  const selection = select.value;
  const searchVal = parseInt(search.value);

  // aðeins heiltölur eða tómi strengurinn ganga
  if (search.value === "" || Number.isInteger(searchVal) && searchVal > 0 && searchVal < 4) {
    search.style["border-color"] = "black";
  } else {
    search.style["border-color"] = "red";
    return;
  }

  let filteredCards = cards

  // aðeins filtera ef það er tala
  if (search.value !== "") {
    filteredCards = Array.from(cards)
      .filter((card) => card.innerHTML.includes(selectValues[selection] + ": " + searchVal));
  }
  // aðeins sýna gild kort
  if (filteredCards.length > 0) {
    notFound.style.display = "none"
    for (const card of filteredCards) {
      card.parentElement.style.display = "block"
    }
  } else {
    notFound.style.display = "inline"
  }

}

search.addEventListener("keyup", () => filter())
select.addEventListener("change", () => filter())


// rétt/rangt takkar
let correct = 0;
let incorrect = 0;

const buttonsContainers = document.querySelectorAll('.buttons');

const counter = document.querySelector('.counter');

function disableButtons(buttons) {
  buttons[0].disabled = true;
  buttons[1].disabled = true;
  counter.innerText = correct + "/" + incorrect;
  console.log("click")
}


for (let container of buttonsContainers) {
  const buttons = container.querySelectorAll('button')
  buttons[0].addEventListener('click', () => {
    buttons[0].style["border-color"] = "green";
    correct++;
    disableButtons(buttons);
  });

  buttons[1].addEventListener('click', () => {
    buttons[1].style["border-color"] = "red";
    incorrect++;
    disableButtons(buttons);
  });
}
