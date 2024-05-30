// ! all selector
const body = document.querySelector("#body");
const changeRGBBtn = document.querySelector("#changeRgbBtn");

const rgbCode = document.querySelector("#rgbCode");
const hexaCode = document.querySelector("#hexaCode");
const span = document.querySelectorAll("div span");

function loadRGB() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  rgbCode.innerHTML = "RGB Code : " + `rgb(${red}, ${green}, ${blue})`;
  hexaCode.innerHTML =
    "Hexa Code : " +
    `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

changeRGBBtn.addEventListener("click", loadRGB);

// Copy Clipboard
span.forEach((p) => {
  p.addEventListener("click", () => {
    const colorCode = p.innerText.split(":")[1].trim();
    navigator.clipboard
      .writeText(colorCode)
      .then(() => {
        alert("Text copied to clipboard: " + colorCode);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  });
});

loadRGB();
