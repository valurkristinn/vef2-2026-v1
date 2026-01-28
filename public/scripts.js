/* útfæra */


document.querySelectorAll('.card').forEach(card => {
  console.log('click!')
  card.addEventListener('click', () => {
    console.log('click!')
    card.classList.toggle('flipped');
  });
});
