import "./sass/main.scss";

async function writeName() {
  const WhoIAmEl = document.querySelector(
    "#greeting-content-text-heading-whoiam"
  ),
    TextCursor = document.querySelector(
      "#greeting-content-text-heading-text-cursor"
    ),
    Str = WhoIAmEl.textContent;
  WhoIAmEl.textContent = "";
  TextCursor.classList.remove("blinker-effect");
  for (let char of Str) {
    await new Promise((resolve) => setInterval(resolve, 400));
    WhoIAmEl.textContent += char;
  }
  TextCursor.classList.add("blinker-effect");
}

function main() {
  writeName();
}

window.addEventListener("load", main);
