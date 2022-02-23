const cardContainers = [...document.querySelectorAll(".cards-container")];

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

cardContainers.forEach(container => {
  const cards = container.childNodes[1]
  container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
  });

  container.addEventListener("mousemove", (e) => {
    // const cards = container.childNodes[1]
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards(container);
  });
})

function boundCards(container) {
  const container_rect = container.getBoundingClientRect();
  const cards = container.childNodes[1]
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}
