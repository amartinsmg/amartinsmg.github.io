import "./sass/main.scss";

async function writeName() {
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

function main() {
  writeName();
}

window.addEventListener("load", main);
