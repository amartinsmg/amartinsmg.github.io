import "./sass/main.scss";

async function main() {

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
    Str = WhoIAmEl.textContent;
  WhoIAmEl.textContent = "";
  TextCursor.classList.remove("blinker-effect");
  for (let char of Str) {
    await new Promise((resolve) => setInterval(resolve, 200));
    WhoIAmEl.textContent += char;
  }
  TextCursor.classList.add("blinker-effect");
}

window.addEventListener("load", main);
