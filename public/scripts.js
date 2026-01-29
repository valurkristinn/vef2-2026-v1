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
const notFound = document.querySelector("span");

const selectValues = ["Erfiðleikastig", "Gæði"]

export function filter() {
  for (const card of cards) {
    card.style.display = "none"
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
      card.style.display = "flex"
    }
  } else {
    notFound.style.display = "inline"
  }

}

search.addEventListener("keyup", () => filter())
select.addEventListener("change", () => filter())

