import "./sass/main.scss";

async function writeText(str, el, cursorEl) {
  el.textContent = "";
  if (cursorEl) cursorEl.classList.remove("blinker-effect");
  for (let char of str) {
    await new Promise((resolve) => setInterval(resolve, 200));
    el.textContent += char;
  }
  if (cursorEl) cursorEl.classList.add("blinker-effect");
}


function main() {

  // Scroll to top button functionality

  document.querySelectorAll('.to-top').forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    });
  });

  // Write name animation functionality

  const WhoIAmEl = document.querySelector(
    "#hero-content-text-heading-whoiam"
  ),
    TextCursor = document.querySelector(
      "#hero-content-text-heading-text-cursor"
    ),
    str = "Hi, I'm André Martins.";

  writeText(str, WhoIAmEl, TextCursor);
}

window.addEventListener("load", main);
