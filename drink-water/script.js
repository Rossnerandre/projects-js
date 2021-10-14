const cup = document.querySelector('.cup');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const liters = document.getElementById('liters');
const cups = document.querySelectorAll('.cup-small');

let percent = 0;
let liter = 2;

cups.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.className == 'cup-small') {
      fillEmptyCup(true);
    } else {
      fillEmptyCup()
    }
    e.classList.toggle('fill')
  });
});


function fillEmptyCup(x) {
  if (x == true) {
    percent += 12.5;
    percentage.style.visibility = 'visible'
    liter -= .250;
    if (percent == 100) {
      remained.style.height = '0'
      remained.style.visibility = 'hidden'
    }
  }
  else {
    percent -= 12.5;
    liter += .250;
    remained.style.height = 'auto'
    remained.style.visibility = 'visible'
    if (percent == 0) {
      percentage.style.visibility = 'hidden'
    }
  }

  percentage.style.height = `${percent}%`
  percentage.textContent = `${percent}%`
  liters.innerText = `${liter}L`
}
