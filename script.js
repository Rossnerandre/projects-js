const btnNavToggle = document.querySelector('.btn-toggle');
btnNavToggle.addEventListener('click', () => {
  btnNavToggle.parentElement.children[2].classList.toggle('active')
  btnNavToggle.classList.toggle('active');
  if (btnNavToggle.parentElement.children[2].classList == 'links active') {
    btnNavToggle.children[0].classList.remove('fa-bars')
    btnNavToggle.children[0].classList.add('fa-times')
  } else {
    btnNavToggle.children[0].classList.remove('fa-times')
    btnNavToggle.children[0].classList.add('fa-bars')
  }

  console.log(btnNavToggle.children[0]);
})

const project = document.getElementById('projects')
let number = 1;
const myProjects = [
  { projectName: 'Animated Navigation', projectPath: 'animated-navigation' },
  { projectName: 'Chucknorris Random', projectPath: 'chucknorris-random' },
  { projectName: 'Digital Clock', projectPath: 'digital-clock' },
  { projectName: 'Event Keycode', projectPath: 'event-keycode' },
  { projectName: 'Hex Color', projectPath: 'hex-color' },
  { projectName: 'Split Landing Page', projectPath: 'split-landing-page' },
  { projectName: 'Grocery List', projectPath: 'grocery-list' },
  { projectName: 'Expanding Cards', projectPath: 'expanding-cards' },
  { projectName: 'Progress Steps', projectPath: 'progress-steps' },
  { projectName: 'Rotating Navigation', projectPath: 'rotating-navigation' },
  { projectName: 'Hidden Search', projectPath: 'hidden-search' },
  { projectName: 'Blurry Loading', projectPath: 'blurry-loading' },
  { projectName: 'Scroll Animation', projectPath: 'scroll-animation' },
  { projectName: 'Form Wave Animation', projectPath: 'form-wave-animation' },
  { projectName: 'Sound Board', projectPath: 'sound-board' },
  { projectName: 'Dad Jokes', projectPath: 'dad-jokes' },
  { projectName: 'Faq Collapse', projectPath: 'faq-collapse' },
  { projectName: 'Incrementing Counter', projectPath: 'incrementing-counter' },
  { projectName: 'Random Choice Picker', projectPath: 'random-choice-picker' },
  { projectName: 'Drink Water', projectPath: 'drink-water' },
]

const cards = document.createElement('div');
cards.classList.add('cards');

myProjects.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<div >
  <span class="number">
    ${number}
  </span>
  <div class="card-img">
    <img src="./${item.projectPath}/demo.png" alt="${item.projectName}">
  </div>
  <div class="card-text">
    <div class="text-wrap">
      <h3>${item.projectName}</h3>
      <a href="/${item.projectPath}">view Demo</a>
    </div>
  </div>
</div>`
  cards.appendChild(card);
  number++
});

project.appendChild(cards);
