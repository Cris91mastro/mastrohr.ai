const board = document.querySelector(".workboard");

if (board) {
  board.addEventListener("pointermove", (event) => {
    const rect = board.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    board.style.transform = `perspective(1200px) rotateX(${y * -2.4}deg) rotateY(${x * 3.2}deg) translateY(-3px)`;
  });

  board.addEventListener("pointerleave", () => {
    board.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
}

const processCards = document.querySelectorAll(".process-card");

if (processCards.length) {
  processCards.forEach((card) => {
    const button = card.querySelector("button");
    const panel = card.querySelector(".process-panel");

    button.addEventListener("click", () => {
      const shouldOpen = !card.classList.contains("is-active");

      processCards.forEach((item) => {
        item.classList.remove("is-active");
        item.querySelector("button").setAttribute("aria-expanded", "false");
        item.querySelector(".process-panel").hidden = true;
      });

      if (shouldOpen) {
        card.classList.add("is-active");
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });
  });
}
