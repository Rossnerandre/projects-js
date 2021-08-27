const BACKCOLOR = document.querySelector('#backgroud-color');

const randomBackground = () => {
  var hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  var hex1 = "";
  var hex2 = "";
  var randomIndex = 0;

  for (let i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * hexNumbers.length);
    hex1 += hexNumbers[randomIndex];
    randomIndex = Math.floor(Math.random() * hexNumbers.length);
    hex2 += hexNumbers[randomIndex];
  }

  BACKCOLOR.style.background = `linear-gradient(to right, #${hex1}, #${hex2})`;
  document.querySelector("#hex1").textContent = `#${hex1}`;
  document.querySelector("#hex2").textContent = `#${hex2}`;
  COLORPICKER.value = `#${hex1}`;
  COLORPICKER2.value = `#${hex2}`;
};

const COLORPICKER = document.querySelector('#color1');
const COLORPICKER2 = document.querySelector('#color2');
COLORPICKER.addEventListener("change", watchColorPicker1, false);
COLORPICKER2.addEventListener("change", watchColorPicker2, false);

let hex1 = '';
let hex2 = '#ffffff';
function watchColorPicker1(event) {
  hex1 = event.target.value;
  document.querySelector("#hex1").textContent = hex1;
  BACKCOLOR.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`;
}

function watchColorPicker2(event) {
  hex2 = event.target.value;
  document.querySelector("#hex2").textContent = hex2;
  BACKCOLOR.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`;
}
